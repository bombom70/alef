<template>
  <Header/>
  <router-view></router-view>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Header,
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: black;
}

.container {
  width: 100%;
  max-width: 616px;
  margin: 0 auto;
}

.title {
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  margin-top: 30px;
  margin-bottom: 20px;
}

.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  border-radius: 40px;
  cursor: pointer;
}

.input {
  padding: 8px 16px;
  border: 1px solid #F1F1F1;
  border-radius: 4px;
  margin-bottom: 10px;
  box-sizing: border-box;
  outline:none;
}
</style>
