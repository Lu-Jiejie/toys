<script setup lang="ts">
// import { VueTypedJs as Typer } from '../../../../forks/vue3-typed-ts'
import type { TypedOptions } from 'vue3-typed-ts'
import { VueTypedJs as Typer } from 'vue3-typed-ts'

definePage({
  name: 'Hello World',
  meta: {
    date: '2024-07-28',
  },
})

const hellos = reactive([
  ['你好', 'Mandarin', '普通话'],
  ['嗨', 'Cantonese', '粤语'],
  ['Hello', 'English', '英语'],
  ['こんにちは', 'Japanese', '日语'],
  ['Hallo', 'German', '德语'],
  ['Hola', 'Spanish', '西班牙语'],
  ['Hoi', 'Dutch', '荷兰语'],
  ['Bonjour', 'French', '法语'],
  ['안녕하세요', 'Korean', '韩语'],
  ['Ciao', 'Italian', '意大利语'],
  ['Olá', 'Portuguese', '葡萄牙语'],
  ['Привет', 'Russian', '俄语'],
  ['Γειά σου', 'Greek', '希腊语'],
  ['שלום', 'Hebrew', '希伯来语'],
  ['مرحبا', 'Arabic', '阿拉伯语'],
  ['नमस्ते', 'Hindi', '印地语'],
  ['Merhaba', 'Turkish', '土耳其语'],
  ['Hej', 'Swedish', '瑞典语'],
  ['Hallo', 'Norwegian', '挪威语'],
  ['Hej', 'Danish', '丹麦语'],
  ['สวัสดี', 'Thai', '泰语'],
  ['Xin chào', 'Vietnamese', '越南语'],
  ['ཁྱོད་བདེ་མོ།', 'Tibetan', '藏语'],
])

const currentLang = ref(['', ''])

onMounted(() => {
  hellos.sort(() => Math.random() - 0.5)
})

const preStringTyped: TypedOptions['preStringTyped'] = (index: number) => {
  currentLang.value = hellos[index].slice(1)
}
</script>

<template>
  <Paper>
    <div class="flex flex-col justify-center items-center font-mono">
      <!-- <div class="text-7xl">
        {{ hello[0] }}
      </div> -->
      <Typer
        :strings="hellos.map(hello => hello[0])"
        :type-speed="100"
        :back-speed="100"
        :auto-insert-css="true"
        :smart-backspace="false"
        :back-delay="2000"
        :cursor-animation-duration="2"
        :loop="true"
        content-type="html"
        class="text-6xl sm:text-7xl"
        @pre-string-typed="preStringTyped"
      >
        <span class="typing" />
      </Typer>

      <div class="mt-5 text-lg op-70">
        {{ currentLang[0] }} · {{ currentLang[1] }}
      </div>
    </div>
  </Paper>

  <Tips>
    <p>
      Say hello in different languages.
    </p>
  </Tips>
</template>

<style scoped>
</style>
