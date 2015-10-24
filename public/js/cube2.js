console.log('javascript 2 is ready');

var camera, 
scene, 
renderer, 
geometry, 
cube, 
material, 
cubeImage, 
hemiLight;

var width = window.innerWidth;
var height = window.innerHeight;
var materials = [];

function init() {
  scene = new THREE.Scene();
  
  // camera
  camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
  camera.position.z = 2000;
  
  // use images for the cube materials
  cubeImage1 = THREE.ImageUtils.loadTexture('images/GA.png');
  cubeImage2 = THREE.ImageUtils.loadTexture('images/js.png');
  cubeImage3 = THREE.ImageUtils.loadTexture('images/braces.png');
  cubeImage4 = THREE.ImageUtils.loadTexture('images/HTML5CSS3.jpg');
  cubeImage5 = THREE.ImageUtils.loadTexture('images/Octocat.png');
  cubeImage6 = THREE.ImageUtils.loadTexture('images/Code.png');

  // material = new THREE.MeshLambertMaterial({
  //   map: cubeImage,
  //   // color: 0x28c0ec, //0xff0000, 
  //   specular: 0x009900, 
  //   shininess: 30, 
  //   shading: THREE.FlatShading
  //   // map: cubeImage,
  //   // side: THREE.DoubleSide
  // });

  materials.push(new THREE.MeshLambertMaterial({ map: cubeImage1 })); // right face
  materials.push(new THREE.MeshLambertMaterial({ map: cubeImage2 })); // left face
  materials.push(new THREE.MeshLambertMaterial({ map: cubeImage3 })); // top face
  materials.push(new THREE.MeshLambertMaterial({ map: cubeImage4 })); // bottom face
  materials.push(new THREE.MeshLambertMaterial({ map: cubeImage5 })); // front face
  materials.push(new THREE.MeshLambertMaterial({ map: cubeImage6 })); // back face

  material = new THREE.MeshFaceMaterial(materials);

  //cube geometry
  geometry = new THREE.BoxGeometry(300, 300, 300);

  cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  // Add light
  addLights();
  
  // renderer
  renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true 
    });
  renderer.setSize(width, height);
  renderer.setClearColor(0xff0000, 1); //0x336699

  document.body.appendChild(renderer.domElement);

  THREEx.WindowResize(renderer, camera);
  animate();
}

function addLights() {
  var pointLight = new THREE.PointLight(0xffffff, 1, 100);
  pointLight.position.set(50, 50, 50);
  scene.add(pointLight);

  // hemiLight = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 );
  // scene.add( hemiLight );

  // var dLight = new THREE.DirectionalLight(0xFFFFFF, 1, 100);
  // dLight.position.set(10, 1, 10);
  // scene.add(dLight);

}

function render() {
  renderer.render(scene, camera);
}

function animate() {
  cube.rotation.x += 0.02;
  cube.rotation.y += 0.02;
  render();
  requestAnimationFrame(animate);
}

window.onload = init;
