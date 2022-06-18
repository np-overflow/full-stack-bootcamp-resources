<script setup>
import { defineAsyncComponent, computed, ref } from 'vue';

import MainLayout from './layouts/Main.vue'
import NotFound from './pages/NotFound.vue'

const routes = {
  '/': defineAsyncComponent(() => import("./pages/About.vue")),
  '/auth': defineAsyncComponent(() => import('./pages/Auth.vue')),
  '/rtdb': defineAsyncComponent(() => import('./pages/RTDB.vue'))
}

const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'] ?? NotFound
})
</script>

<template>
  <MainLayout>
    <component :is="currentView" />
  </MainLayout>
</template>
