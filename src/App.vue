<template>
  <div id="app">
    <header></header>
    <tab></tab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import Header from 'components/header'
  import Tab from 'components/tab'
  export default {
    name: 'app',
    components: {
      Header,
      Tab
    }
  }
</script>

<style>

</style>
