<script setup lang="ts">
const route = useRoute()
const active = ref(false)
</script>

<template>
  <div :class="{ active }" class="font-mono">
    <div
      class="w-10 h-10 lh-10 text-center centerd-x bottom--0.25 select-none cursor-pointer"
      border="~ op-20! black dark:white"
      bg="white dark:black"
      @click="active = true"
    >
      i
    </div>

    <div
      class="modal fixed-all op-0 pointer-events-none transition duration-200"
      bg="black dark:white"
      @click="active = false"
    />

    <div
      class="content centerd-x bottom-0 p-8 shadow w-125 max-w-100vw min-h-25 translate-y-110% pointer-events-none transition duration-300"
      bg="white dark:black"
    >
      <slot />

      <div class="mt-5">
        <a
          :href="`https://github.com/Lu-Jiejie/toys/blob/main/src/pages/${route.path.slice(1)}.vue`"
          target="_blank"
          class="link mr-3"
        >{{ route.meta.date }}
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.active .modal {
  --uno: 'op-20 pointer-events-auto';
}
.active .content {
  --uno: 'translate-y-0 pointer-events-auto'
}
</style>
