<script setup>
const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <label class="font-medium text-sm mb-2">
    <slot />
    <input @change="emit('update:modelValue', $event.target.value)" :value="props.modelValue" v-bind="$attrs" class="border rounded-lg bg-gray-50 border-gray-300 text-sm w-full outline-orange-300 p-2.5 text-gray-900 block">
  </label>
</template>
