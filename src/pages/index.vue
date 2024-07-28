<script setup lang="ts">
import { isDark, toggleDark } from '../utils/dark'

const router = useRouter()

const pages = router
  .getRoutes().filter(r => r.path !== '/')
  .sort((a, b) => Number(a.path.slice(1)) - Number(b.path.slice(1)))
  .map(route => ({ name: route.name, no: route.path.slice(1) }))

useTitle('Toys')
</script>

<template>
  <div class="centered font-mono select-none">
    <h1 class="text-lg font-bold mb-4">
      Toys
    </h1>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-15 gap-y-2">
      <RouterLink v-for="page in pages" :key="page.no" :to="`/${page.no}`" class="link block">
        <span class="mr-2 op-70">
          {{ page.no }}
        </span>
        <span>
          {{ page.name }}
        </span>
      </RouterLink>
    </div>

    <h1 class="mt-9">
      <a class="link" href="https://github.com/Lu-Jiejie" target="_blank">@Lu-Jiejie</a>
      <span class="mx-2">·</span>
      <a class="link" href="https://github.com/Lu-Jiejie/toys" target="_blank">GitHub</a>
      <span class="mx-2">·</span>
      <a class="link" href="#" @click="toggleDark()">
        {{ isDark ? 'dark' : 'light' }}
      </a>
    </h1>
  </div>
</template>

<style scoped></style>
