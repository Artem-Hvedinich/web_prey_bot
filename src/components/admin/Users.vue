<template>
  <div class="admin__users">
    <button class="button button--main" @click="createNewUser">Create new user</button>
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
    <pagination :meta="meta"></pagination>
  </div>
</template>
<script setup lang="ts">
import {computed, ComputedRef, watch} from "vue";
import CreateOrUpdateUserModal from "@/components/modal/CreateOrUpdateUserModal.vue";
import {useModalStore} from "../../stores/modal";
import pagination from "@/components/Pagination.vue";
import type {MetaType} from "../../api/api";
import type {UserType} from "../../stores/users/type";
import {useUsersStore} from "../../stores/users/users";
import {useRoute} from "vue-router";
import RemoveUser from "../modal/RemoveUser.vue";

const route = useRoute()
const usersStore = useUsersStore()
usersStore.getUsers(route.query.page ? +route.query.page : 1)
const {modal} = useModalStore()
const users: ComputedRef<Array<UserType>> = computed(() => usersStore.users)
const meta: ComputedRef<MetaType> = computed(() => usersStore.meta)
const refQuery = computed(() => route.query.page);

watch(refQuery, () => {
  usersStore.getUsers(route.query.page ? +route.query.page : 1)
})
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

const removeUser = (id: string | undefined) => id && id && modal.show(RemoveUser, {
  id,
})
const createNewUser = () => modal.show(CreateOrUpdateUserModal, null)
</script>
