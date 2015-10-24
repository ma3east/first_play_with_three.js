console.log('javascript is ready');

var camera, scene, renderer, geometry, cube, material, cubeImage, hemiLight;

var width = window.innerWidth;
var height = window.innerHeight;

function init() {
  scene = new THREE.Scene();
  // scene.add(camera);

  // camera
  camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
  camera.position.z = 2000;
  
  // use an image for the cube material
  // cubeImage = new THREE.ImageUtils.loadTexture('images/GA.png');


  material = new THREE.MeshPhongMaterial({
    color: 0xff0000, 
    specular: 0x009900, 
    shininess: 30, 
    shading: THREE.FlatShading
    // map: cubeImage,
    // side: THREE.DoubleSide
  });

  // material.map.needsUpdate = true;

  //cube geometry
  geometry = new THREE.BoxGeometry(300, 300, 300);

  cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  // light
  // hemiLight = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 );
  // scene.add( hemiLight );


  var pointLight = new THREE.PointLight(0xffffff, 1, 100);
  // pointLight.position.set(50, 50, 50);
  scene.add(pointLight);

  // var dLight = new THREE.DirectionalLight(0xFFFFFF);
  // dLight.position.set(0, 1, 0);
  // scene.add(dLight);

  pointLight.position.x = 10;
  pointLight.position.y = 50;
  pointLight.position.z = 1000;

  // // scene.add(pointLight);

  // renderer
  renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true 
    });
  renderer.setSize(width, height);
  renderer.setClearColor(0x336699, 1)

  document.body.appendChild(renderer.domElement);

  animate();
}

function animate() {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.02;
  cube.rotation.y += 0.02;
  
  renderer.render(scene, camera);
}

window.onload = init;

