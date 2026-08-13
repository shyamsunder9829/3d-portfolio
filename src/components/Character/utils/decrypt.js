async function generateAESKey(password) {
  const passwordBuffer = new TextEncoder().encode(password);
  const hashedPassword = await crypto.subtle.digest("SHA-256", passwordBuffer);
  return crypto.subtle.importKey(
    "raw",
    hashedPassword.slice(0, 32),
    { name: "AES-CBC" },
    false,
    ["encrypt", "decrypt"]
  );
}

export const decryptFile = async (
  url,
  password
) => {
  // Use a Web Worker when available to keep decryption off the main thread
  if (typeof Worker !== "undefined") {
    return new Promise((resolve, reject) => {
      try {
        const worker = new Worker(new URL("./decrypt.worker.js", import.meta.url), { type: "module" });
        const id = Math.random().toString(36).slice(2);
        const onMessage = (e) => {
          if (e.data.id !== id) return;
          worker.removeEventListener("message", onMessage);
          worker.terminate();
          if (e.data.success) {
            resolve(e.data.buffer);
          } else {
            reject(new Error(e.data.error || "Decryption failed"));
          }
        };
        worker.addEventListener("message", onMessage);
        worker.postMessage({ id, url, password });
      } catch (err) {
        reject(err);
      }
    });
  }

  // Fallback to main-thread decryption if Worker not available
  const response = await fetch(url);
  const encryptedData = await response.arrayBuffer();
  const iv = new Uint8Array(encryptedData.slice(0, 16));
  const data = encryptedData.slice(16);
  const key = await generateAESKey(password);
  return crypto.subtle.decrypt({ name: "AES-CBC", iv }, key, data);
};
