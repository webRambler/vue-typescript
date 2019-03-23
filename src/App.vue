<template>
  <div id="app">
    <Header></Header>
    <div id="nav">
      <router-link to="/recom">推荐</router-link>
      <router-link to="/toplist">排行榜</router-link>
      <router-link to="/search">搜索</router-link>
    </div>
    <keep-alive>
      <router-view/>
    </keep-alive>
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
    background-color: #F4F4F4;
    text-align: center;
    color: $textColor;
  }
  #nav {
    display: flex;
    margin-top: .44rem;
    height: .4rem;
    align-items: center;
    background-color: #fff;
    /*justify-content: space-around;*/
    border-bottom: .01rem solid rgba(3,3,3,.1);
    >a {
      color: $textColor;
      flex: 1;
      font-size: .16rem;
      /* 在移动端点击时，背景会高亮，设置此属性可以隐藏背景高亮 */
      -webkit-tap-highlight-color:transparent;
      &.router-link-exact-active {
        color: $mainColor;
        position: relative;
        &::after {
          content: '';
          position: absolute;
          bottom: -0.1rem;
          left: 0;
          width: 100%;
          height: .02rem;
          background-color: $mainColor;
        }
      }
    }
  }
</style>
