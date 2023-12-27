<template>
  <nav>
    <ul class="pagination__list">
      <li v-if="meta.current_page !== 1">
        <router-link class="pagination__link" :to="{ query: { page: meta.current_page - 1 } }">
          Назад
        </router-link>
      </li>
      <li v-for="page in pages">
        <router-link :class="['pagination__link', {pagination__link_active: page === meta.current_page}]"
                     :to="page === '...' ? '' : { query: { page } }">
          {{ page }}
        </router-link>
      </li>
      <li class="pagination__link" v-if="meta.current_page  !== meta.last_page">
        <router-link class="pagination__link" :to="{ query: { page: meta.current_page + 1} }">
          Далее
        </router-link>
      </li>
    </ul>
  </nav>
</template>
<script setup lang="ts">
import type {MetaType} from "../api/api";
import {computed, type Ref, toRef} from "vue";

const props = defineProps<{ meta: MetaType }>();
const meta: Ref<MetaType> = toRef(props, "meta");
const pages = computed(() => {
  const start = meta.value.current_page - 2 >= 1 ? meta.value.current_page - 2 : 1;
  const end = meta.value.current_page + 3 < meta.value.last_page ? meta.value.current_page + 3 : meta.value.last_page;
  const p: Array<number | string> = Array.from({length: end - start + 1}, (_, i) => start + i);
  if (start > 3) {
    p.unshift(1, "...");
  } else if (start === 2) {
    p.unshift(1);
  } else if (start === 3) {
    p.unshift(1, 2);
  }
  return p;
});
</script>
