<template>
  <div id="app">
    <Header></Header>
    <div id="nav">
      <router-link to="/">推荐音乐</router-link>
      <router-link to="/hot">热歌榜</router-link>
      <router-link to="/search">搜索</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script lang="ts">
import Header from './components/header.vue'
import { Vue, Component } from 'vue-property-decorator'

@Component({
  components: {
    Header
  }
})

export default class App extends Vue {}

</script>


<style lang="scss">
  @import 'base.scss';
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: $textColor;
  }
  #nav {
    display: flex;
    height: 40px;
    align-items: center;
    justify-content: space-around;
    border-bottom: 1px solid rgba(3,3,3,.1);
    >a {
      color: $textColor;
      &.router-link-exact-active {
        color: $mainColor;
        position: relative;
        &::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: $mainColor;
        }
      }
    }
  }
</style>
