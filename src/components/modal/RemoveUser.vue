<template>
  <div class="v-modal__wrapper">
    <h2 class="v-modal__title">Удалить пользователя</h2>
    <p class="v-modal__text">Пользователь будет удален безвозвратно</p>
    <div class="v-modal__buttons">
      <button class="button button--main" @click="removeUser">Удалить</button>
      <button class="button button--cancel" @click="modal.close()">Отмена</button>
    </div>
  </div>
</template>
<script setup lang="ts">
import {useModalStore} from "../../stores/modal";
import {useUsersStore} from "../../stores/users/users";

const usersStore = useUsersStore()
const {modal} = useModalStore()
const {data} = modal
const removeUser = () => data.id && usersStore.removeUser(data.id)

</script>
