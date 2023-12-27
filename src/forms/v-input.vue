<template>
  <div class="input-block" :class="error && 'input-block__error'">
    <div class="input-block__head">
      <p v-if="label" class="input-block__label">{{ label }}</p>
      <p v-if="error" class="input-block__error--text">{{ error }}</p>
    </div>
    <input
        :value="value"
        :type="type"
        @blur="emit('blur')"
        @keyup.enter="emit('enter')"
        @focus="emit('focus')"
        @input="(e) => updateValue(e.target.value)"
    />

    <p v-if="note" class="input-block__note">{{ note }}</p>
  </div>
</template>

<script lang="ts" setup>
import {toRefs} from "vue";

interface IProps {
  error?: string;
  label?: string;
  note?: string;
  value: string | number | null;
  name?: string;
  type?: string;
};

const props = withDefaults(defineProps<IProps>(), {
  error: "",
  label: "",
  note: "",
  value: "",
  name: "",
  type: "",
});

const emit = defineEmits(["update-value", "blur", "focus", "enter"]);
const {value, error, label, note, name} = toRefs(props);
const updateValue = (value: any) => emit("update-value", {value, name: name.value});
</script>
