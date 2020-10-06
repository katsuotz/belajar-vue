<template>
  <div class="home">
    <div v-if="user">
      Logged in as {{ user }}

      <button @click="logout">Logout</button>
    </div>
    <login-form :title="loginTitle" @updateLoginTitleFromForm="updateLoginTitle" v-else>
      <div>

      </div>
    </login-form>

  </div>
</template>

<script>
// @ is an alias to /src
import LoginForm from "@/components/LoginForm";

export default {
  name: 'Home',
  components: {
    LoginForm,
  },
  data: () => {
    return {
      loginTitle: 'Form Login'
    }
  },
  computed: {
    user() {
      return this.$store.getters['auth/user']
    },
  },
  methods: {
    logout() {
      this.$store.dispatch('auth/login', null)
      this.$router.push('/')
    },
    updateLoginTitle(value) {
      this.loginTitle = value
    }
  }
}
</script>
