// https://stackblitz.com/edit/three-csg-ts?file=index.ts
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { CSG } from 'three-csg-ts';

let camera: THREE.PerspectiveCamera,
  scene: THREE.Scene,
  renderer: THREE.WebGLRenderer;

init();
animate();

function init() {
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    1,
    10000
  );
  const controls = new OrbitControls(camera, renderer.domElement);
  camera.position.set(0, 20, 10);
  controls.update();

  // Make a box mesh
  const boxMain = new THREE.Mesh(
    new THREE.BoxGeometry(10, 10, 10),
    new THREE.MeshNormalMaterial()
  );

  const boxX = new THREE.Mesh(
    new THREE.BoxGeometry(12, 8, 8),
    new THREE.MeshNormalMaterial()
  );

  const boxY = new THREE.Mesh(
    new THREE.BoxGeometry(8, 12, 8),
    new THREE.MeshNormalMaterial()
  );
  
  const boxZ = new THREE.Mesh(
    new THREE.BoxGeometry(8, 8, 12),
    new THREE.MeshNormalMaterial()
  );

  // perform operations on the meshes
  const subRes  = CSG.subtract( CSG.subtract(CSG.subtract(boxMain, boxX), boxY), boxZ);

  // const unionRes = CSG.union(box, sphere);
  // const interRes = CSG.intersect(box, sphere);

  // // space the meshes out so they don't overlap
  // unionRes.position.add(new THREE.Vector3(0, 0, 5));
  // interRes.position.add(new THREE.Vector3(0, 0, -5));

  // add the meshes to the scene
  scene.add(subRes );
}

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
