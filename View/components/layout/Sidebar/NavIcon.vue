<script setup lang="ts">
import type { NavItem } from './sidebarItem';
type Props = {
  item: NavItem;
  level: number;
};
const props = defineProps<Props>();
</script>

<template>
  <template v-if="props.level > 0">
    <component :is="item" size="14" stroke-width="1.5" class="iconClass"></component>
  </template>
  <template v-else>
    <component :is="item" size="20" stroke-width="1.5" class="iconClass"></component>
  </template>
</template>
