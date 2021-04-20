<template>
  <div>
    <h5 class="my-4 mx-5 text-center">{{ $t('welcome') }}</h5>
    <v-form
      @submit="onSubmit"
      ref="form"
      lazy-validation
      class="w-100 text-center align-items-center justify-content-center">

      <TextField
        v-model="form.email"
        type="email"
        :label="$t('form.email')"
        :rules="form.rules.email" />

      <PrimaryButton
        :text="$t('form.login')"
        :clicked="onSubmit" />

      <small
        v-if="error"
        class="text-danger"
      >{{ $t('errors.tryLater') }}</small>
    </v-form>
  </div>
</template>
<script>
import PrimaryButton from '@/components/form/PrimaryButton'
import TextField from '@/components/form/TextField'
import { createUser } from '@/api/user'
import httpStatus from '@/utils/httpStatus'

export default {
  name: 'AuthLogin',
  components: {
    PrimaryButton,
    TextField
  },
  data () {
    return {
      form: {
        email: '',
        rules: {
          email: [
            v => !!v || this.$t('validations.email.required'),
            v => /.+@.+\..+/.test(v) || this.$t('validations.email.invalid')
          ]
        }
      },
      error: false
    }
  },
  methods: {
    async onSubmit (e) {
      e.preventDefault()
      const formValid = this.$refs.form.validate()
      if (formValid === true) {
        const data = { email: this.form.email }
        const resp = await createUser(data)
        if (resp.status === httpStatus.OK || resp.status === httpStatus.CREATED) {
          this.$store.dispatch('oauth/login', this.form.email)
          this.$router.replace({ name: 'home' })
        } else {
          this.error = true
        }
      }
    }
  }
}
</script>
