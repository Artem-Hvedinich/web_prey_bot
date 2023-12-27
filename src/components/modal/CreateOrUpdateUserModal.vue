<template>
  <div class="v-modal__wrapper">
    <h2 class="v-modal__title">Создать нового пользователя</h2>
    <div>
      <v-input :value="name" label="Имя" name="name" @update-value="({value})=> name=value"></v-input>
      <v-input :value="firstName" label="Фамилия" name="firstName"
               @update-value="({value})=> firstName=value"></v-input>
    </div>
    <div style="display: flex; gap: 8px;">
      <button class="button button--main" @click="CreateOrUpdateUser">Создать пользователя</button>
      <button class="button button--cancel" @click="modal.close()">Отмена</button>
    </div>
  </div>
</template>
<script setup lang="ts">
import {ref} from "vue";
import VInput from "@/forms/v-input.vue";
import {useModalStore} from "@/stores/modal";
import {useUsersStore} from "@/stores/users";

const usersStore = useUsersStore()
const {modal} = useModalStore()
const {data} = modal
const name = ref(data?.name || "")
const firstName = ref(data?.firstName || "")
const CreateOrUpdateUser = async () => {
  let res
  if (data?.id) res = await usersStore.updateUserFromId(data.id, {name: name.value, firstName: firstName.value})
  else res = await usersStore.createNewUser(name.value, firstName.value)
}
</script>
