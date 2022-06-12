<script setup lang="ts">
import { onClickOutside } from '@vueuse/core'
import { ref } from 'vue'

const emit = defineEmits(['close'])
const props = defineProps<{
  visible?: boolean
}>()

const target = ref()

onClickOutside(target, () => {
  emit('close')
})
</script>

<template>
  <Teleport to="body">
    <Transition>
      <div
        v-if="props.visible"
        class="flex h-screen bg-slate-500 bg-opacity-75 w-screen top-0 right-0 left-0 z-100 justify-center items-center absolute dark:(bg-slate-900 bg-opacity-75) "
      >
        <div ref="target" class="container rounded-lg bg-slate-200 m-4 p-4 dark:bg-slate-700">
          <slot />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.v-leave-active,
.v-enter-active {
  transition: all 0.05s ease-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
