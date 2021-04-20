<template>
  <v-app id="app">
    <router-view/>
  </v-app>
</template>

<script>
export default {
  // created: function () {
  //   this.$http.interceptors.response.use(undefined, function (err) {
  //     return new Promise(function (resolve, reject) {
  //       if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
  //         this.$store.dispatch(logout)
  //       }
  //       throw err;
  //     });
  //   });
  // }
}
</script>

<style lang="stylus">
#app
  font-family "MontserratMedium", sans-serif
  height 100vh
  width 100%
</style>
