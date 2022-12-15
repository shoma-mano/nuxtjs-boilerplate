<script setup lang="ts">
const { data } = useFetch('/api/hello')
</script>
<template>
  <NuxtWelcome />
  <p>{{data.api}}</p>
</template>
