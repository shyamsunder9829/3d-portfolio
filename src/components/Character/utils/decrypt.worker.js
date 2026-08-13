// Web Worker to decrypt encrypted model off the main thread
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

self.addEventListener("message", async (e) => {
  const { id, url, password } = e.data;
  try {
    const response = await fetch(url);
    const encryptedData = await response.arrayBuffer();
    const iv = new Uint8Array(encryptedData.slice(0, 16));
    const data = encryptedData.slice(16);
    const key = await generateAESKey(password);
    const decrypted = await crypto.subtle.decrypt({ name: "AES-CBC", iv }, key, data);
    // Transfer the ArrayBuffer back to main thread
    self.postMessage({ id, success: true, buffer: decrypted }, [decrypted]);
  } catch (err) {
    self.postMessage({ id, success: false, error: String(err) });
  }
});
