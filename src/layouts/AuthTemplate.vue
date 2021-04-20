<template>
  <div :style="cssProps">
    <AuthCard>
      <router-view />
    </AuthCard>
    <AuthFooter />
  </div>
</template>
<script>

import AuthFooter from '@/components/footer/AuthFooter'
import AuthCard from '@/components/containers/AuthCard'

export default {
  name: 'AuthTemplate',
  components: {
    AuthFooter,
    AuthCard
  },
  data () {
    return {
      cssProps: {
        backgroundImage: `url(${require('@/assets/img/bg.jpg')})`,
        height: '100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }
    }
  }
}
</script>

<style scoped lang="stylus">
  body, html {
    height: 100%
  }
</style>
