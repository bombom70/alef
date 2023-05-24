<template>
  <header class="header">
    <a href="/">
      <img src="@/assets/logo.svg"/>
    </a>
    <nav class="nav">
      <router-link class="nav__item" to="/">Форма</router-link>
      <router-link class="nav__item" to="/preview">Превью</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style>
.header {
  height: 76px;
  border-bottom: 1px solid gray;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav__item {
  color: gray;
}
</style>