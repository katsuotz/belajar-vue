<template>
  <form @submit.prevent="login">
    <h1>{{ title }}</h1>

    <input type="text" v-model="data.username" placeholder="Username">
    <input type="text" v-model="data.password" placeholder="Password">

    <button type="submit">Login</button>
  </form>
</template>

<script>
export default {
  name: "LoginForm",
  props: {
    title: String
  },
  data: () => {
    return {
      data: {
        username: '',
        password: '',
      }
    }
  },
  computed: {
    user() {
      return this.$store.getters['auth/user']
    }
  },
  mounted() {
    this.$emit('updateLoginTitleFromForm', 'tes')
  },
  methods: {
    async login() {
      let res = await this.$store.dispatch('auth/login', this.data)

      if (res) {
        this.$router.push('/about')
      }
    },
  }
}
</script>

<style scoped>

</style>