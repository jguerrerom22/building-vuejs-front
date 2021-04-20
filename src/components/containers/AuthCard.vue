<template>
  <div>
    <div class="card-container">
      <div class="card align-items-center justify-content-center">
        <img class="logo" src="@/assets/img/logo_zet.png" />
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AuthCard'
}
</script>

<style lang="stylus" scoped>
  .card-container
    position fixed
    top 50%
    left 50%
    -webkit-transform translate(-50%, -50%)
    transform translate(-50%, -50%)
    .card
      box-shadow 0 1px 4px rgb(24 28 33 / 1%)
      position relative
      display -ms-flexbox
      display flex
      background-color #fff
      border-radius 0.75rem
      padding 3rem !important
      width 342px

  .logo
    max-height 150px
    max-width 150px
</style>
