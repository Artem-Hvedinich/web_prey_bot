<template>
  <v-modal v-if="isShow">
    <component :is="component" :data="data" @accept="accept" @close="close"/>
  </v-modal>
  <RouterView/>
</template>
<script setup lang="ts">
import {RouterView} from 'vue-router'
import {useModalStore} from "@/stores/modal";
import VModal from "@/components/v-modal/v-modal.vue";
import {toRefs} from "vue";

const {modal} = useModalStore()

const {isShow, component, data, close, accept} = toRefs(modal);
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
