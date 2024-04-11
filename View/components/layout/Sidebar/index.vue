<script setup lang="ts">
import sidebarItem from './sidebarItem';
</script>

<template>
  <v-navigation-drawer left elevation="0" app width="270" class="leftSidebar">
    <!-- Icon -->
    <div class="d-flex align-center px-6 py-4">
      <Icon width="40" />
      <h2 class="ml-2">Maurice</h2>
    </div>

    <!-- Navi List -->
    <v-list class="pa-6" density="compact">
      <!---Menu Loop -->
      <template v-for="(item, i) in sidebarItem">
        <!---Item Sub Header -->
        <LayoutSidebarNavGroup :header="item.header" v-if="item.header" :key="i" />

        <!---Single Item-->
        <LayoutSidebarNavItem :item="item" :level="0" v-else />
      </template>
    </v-list>
  </v-navigation-drawer>
</template>
