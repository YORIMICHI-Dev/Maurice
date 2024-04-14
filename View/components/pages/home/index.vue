<script setup lang="ts">
const showView = ref<boolean>(true);

function notShowView() {
  showView.value = false;
}
</script>

<template>
  <!-- show initial view -->
  <PagesHomeBeforeSearch v-if="showView" />

  <PagesHomeChat v-else />
  <PagesHomeSearchBox @notShowView="notShowView" />
</template>
