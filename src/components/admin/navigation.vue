<template>
  <nav class="navigator">
    <ul class="navigator__list">
      <li class="navigator__item">
        <router-link active-class="navigator__link--active" class="navigator__link"
                     to="/admin/users">
          Пользователи
        </router-link>
      </li>
      <li class="navigator__item">
        <router-link active-class="navigator__link--active" class="navigator__link"
                     to="/admin/time">
          Время на неделю
        </router-link>
      </li>
    </ul>
  </nav>
</template>
<script setup lang="ts">

</script>
