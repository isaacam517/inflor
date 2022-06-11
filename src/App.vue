<template>
  <nav>
    <span>
      <h1>Desafio INFLOR</h1>
    </span>
    <span>
      <router-link to="/">Início</router-link>
    </span>
  </nav>
  <router-view/>
</template>

<script>
  export default {
    name: 'App',
  }
</script>

<style lang="scss">
#app {
  padding: 0;
  overflow-x: hidden;
  margin: 0;
  height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-image: url("https://cdn.wallpapersafari.com/41/16/IOmeDP.jpg");

}
nav {
  padding: 30px;
  display: flex;
  justify-content: space-between;
  color: #fff;
  a {
    font-weight: bold;
    color: #fff;
    text-decoration: none;

    &.router-link-exact-active {
      color: #fff;
    }
  }
}
</style>
