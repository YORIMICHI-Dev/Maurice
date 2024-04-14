<script setup lang="ts">
import { IconChevronDown } from '@tabler/icons-vue';
const modelNames = ["TripoSR"]
const { changeModel} = useSearchStore()
const { getModelName } = storeToRefs(useSearchStore())
</script>


<template>
    <v-app-bar height="60" elevation="0">
        <v-menu open-on-hover :close-on-content-click="false">
        <template v-slot:activator="{ props }">
            <v-btn class="custom-hover-primary" rounded="sm" variant="text" color="primary" v-bind="props">
                <h2>{{ getModelName }}</h2>
                <IconChevronDown stroke="2" size="20" class="mt-1 ml-1" />
            </v-btn>
        </template>
        <v-sheet width="200" height="120" elevation="10" rounded="md" class="pa-4 pb-0">
            <v-list>
                <v-list-subheader>
                    Model
                </v-list-subheader>

                <v-list-item
                    v-for="(item, i) in modelNames"
                    :key="i"
                    :value="item"
                    color="primary"
                    class="rounded-lg"
                    @click="changeModel(item)"
                >
                    <v-list-item-title v-text="item"></v-list-item-title>
                </v-list-item>
            </v-list>
        </v-sheet>
    </v-menu>
    </v-app-bar>
</template>