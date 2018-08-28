<template>
  <div id="app">
    <main-header/>
    <router-view/>
  </div>
</template>

<script>
import MainHeader from '@/pages/common/Header'
export default {
  name: 'App',
  components: {
    MainHeader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', 'Helvetica Neue', Helvetica, 'PingFang SC', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 1rem;
}
#app #mobile-header .el-collapse-item__arrow {
  display: none !important;
}
</style>
