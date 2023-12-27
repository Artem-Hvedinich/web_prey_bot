import {ref, type Ref} from 'vue'
import {defineStore} from 'pinia'
import {userAPI} from "@/api/api";

export type UserType = {
    id?: string
    firstName: string,
    name: string,
    createdAt?: Date
}
export const useUsersStore = defineStore('user', () => {
    const users: Ref<Array<UserType>> = ref([])
    const meta: Ref<{}> = ref({})

    const getUsers = async (page = 1) => {
        const res: { data: { data: Array<UserType>, message: string, meta: Object } } = await userAPI.getUsers(page)
        if (res.data.data.length) users.value = res.data.data
        meta.value = res.data.meta
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
    return {users, getUsers, updateUserFromId, createNewUser, removeUser}
})
