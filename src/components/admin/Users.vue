<template>
  <div class="admin__users">
    <div v-if="users.length" class="admin__users--wrapper">
      <ul class="admin__users--title">
        <li>№</li>
        <li>ФИО</li>
        <li>Дата создания</li>
        <li>Ред.</li>
        <li>Удалить</li>
      </ul>
      <ul v-for="item in users" :key="item.id">
        <li> {{ item.id }}</li>
        <li> {{ item.name }} {{ item.firstName }}</li>
        <li> {{ dataFormat(item.createdAt) }}</li>
        <li @click="updateUser(item.id,item.name,item.firstName)"><img width="20px" src="/image/edit.svg" alt=""></li>
        <li @click="removeUser(item.id)"><img width="20px" src="/image/delete.svg" alt=""></li>
      </ul>
    </div>
    <button class="button button--main" @click="createNewUser">Create new user</button>

  </div>
</template>
<script setup lang="ts">
import {computed, ComputedRef} from "vue";
import {UserType, useUsersStore} from "@/stores/users";
import CreateOrUpdateUserModal from "@/components/modal/CreateOrUpdateUserModal.vue";
import {useModalStore} from "@/stores/modal";
import {useRoute} from "vue-router";

const route = useRoute()
const usersStore = useUsersStore()
usersStore.getUsers(+route.query.page)
const {modal} = useModalStore()
const users: ComputedRef<Array<UserType>> = computed(() => usersStore.users)
const dataFormat = (date: Date) => new Date(date as string).toLocaleDateString("ru-RU", {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
})
const updateUser = (id: string | undefined, name: string, firstName: string) => id && modal.show(CreateOrUpdateUserModal, {
  id,
  name,
  firstName
})

const removeUser = (id: string | undefined) => id && usersStore.removeUser(id,)

const createNewUser = () => modal.show(CreateOrUpdateUserModal, null)
</script>
