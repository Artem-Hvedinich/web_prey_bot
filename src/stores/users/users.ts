import {ref, type Ref} from 'vue'
import {defineStore} from 'pinia'
import {type MetaType, userAPI} from "../../api/api";
import type {UserType} from "./type";
import {da} from "vuetify/locale";
import {useRoute} from "vue-router";


export const useUsersStore = defineStore('user', () => {
    const users: Ref<Array<UserType>> = ref([])
    const meta: Ref<MetaType> = ref({} as MetaType)

    const getUsers = async (page = 1) => {
        const {data} = await userAPI.getUsers(page)
        if (data.data.length) users.value = data.data
        if (data.meta) meta.value = data.meta
    }

    const updateUserFromId = async (id: string, user: UserType) => {
        const {data} = await userAPI.updateUserFromId(id, user)
        if (data.message === "success") users.value = users.value.map((m) => m.id === id ? data.data : m)
    }
    const createNewUser = async (name: string, firstName: string) => {
        const {data} = await userAPI.createUser({name, firstName})
        if (data.message === "success") users.value = [...users.value, data.data]
    }

    const removeUser = async (id: string) => {
        const {data} = await userAPI.removeUser(id)
        if (data.message === "success") users.value = users.value.filter(f => f.id !== id)
    }
    return {users, meta, getUsers, updateUserFromId, createNewUser, removeUser}
})
