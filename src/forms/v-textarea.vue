<template>
  <div :class="error && 'input-block__error'" class="input-block">
    <div class="input-block__head">
      <p v-if="label" class="input-block__label">{{ label }}</p>
      <p v-if="error" class="input-block__error--text">{{ error }}</p>
    </div>

    <textarea
      :value="modelValue"
      rows="5"
      v-bind="$attrs"
      @blur="emit('blur')"
      @focus="emit('focus')"
      @input="(e) => updateValue(e.target.value)"
    />

    <p v-if="note" class="input-block__note">{{ note }}</p>
  </div>
</template>

<script setup>
defineProps({
  error: { type: String, default: "" },
  label: { type: String, default: "" },
  note: { type: String, default: "" },
  modelValue: { type: String, default: "" },
});

const emit = defineEmits(["update:modelValue", "blur", "focus"]);
const updateValue = (value) => emit("update:modelValue", value);
</script>
