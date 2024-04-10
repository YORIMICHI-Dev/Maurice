<script setup lang="ts">
import { createScene } from '~/components/pages/babylon/tutorial1/MyFirstScene';

const bjsCanvas = ref<HTMLCanvasElement | null>(null)

onMounted(() => {
    if (bjsCanvas.value) {
        createScene(bjsCanvas.value);
    }
})
</script>

<template>
    <canvas ref="bjsCanvas" width="500" height="500"></canvas>
</template>
