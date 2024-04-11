<script setup lang="ts">
import { IconSend, IconPaperclip } from '@tabler/icons-vue';
</script>

<template>
  <v-sheet id="searchBox" outlined class="border rounded-xl">
    <div class="d-flex flex-col justify-center align-center">
      <v-btn icon variant="text" type="submit" class="text-medium-emphasis">
        <IconPaperclip size="20" stroke="2" />
      </v-btn>
      <v-text-field
        variant="solo"
        hide-details
        color="primary"
        class="shadow-none"
        density="compact"
        elevation="0"
        flat
        placeholder="Generate 3D model with your own ideas"
      />
      <v-btn icon variant="text" type="submit" class="text-medium-emphasis">
        <IconSend size="20" stroke="2" />
      </v-btn>
    </div>
  </v-sheet>
</template>

<style>
#searchBox {
  position: fixed;
  bottom: 5%;
  left: 50%;
  width: 50%;
  transform: translateX(-50%);
}
</style>
