import { Scene, PerspectiveCamera, WebGLRenderer, Mesh, BoxGeometry, MeshNormalMaterial, Color } from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';

type SceneConfigType = {
  scene: Scene | null;
  renderer: WebGLRenderer | null;
  createScene: (canvas: HTMLCanvasElement) => void;
};

export const sceneConfig: SceneConfigType = {
  scene: null,
  renderer: null,
  createScene: function (canvas) {
    // Scene config
    const scene = new Scene();
    scene.background = new Color(0x123456);

    // Camera config
    const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 1;

    // Renderer config
    const renderer = new WebGLRenderer({
      canvas: canvas,
    });
    renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);

    // Control config
    new OrbitControls(camera, renderer.domElement);

    // Material config
    // const geometry = new BoxGeometry()
    // const material = new MeshNormalMaterial()
    // const cube = new Mesh(geometry, material)
    // scene.add(cube)

    const loader = new OBJLoader();
    loader.load('/obj/tmpp2n8b99j.obj', (obj) => {
      scene.add(obj);
    });

    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
    });

    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }
    animate();
  },
};
