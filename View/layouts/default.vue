<script setup lang="ts">
import { THEME } from '@/theme/theme';
</script>

<template>
  <v-app :theme="THEME.name">
    <LayoutSidebar />

    <v-main>
      <v-container fluid>
        <slot />
      </v-container>
    </v-main>
  </v-app>
</template>
