// https://stackblitz.com/edit/three-csg-ts?file=index.ts
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { CSG } from 'three-csg-ts';

let camera: THREE.PerspectiveCamera,
  scene: THREE.Scene,
  renderer: THREE.WebGLRenderer;

init();
animate();

function subtract(source: THREE.Mesh, ...objs:THREE.Mesh[]) {
  let result = source;
  for (const obj of objs) {
    result =  CSG.subtract(result, obj)
  }
  return result;
}

function union(source: THREE.Mesh, ...objs:THREE.Mesh[]) {
  let result = source;
  for (const obj of objs) {
    result =  CSG.union(result, obj)
  }
  return result;
}
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
    new THREE.BoxGeometry(12, 9, 9),
    new THREE.MeshNormalMaterial()
  );

  const boxY = new THREE.Mesh(
    new THREE.BoxGeometry(9, 12, 9),
    new THREE.MeshNormalMaterial()
  );
  
  boxY.geometry.translate( 0,10,0 );

  const boxZ = new THREE.Mesh(
    new THREE.BoxGeometry(9, 9, 12),
    new THREE.MeshNormalMaterial()
  );

  // perform operations on the meshes
  const subRes  = subtract(boxMain, boxX, boxY, boxZ);

  const boxZZ = new THREE.Mesh(
    new THREE.BoxGeometry(9, 9, 0.5),
    new THREE.MeshNormalMaterial()
  );
  
  boxZZ.geometry.translate( 0,0,4.7 );

  const boxXX = new THREE.Mesh(
    new THREE.BoxGeometry(0.5,9,  9),
    new THREE.MeshNormalMaterial()
  );
  
  boxXX.geometry.translate( 3,0,0 );

  const boxYY = new THREE.Mesh(
    new THREE.BoxGeometry(9, 0.5, 9),
    new THREE.MeshNormalMaterial()
  );
  
  boxYY.geometry.translate( 0,4.7,0 );

  const geometry = new THREE.CylinderGeometry(3, 3, 4, 32 ); 
  const material = new THREE.MeshNormalMaterial(); 
  const cylinder = new THREE.Mesh( geometry, material );

  cylinder.geometry.rotateZ(THREE.MathUtils.degToRad(90));
  cylinder.geometry.translate( 3.5,0,0 );

//////////////////////////////////
  /** Fan**/

    const baseGeometry = new THREE.CylinderGeometry(0.5, 0.5, 0.2, 32);
  const baseMaterial = new THREE.MeshBasicMaterial({ color: 0x808080 });
  const baseMesh = new THREE.Mesh(baseGeometry, baseMaterial);
  scene.add(baseMesh);
  
  // Create fan blades

  // Create fan blades
const bladeShape = new THREE.Shape();
bladeShape.moveTo(0, 0);
bladeShape.lineTo(0.1, 0.1);
bladeShape.lineTo(0.05, 1);
bladeShape.lineTo(-0.05, 1);
bladeShape.lineTo(-0.1, 0.1);
bladeShape.lineTo(0, 0);

const extrudeSettings = {
  depth: 0.1,
  bevelEnabled: false,
};

const bladeGeometry = new THREE.ExtrudeGeometry(bladeShape, extrudeSettings);
const bladeMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

  for (let i = 0; i < 8; i++) {
    const bladeMesh = new THREE.Mesh(bladeGeometry, bladeMaterial);
    bladeMesh.position.y = 0.1;
    bladeMesh.rotation.z = (i * Math.PI * 2) / 8;
    baseMesh.add(bladeMesh);
  }
//////////////////////////////////


  /////////////////////////////
  working
    for (let i = 0; i < 8; i++) {
    const box = new THREE.Mesh(
      new THREE.BoxGeometry(0.2, 0.05, 1),
      new THREE.MeshNormalMaterial()
    );
    box.geometry.rotateZ(THREE.MathUtils.degToRad(30));
    box.geometry.translate( 0, i * 0.2, 0 );
    scene.add(box);
  }
  //////////////////////

  
  const result = union(subRes, boxXX, boxYY, boxZZ, cylinder);


  // const unionRes = CSG.union(box, sphere);
  // const interRes = CSG.intersect(box, sphere);

  // // space the meshes out so they don't overlap
  
  // interRes.position.add(new THREE.Vector3(0, 0, -5));

  // add the meshes to the scene
  scene.add(result );
}

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
