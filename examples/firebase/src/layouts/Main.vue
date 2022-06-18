<script setup>
import { Link } from '../components';
</script>

<template>
  <div class="flex border-b-1 border-slate-300 py-2 px-4 justify-between items-center">
    <div class="flex gap-3 items-center">
      <img class="h-8 w-8 " src="https://api.iconify.design/logos:firebase.svg" />
      <span class="font-semibold text-slate-800 text-2xl">Firebase</span>
    </div>

    <div class="flex">
      <Link href="#/">Home</Link>
      <Link href="#/auth">Authentication</Link>
      <Link href="#/rtdb">Database</Link>
    </div>
  </div>

  <main class="container mx-auto p-5 md:p-10 lg:p-20">
    <slot />
  </main>
</template>
