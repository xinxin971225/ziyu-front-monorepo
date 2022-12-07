<template>
  <JSXButton color="blue">JSXButton</JSXButton>
  <JSXButton color="green">JSXButton</JSXButton>
  <JSXButton color="red" plain>JSXButton</JSXButton>
  <JSXButton color="gray" plain>JSXButton</JSXButton>
  <JSXButton color="yellow" icon="search"></JSXButton>
  <div>
    <SFCButton>SFCButton</SFCButton>
    <SFCButton color="green">SFCButton</SFCButton>
    <SFCButton color="gray" rounded size="small" plain>SFCButton</SFCButton>
    <SFCButton color="red" plain size="mini">SFCButton</SFCButton>
    <SFCButton color="yellow" size="small" icon="search"></SFCButton>
  </div>

  <ziYuButton>ziYuButton</ziYuButton>
</template>

<script setup lang="ts">
import JSXButton from './button/JSXButton'
import SFCButton from './button/SFCButton.vue'
import ziYuButton from './button/Button'
</script>
