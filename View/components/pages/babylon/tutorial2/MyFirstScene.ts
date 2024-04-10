import {
  Engine,
  Scene,
  FreeCamera,
  Vector3,
  MeshBuilder,
  StandardMaterial,
  Color3,
  HemisphericLight,
} from '@babylonjs/core';
import type { Nullable } from '@babylonjs/core';

export function createScene(
  canvas: Nullable<HTMLCanvasElement | OffscreenCanvas | WebGLRenderingContext | WebGL2RenderingContext>,
  fpsCallback: (val: string) => void
) {
  const engine = new Engine(canvas);
  const scene = new Scene(engine);

  const camera = new FreeCamera('camera1', new Vector3(0, 5, -10), scene);
  camera.setTarget(Vector3.Zero());
  camera.attachControl(canvas, true);

  new HemisphericLight('light', Vector3.Up(), scene);

  const boxRed = MeshBuilder.CreateBox('box-red', { size: 1 }, scene);
  const materialRed = new StandardMaterial('box-red-material', scene);
  materialRed.diffuseColor = Color3.Red();
  boxRed.material = materialRed;
  boxRed.position.x = -2;

  const boxBlue = MeshBuilder.CreateBox('box-blue', { size: 1 }, scene);
  const materialBlue = new StandardMaterial('box-blue-material', scene);
  materialBlue.diffuseColor = Color3.Blue();
  boxBlue.material = materialBlue;

  const boxGreen = MeshBuilder.CreateBox('box-green', { size: 1 }, scene);
  const materialGreen = new StandardMaterial('box-green-material', scene);
  materialGreen.diffuseColor = Color3.Green();
  boxGreen.material = materialGreen;
  boxGreen.position.x = 2;

  engine.runRenderLoop(() => {
    scene.render();

    boxGreen.rotation.y += 0.01;

    if (fpsCallback) {
      fpsCallback(engine.getFps().toFixed());
    }
  });
}
