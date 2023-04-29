<template>
  <footer>
    <button @click="tg.close()">Закрыть</button>
  </footer>
</template>

<script setup>
import {onMounted} from "vue";

const tg = window.Telegram.WebApp
onMounted(() => {
  tg.ready()
})
</script>

<style lang="scss">
footer {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  border-top: 1px solid red;
}
</style>