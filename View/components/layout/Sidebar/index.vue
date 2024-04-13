<script setup lang="ts">
import sidebarItem from './sidebarItem';
const sidebarItemRef = shallowRef(sidebarItem);
</script>

<template>
  <v-navigation-drawer left elevation="0" app width="270" class="leftSidebar" permanent>
    <!-- Icon -->
    <div class="d-flex align-center px-6 py-4">
      <Icon width="40" />
      <h2 class="ml-2">Maurice</h2>
    </div>

    <!-- Navi List -->
    <PerfectScrollbar class="scrollnavbar">
      <v-list class="pa-6" density="compact">
        <!---Menu Loop -->
        <template v-for="(item, i) in sidebarItemRef">
          <!---Item Sub Header -->
          <LayoutSidebarNavGroup :header="item.header" v-if="item.header" :key="i" />

          <!---Single Item-->
          <LayoutSidebarNavItem :item="item" :level="0" v-else class="leftPadding" />
        </template>
      </v-list>
    </PerfectScrollbar>
  </v-navigation-drawer>
</template>
