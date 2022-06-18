<script setup>
const props = defineProps({
  href: String
})
</script>

<template>
  <a :href="props.href"
    class="rounded-md flex font-medium font-sans py-1 px-2 duration-100 items-center justify-center hover:(bg-slate-200)">
    <slot />
  </a>
</template>
