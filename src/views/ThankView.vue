<template>
  <h1>Напишите вашу благодарность</h1>
  <div style="display: flex; flex-direction:column;
    align-items: center; gap: 20px">
    <textarea v-model="value"></textarea>
    <button @click="emit('addValue', {value:value, type:'thank'})">Отправить</button>
  </div>
</template>

<script setup>
import {ref} from "vue";

const emit = defineEmits(['addValue'])
const value = ref('')
</script>