<template>
  <div class="about">
    <h1>This is an about page</h1>

    Logged in as {{ user }}

    <button @click="logout">Logout</button>


    <br>
    <br>
    <alert>
      <template>
        <h2>alert message</h2>
      </template>

      <template #header>
        Alert header
      </template>


      <template #footer>
        Alert footer
      </template>

    </alert>

  </div>


</template>

<script>
import Alert from "@/components/Alert";
export default  {
  components: {Alert},
  computed: {
    user() {
      return this.$store.getters['auth/user']
    },
  },
  methods: {
    logout() {
      this.$store.dispatch('auth/login', null)
    },
  }
}
</script>
