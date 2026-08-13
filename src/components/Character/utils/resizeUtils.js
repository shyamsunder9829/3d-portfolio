import * as THREE from "three";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { setCharTimeline, setAllTimeline } from "../../utils/GsapScroll.js";

export default function handleResize(
  renderer,
  camera,
  canvasDiv,
  character
) {
  if (!canvasDiv.current) return;
  let canvas3d = canvasDiv.current.getBoundingClientRect();
  const width = canvas3d.width;
  const height = canvas3d.height;
  renderer.setSize(width, height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  // avoid recreating timelines on every resize which can leak intervals/handlers
  // instead refresh ScrollTrigger to update pinned/positioned elements
  try {
    ScrollTrigger.refresh();
  } catch (e) {
    // ignore if ScrollTrigger not initialized yet
  }
}
