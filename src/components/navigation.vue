<template>
<nav class="navbar navbar-default">
  <div class="container">
    <ul class="nav navbar-nav">
      <li v-bind:class="active === '/' ? 'active' : ''"><router-link class="navbar-brand" to="/">Vue Starter App</router-link></li>
      <li v-bind:class="active === '/about' ? 'active' : ''"><router-link to="/about">About</router-link></li>
    </ul>
  </div>
</nav>
</template>

<script>
export default {
  data() {
    return {
      active: this.$route.path
    }  
  },
  
  watch: {
    '$route': function(to, from) {
      this.active = to.path
    }
  }
}
</script>
