<template>
  <h3>보기 쉬운 링크</h3>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/mainview">MainView</router-link> |
    <router-link to="/registerview">RegisterView</router-link> |
    <router-link to="/loginview">LoginView</router-link> |
  </nav>

  <nav>
    <router-link to="/popularartworks">PopularArtworks</router-link> |
    <router-link to="/freeartworks">FreeArtworks</router-link> |
    <router-link to="/popularartists">PopularArtists</router-link> |
    <router-link to="/creator_register">CreatorRegister</router-link>
  </nav>

  <nav>
    <router-link to="/creator_view">CreatorView</router-link> |
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
