<template>
  <div
      v-if="isShow"
      role="dialog"
      :class="[
      'v-modal',
      {
        'v-modal--transform': $isMobile && position !== 'top',
        'v-modal--right': position === 'right',
        'v-modal--top': position === 'top',
        'v-modal--full': position === 'full',
      },
    ]"
      @click="close"
  >
    <div :style="!$isMobile && style" :class="$isMobile ? 'v-modal__mobile' : 'v-modal__desktop'" @click.stop>
      <span v-if="$isMobile" class="v-modal__mobile--line"></span>
      <span class="v-modal__close" :class="$isMobile && 'v-modal__close--mobile'" @click="close"/>
      <slot></slot>
    </div>
  </div>
</template>
<script setup lang="ts">
import {useModalStore} from "@/stores/modal";

const {modal} = useModalStore();
const {close, isShow, style, position} = modal;
const $isMobile = false
</script>
