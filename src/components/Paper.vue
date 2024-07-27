<script setup lang="ts">
import { isDark, toggleDark } from '../utils/dark'

const router = useRouter()
const route = useRoute()

const pages = router
  .getRoutes().filter(r => r.path !== '/')
  .sort((a, b) => Number(a.path.slice(1)) - Number(b.path.slice(1)))

const curIndex = Number(route.path.slice(1)) - 1
const prev = pages[curIndex - 1]
const next = pages[curIndex + 1]

useTitle(`${route.path.slice(1)}. ${route.name}`)
</script>

<template>
  <div class="fixed-all  grid place-items-center  select-none  justify-center ">
    <div class="fixed-top flex p-3 font-mono">
      <RouterLink class="block op-50 hover:op-80 text-2xl transition-ease-300" to="/">
        <div class="i-carbon-chevron-left" />
      </RouterLink>
      <div class="flex-auto" />

      <button class="op-50 hover:op-80 text-2xl transition-ease-300" @click="toggleDark()">
        <div :class="isDark ? 'i-ri-moon-line' : 'i-ri-sun-line'" />
      </button>
    </div>

    <div class="fixed-bottom flex px-3 pb-2 font-mono items-end">
      <div class="">
        <RouterLink v-if="prev" :to="prev.path" class="op-50 hover:op-100 transition-ease-300">
          <span class="op-80">{{ prev.name }}</span>
          <span class="ml-1 op-40">{{ prev.path.slice(1) }}</span>
        </RouterLink>
        <div>
          <span class="font-bold">{{ route.name }}</span>
          <span class="ml-1 op-50">{{ route.path.slice(1) }}</span>
        </div>
        <RouterLink v-if="next" :to="next.path" class="op-50 hover:op-100 transition-ease-300">
          <span class="op-80">{{ next.name }}</span>
          <span class="ml-1 op-40">{{ next.path.slice(1) }}</span>
        </RouterLink>
      </div>
      <div class="flex-auto" />
      <div class="op-30">
        {{ route.meta.date }}
      </div>
    </div>

    <slot />
  </div>
</template>

<style lang="less" scoped>
</style>
