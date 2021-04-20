<template>
  <div>
    <v-btn
      class="secondary-button text-center"
      color="secondary"
      elevation="3"
    >{{ text }}</v-btn>
  </div>
</template>

<script>
export default {
  name: 'SecondaryButton',
  props: {
    text: {
      required: true,
      type: String
    }
  }
}
</script>

<style lang="stylus" scoped>
  .secondary-button
    padding 0px 25px
    max-height 28px
    text-transform none !important
    letter-spacing normal
</style>
