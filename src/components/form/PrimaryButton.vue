<template>
  <div>
    <v-btn
      class="primary-button text-center mb-2"
      color="primary"
      elevation="3"
      @click="clicked"
    >{{ text }}</v-btn>
  </div>
</template>

<script>
export default {
  name: 'PrimaryButton',
  props: {
    text: {
      required: true,
      type: String
    },
    clicked: { type: Function }
  }
}
</script>

<style lang="stylus" scoped>
  .primary-button
    padding 0px 25px
    max-height 28px
    text-transform none !important
    letter-spacing normal
</style>
