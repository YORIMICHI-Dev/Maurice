<script setup lang="ts">
type Props = {
  header: string;
};
const props = defineProps<Props>();
</script>

<template>
  <v-list-subheader color="darkText" class="smallCap text-subtitle-2 mt-5 font-weight-bold">
    <span class="mini-text">{{ props.header }}</span>
  </v-list-subheader>
</template>
