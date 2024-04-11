<script setup lang="ts"></script>

<template>
  <div id="initialView">
    <div class="d-flex justify-center align-center flex-column">
      <v-avatar variant="elevated" size="80">
        <Icon width="60" />
      </v-avatar>

      <div class="mt-4">
        <h2>What kind of 3D model would you generate?</h2>
      </div>
    </div>
  </div>
</template>

<style>
#initialView {
  position: fixed;
  bottom: 50%;
  left: 50%;
  transform: translateX(-50%);
}
</style>
