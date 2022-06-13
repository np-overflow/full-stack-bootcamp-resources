<script setup lang="ts">
import { ref, reactive, computed, onMounted, onBeforeUnmount } from 'vue';
import { createSrcDoc } from './runner-srcdoc';

const props = defineProps({
  code: {
    default: '',
  },
});

const ifr = ref();
const state = reactive<{
  code: string,
}>({
  code: props.code,
});

const srcdoc = computed(() => {
  return createSrcDoc("", state.code);
});
</script>

<template>
  <div grid="~ cols-1 md:cols-2" class="gap-2">
    <slot />
    <iframe class="rounded-md border-1 border-slate-200 w-full" ref="ifr" :srcdoc="srcdoc" />
  </div>
</template>
