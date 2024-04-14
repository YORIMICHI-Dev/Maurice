<script setup lang="ts">
import { IconSend, IconPaperclip } from '@tabler/icons-vue';

type Emits = {
  (event: 'notShowView'): void;
};
const emits = defineEmits<Emits>();

const { fetchGenerate } = useSearchStore();
const { searchInput } = storeToRefs(useSearchStore());

// Event
function selectImage() {}

function generateModel() {
  emits('notShowView');
  fetchGenerate();
}
</script>

<template>
  <v-sheet id="searchBox" elevation="3" class="rounded-lg">
    <div class="d-flex flex-col justify-center align-center">
      <v-btn icon variant="text" class="text-medium-emphasis rounded-xl" @click="selectImage">
        <IconPaperclip size="20" stroke="2" />
      </v-btn>
      <v-text-field
        variant="solo"
        hide-details
        class="shadow-none"
        density="compact"
        elevation="0"
        flat
        v-model="searchInput"
        placeholder="Generate 3D model with your own ideas"
      />
      <v-btn
        icon
        :disabled="!searchInput"
        variant="flat"
        color="primary"
        class="text-medium-emphasis"
        @click="generateModel"
      >
        <IconSend size="20" stroke="2" />
        <v-tooltip activator="parent" location="top">Generate Model</v-tooltip>
      </v-btn>
    </div>
  </v-sheet>
</template>

<style>
#searchBox {
  position: fixed;
  bottom: 5%;
  left: calc(50% + 135px);
  width: 50%;
  transform: translateX(-50%);
}
</style>
