<template>
  <JSXButton color="blue">JSXButton</JSXButton>
  <JSXButton color="green">JSXButton</JSXButton>
  <JSXButton color="red" plain>JSXButton</JSXButton>
  <JSXButton color="gray" plain>JSXButton</JSXButton>
  <JSXButton color="yellow" icon="search"></JSXButton>
  <SFCButton>SFCButton</SFCButton>
  <ziYuButton>ziYuButton</ziYuButton>
</template>

<script setup lang="ts">
import JSXButton from './button/JSXButton'
import SFCButton from './button/SFCButton.vue'
import ziYuButton from './button'
</script>
