<template>
  <div class="admin">
    <h1 class="admin__title">Страница Админа</h1>
    <div class="admin__wrapper">
      <navigation></navigation>
      <router-view></router-view>
    </div>
  </div>
</template>
<script setup async lang="ts">
import Navigation from "@/components/admin/navigation.vue";
</script>
