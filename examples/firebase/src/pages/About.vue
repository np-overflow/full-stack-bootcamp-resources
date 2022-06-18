<script setup>
import { Button } from '../components';

function open() {
  window.open('https://github.com/np-overflow/full-stack-bootcamp-resources/tree/main/examples/firebase', '_blank')
}
</script>

<template>
  <h1 class="font-semibold text-3xl">
    Firebase demo
  </h1>

  <br />

  <p>
    This web app demonstrates two services provided by Firebase:
  </p>

  <ul class="list-disc list-inside">
    <li>Authentication</li>
    <li>Realtime Database</li>
  </ul>

  <br />

  <Button variant="alternative" @click="open">View
    source code</Button>
</template>
