<script setup lang="ts">
import {RouterLink, RouterView} from 'vue-router'
import {onMounted} from "vue";

onMounted(() => {
  tg.ready()
})
const tg = window.Telegram.WebApp
</script>

<template>
  <header>
    <nav>
      <router-link to="/need">Нужда</router-link>
      <router-link to="/thank">Благодарность</router-link>
    </nav>
  </header>
  <main>
    <RouterView/>
  </main>
  <footer>
    <button @click="tg.close()">Закрыть</button>
  </footer>
</template>

<style scoped>
header {
  width: 100vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid red;
}

header div {
  display: flex;
  gap: 20px;
}

footer {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: red;
}

nav {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 100%;
  gap: 30px;
  font-size: 12px;
}

nav a.router-link-active {
  color: orange;
  text-decoration: none;
  border-bottom: 1px solid orange;
  padding-bottom: 2px;
}

nav a:hover {
  color: blue;
  text-decoration: none;
}

nav a {
  color: red;
  text-decoration: none;
}
</style>
