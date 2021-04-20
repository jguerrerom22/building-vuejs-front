<template>
  <v-text-field
    :type="type"
    :label="label"
    :rules="rules"
    @input="$emit('input', $event)">
  </v-text-field>
</template>

<script>
export default {
  name: 'TextField',
  props: {
    type: {
      required: false,
      type: String,
      default: 'text'
    },
    label: {
      required: true,
      type: String
    },
    rules: {
      type: Array,
      required: false
    }
  }
}
</script>
