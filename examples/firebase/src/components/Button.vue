<script setup>
import { computed } from 'vue';

const props = defineProps({
  href: String,
  variant: {
    type: String,
    validator: (value) => ['alternative'].includes(value),
  }
})

const variantClass = computed(() => {
  return props.variant === 'alternative' ?
    'text-orange-400 hover:(bg-orange-100)' :  // If variant is 'alternative', then make text orange
    'bg-orange-400 text-white hover:(bg-orange-500)' // Else, make background orange and text white
})
</script>

<template>
  <button type="button" :href="props.href" :class="[
    'rounded-md flex font-medium font-sans font-bold py-2 px-3 duration-100 items-center justify-center',
    variantClass
  ]">
    <slot />
  </button>
</template>
