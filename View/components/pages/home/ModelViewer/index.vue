<template>
  <div class="d-flex justify-center threeContainer">
    <canvas class="rounded-lg" ref="threeCanvas" width="100%" height="500"></canvas>
  </div>
</template>

<script setup lang="ts">
import { sceneConfig } from './generateModelScene';

const threeCanvas = ref<HTMLCanvasElement | null>(null);

onMounted(() => {
  if (threeCanvas.value) {
    sceneConfig.createScene(threeCanvas.value);
  }
});
</script>

<style>
.threeContainer {
  position: relative;
}
</style>
