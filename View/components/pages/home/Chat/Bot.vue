<script setup lang="ts">
import icon from '@/public/icons.webp';
</script>

<template>
  <div class="d-flex justify-center align-items-start ga-3 mb-8">
    <v-avatar>
      <img :src="icon" alt="pro" width="40" />
    </v-avatar>
    <div>
      <small class="text-medium-emphasis text-subtitle-2"> Maurice </small>
      <v-sheet class="bg-grey100 rounded-md px-3 py-2 mb-1">
        <PagesHomeModelViewer />
      </v-sheet>
    </div>
  </div>
</template>
