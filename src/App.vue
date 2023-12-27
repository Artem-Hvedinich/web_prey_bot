<template>
  <loader v-if="loaderStore.isShowLoader"/>
  <v-modal v-if="isShow">
    <component :is="component" :data="data" @accept="accept" @close="close"/>
  </v-modal>
  <RouterView/>
</template>
<script setup lang="ts">
import {RouterView} from 'vue-router'
import VModal from "@/components/v-modal/v-modal.vue";
import {toRefs} from "vue";
import {useModalStore} from "./stores/modal";
import Loader from "./components/Loader.vue";
import {useLoaderStore} from "./stores/loader";
import {instance} from "./api/api";

const {modal} = useModalStore()
const loaderStore = useLoaderStore()
const {isShow, component, data, close, accept} = toRefs(modal);

instance.interceptors.response.use(response => {
  loaderStore.hideLoader()
  return response
})
instance.interceptors.request.use(conf => {
  loaderStore.showLoader()
  return conf
})

</script>
<style>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid grey;
}
</style>
