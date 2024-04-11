<template>
  <button @click="hide">Hide</button>
  <div>
    <canvas ref="bjsCanvas" width="500" height="500"></canvas>
  </div>
</template>

<script setup lang="ts">
import { myScene } from './MyScene';
const bjsCanvas = ref<HTMLCanvasElement | null>(null);

onMounted(() => {
  if (bjsCanvas.value) {
    myScene.createScene(bjsCanvas.value);
  }
});

async function hide() {
  await myScene.animateMeshVisibility('box', 1, 0, 0.3);
  alert('Done');
}
</script>
