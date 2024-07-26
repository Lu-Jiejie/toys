<script setup lang="ts">
import { isDark, toggleDark } from '../utils/dark'
</script>

<template>
  <div class="fixed-all  grid place-items-center  select-none  justify-center">
    <div class="fixed-top flex p-3 font-mono">
      <RouterLink class="block op-50 hover:op-100 text-2xl" to="/">
        <div class="i-carbon-chevron-left" />
      </RouterLink>
      <div class="flex-auto" />

      <button class="op-50 hover:op-100 text-2xl" @click="toggleDark()">
        <div :class="isDark ? 'i-ri-moon-line' : 'i-ri-sun-line'" />
      </button>
    </div>

    <div class="fixed-bottom" />

    <slot />
  </div>
</template>

<style lang="less" scoped>
</style>
