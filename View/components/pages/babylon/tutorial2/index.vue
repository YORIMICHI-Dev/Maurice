<script setup lang="ts">
import { createScene } from '~/components/pages/babylon/tutorial2/MyFirstScene';

const bjsCanvas = ref<HTMLCanvasElement | null>(null);
const fpsRef = ref<string>('');

onMounted(() => {
  if (bjsCanvas.value) {
    const fpsCallback = (fps: string) => {
      fpsRef.value = fps;
    };
    createScene(bjsCanvas.value, fpsCallback);
  }
});
</script>

<template>
  <label>{{ fpsRef }}</label>
  <canvas ref="bjsCanvas" width="500" height="500"></canvas>
</template>

<style>
body {
  padding: 10px;
}

label {
  display: block;
  z-index: 100;
}
</style>
