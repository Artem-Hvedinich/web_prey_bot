<template>
  <Header/>
  <main>
    <RouterView @addValue="addNewData"/>
  </main>
  <Footer/>
</template>
<script setup>
import {RouterView} from 'vue-router'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import axios from "axios";
import {onMounted, ref} from "vue";

const asd = ref('')

async function start() {
  // const res = await fetch('/getmenu')
  // asd.value = await res.json()
  // console.log(res)
  // return await res.json()
}

// start()

async function addNewData({value, type}) {
  const dbId = '9cd332aa307247b68b207e466082d982';
  try {
    const res = await axios({
      methods: 'post',
      url: `https://api.notion.com/v1/databases/${dbId}/query`,
      headers: {
        Authorization: 'Bearer secret_DCi48pAprHCSoLz2H3ylgYFvrZtECDsRXorXqjec1DO',
        "Content-Type": 'application/json',
        "Notion-Version": '2022-06-28'
      },
      data: {
        // parent: {database_id: dbId},
        filter: {
          property: 'Name',
          text: {
            is_note_empty: true,
            // "content": value
          }
        }
      },
    });
    console.log(res)
  } catch
      (e) {
    console.error(e)
  }
}

</script>
<style lang="scss">
main {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 30px;
}

textarea {
  width: 300px;
  height: 100px;
  border-radius: 3px;
  padding: 10px 15px;
  resize: none;
}
</style>