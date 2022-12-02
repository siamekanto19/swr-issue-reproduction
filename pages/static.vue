<script setup lang="ts">
const { data } = await useFetch("/api/hello");
</script>

<template>
  <h1>Static Page- {{ data?.hello }}</h1>
</template>

<style lang="postcss" scoped></style>
