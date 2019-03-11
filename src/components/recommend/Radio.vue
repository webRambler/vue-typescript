<template>
  <div class="radio">
    <h2 class="radio-title">电台</h2>
    <div class="radio-content">
      <div v-for="item in radioList" :key="item.radioid">
        <img :src="item.picUrl" alt="">
        <i class="iconfont  icon-bofang"></i>
        <div v-text="item.Ftitle"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class Radio extends Vue {
  @Prop(Array) radioList!: any
}
</script>

<style scoped lang="scss">
  .radio {
    padding: .1rem;
    color: #000;
    &-title {
      text-align: left;
      color: #000;
      margin: .05rem 0 .1rem;
      font-size: .16rem;
      font-weight: 500;
    }
    &-content {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      > div {
        width: 49%;
        position: relative;
        background-color: #fff;
        > img {
          width: 100%;
        }
        > i {
          position: absolute;
          bottom: .43rem;
          color: aliceblue;
          font-size: .2rem;
          right: .03rem;
        }
        > div {
          height: .4rem;
          padding-left: .05rem;
          line-height: .4rem;
          text-align: left;
        }
      }
    }
  }
</style>
