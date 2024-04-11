<template>
  <div>
    <button @click="moveCube">Move Cube</button>
    <canvas ref="bjsCanvas" width="500" height="500"></canvas>
  </div>
</template>

<script setup lang="ts">
import { myScene } from './MyFirstScene';

const bjsCanvas = ref<HTMLCanvasElement | null>(null);
const position = ref<{ x: number; y: number; z: number }>({
  x: 0,
  y: 0,
  z: 0,
});
const offset = ref<number>(1);
watch(position, () => {
  myScene.setPosition('box-yellow', position.value.x, position.value.y, position.value.z);
});

// On mounted
onMounted(() => {
  if (bjsCanvas.value) {
    myScene.createScene(bjsCanvas.value);
  }
});

// Click Event
function moveCube() {
  position.value = { x: position.value.x, y: position.value.y + offset.value, z: position.value.z };
}
</script>
