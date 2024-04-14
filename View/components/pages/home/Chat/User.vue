<script setup lang="ts">
import icon from '/public/user-1.jpg';

type Props = {
  message: string;
};
const props = defineProps<Props>();
</script>

<template>
  <div class="d-flex align-items-start ga-3 mb-8">
    <v-avatar>
      <img :src="icon" alt="pro" width="40" />
    </v-avatar>
    <div>
      <small class="text-medium-emphasis text-subtitle-2"> User </small>
      <v-sheet class="bg-grey100 rounded-md px-3 py-2 mb-1">
        {{ props.message }}
      </v-sheet>
    </div>
  </div>
</template>
