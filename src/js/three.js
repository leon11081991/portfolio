import * as THREE from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
//import * as dat from "dat.gui";

// debug panel
//const gui = new dat.GUI();
//console.log(gui);

// loader
const loader = new THREE.TextureLoader();
// const texture = loader.load("/digital-texture.jpg");
// const texture = loader.load("/texture.png");
const texture = loader.load("/dots-texture.jpg");
const height = loader.load("/height.png");
const alpha = loader.load("/alpha.png");

// canvas
const canvas = document.querySelector("canvas.webgl");
// console.log(canvas);

// scene
const scene = new THREE.Scene();

// objects
const geometry = new THREE.PlaneGeometry(3, 3, 64, 64);

// materials
const material = new THREE.MeshStandardMaterial({
  color: "#808080",
  map: texture,
  displacementMap: height,
  displacementScale: 0.6,
  alphaMap: alpha,
  transparent: true,
  // depthPath: false,
});

// mesh
const plane = new THREE.Mesh(geometry, material);
scene.add(plane);
plane.rotation.x = 181;
//gui.add(plane.rotation, "x").min(0).max(600);

// lights
const pointLight = new THREE.PointLight(0x808080, 2);
pointLight.position.set(0.2, 10, 4.4);
scene.add(pointLight);
//gui.add(pointLight.position, "x").min(0).max(50);
//gui.add(pointLight.position, "y").min(0).max(50);
//gui.add(pointLight.position, "z").min(0).max(50);

// sizes
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

window.addEventListener("resize", () => {
  // Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  100
);
camera.position.x = 0;
camera.position.y = 0;
camera.position.z = 2;
scene.add(camera);

// Controls
// const controls = new OrbitControls(camera, canvas);
// controls.enableDamping = true;

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  alpha: true,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

/**
 * Animate
 */
document.addEventListener("mousemove", mouseScale);
let mouseY = 0;
function mouseScale(event) {
  // console.log(event.clientY);
  mouseY = event.clientY;
}

const clock = new THREE.Clock();

const tick = () => {
  const elapsedTime = clock.getElapsedTime();

  // Update objects
  // plane.rotation.x = 0.3 * elapsedTime;
  // plane.rotation.y = 0.6 * elapsedTime;
  plane.rotation.z = 0.3 * elapsedTime;
  plane.material.displacementScale = 0.3 + mouseY * 0.0008;

  // Update Orbital Controls
  // controls.update()

  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();
