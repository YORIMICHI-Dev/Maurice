<script setup lang="ts">
import type { NavItem } from '../sidebarItem';
type Props = {
  item: NavItem;
  level: number;
};
const props = defineProps<Props>();
</script>

<template>
  <!---Single Item-->
  <v-list-item
        :to="item.type === 'external' ? '' : item.to"
        :href="item.type === 'external' ? item.to : ''"
        rounded
        class="mb-1"
        :target="item.type === 'external' ? '_blank' : ''"
    >
    <!---If icon-->
    <template v-slot:prepend>
      <LayoutSidebarNavIcon :item="item.icon" :level="level" />
    </template>
    <v-list-item-title>{{ item.title }}</v-list-item-title>

    <!---If Caption-->
    <v-list-item-subtitle v-if="item.subCaption" class="text-caption mt-n1 hide-menu">
      {{ item.subCaption }}
    </v-list-item-subtitle>
  </v-list-item>
</template>
