import {
  Engine,
  Scene,
  FreeCamera,
  Vector3,
  MeshBuilder,
  StandardMaterial,
  Color3,
  HemisphericLight,
  Animation,
} from '@babylonjs/core';
import type { Nullable } from '@babylonjs/core';

type SceneConfigType = {
  engine: Engine | null;
  scene: Scene | null;
  createScene: (
    canvas: Nullable<HTMLCanvasElement | OffscreenCanvas | WebGLRenderingContext | WebGL2RenderingContext>
  ) => void;
  setPosition: (name: string, x: number, y: number, z: number) => void;
  animateMeshVisibility: (name: string, from: number, to: number, speed: number) => void;
};

export const myScene: SceneConfigType = {
  engine: null,
  scene: null,
  createScene: function (canvas) {
    const engine = new Engine(canvas);
    const scene = new Scene(engine);
    this.engine = engine;
    this.scene = scene;

    const camera = new FreeCamera('camera1', new Vector3(0, 5, -10), scene);
    camera.setTarget(Vector3.Zero());
    camera.attachControl(canvas, true);

    new HemisphericLight('light', Vector3.Up(), scene);

    const box = MeshBuilder.CreateBox('box', { size: 2 }, scene);
    const material = new StandardMaterial('box-material', scene);
    material.diffuseColor = Color3.Blue();
    box.material = material;

    engine.runRenderLoop(() => {
      scene.render();
    });
  },
  setPosition: function (name, x, y, z) {
    if (this.scene === null) return;

    const mesh = this.scene.getMeshByName(name);
    if (mesh) {
      mesh.position = new Vector3(x, y, z);
    }
  },

  animateMeshVisibility: async function (name, from, to, speed) {
    return new Promise((resolve, reject) => {
      const mesh = this.scene?.getMeshByName(name);
      if (!mesh) {
        reject('No mesh found with the name: ' + name);
        return;
      }

      const visibilityAnimation = new Animation(
        'animVisibility',
        'visibility',
        60,
        Animation.ANIMATIONTYPE_FLOAT,
        Animation.ANIMATIONLOOPMODE_CONSTANT
      );

      const keys = [
        {
          frame: 0,
          value: from,
        },
        {
          frame: 60, // Duration of the animation in frames
          value: to,
        },
      ];

      visibilityAnimation.setKeys(keys);

      mesh.animations = [visibilityAnimation];
      this.scene?.beginAnimation(mesh, 0, 60, false, speed, () => {
        resolve();
      });
    });
  },
};
