<script setup lang="ts">
const { data } = await useFetch("/api/hello");
</script>

<template>
  <h1>SWR - {{ data?.hello }}</h1>
</template>

<style lang="postcss" scoped></style>
