let container, scene, camera, renderer, car;
    
    function init() {
      container = document.querySelector(".scene");
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(35, container.clientWidth / container.clientHeight, 0.1, 1000);
      camera.position.set(0, 1, 5);
      renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
      renderer.setSize(container.clientWidth, container.clientHeight);
      renderer.setPixelRatio(window.devicePixelRatio);
      container.appendChild(renderer.domElement);

      camera.position.set(0, 1, 5);
  
      let loader = new THREE.GLTFLoader();
      loader.load("./lancia_fulvia_rallye/scene.gltf", function(gltf) {
        scene.add(gltf.scene);
        car = gltf.scene.children[0];
        animate();
      });
      lights();
    };
    
    function lights() {
      const ambientLight = new THREE.AmbientLight(0x404040, 2)
      scene.add(ambientLight)

      const light = new THREE.DirectionalLight(0xffffff, 5);
      light.position.set(50, 50, 100);
      scene.add(light);
    }

    function animate() {
        requestAnimationFrame(animate);
        car.rotation.z += 0.005;
        renderer.render(scene, camera);
    }

    function onWindowResize() {
      ccamera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
    
      renderer.setSize(container.clientWidth, container.clientHeight);
    }; 

    init();
    window.addEventListener('resize', onWindowResize)
    //setTimeout(function(){createTexture(geometry, 0x44aa88, 0)}, 3000)

    // function render() {
    //   renderer.render(scene, camera);
    // }
    // function Go() {
    //   requestAnimationFrame(Go);
    //   //animate();
    //   //render();
    //   renderer.render(scene, camera);
    // };

    // function pageFullyLoaded(){
    //   createTexture(geometry, 0x44aa88, 0)
    // }

     //window.addEventListener('load', pageFullyLoaded, false)
    