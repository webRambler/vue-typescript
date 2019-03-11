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
    padding: 10px;
    color: #000;
    &-title {
      text-align: left;
      color: #000;
      margin: 5px 0 10px;
      font-size: 16px;
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
          bottom: 43px;
          color: aliceblue;
          font-size: 20px;
          right: 3px;
        }
        > div {
          height: 40px;
          padding-left: 5px;
          line-height: 40px;
          text-align: left;
        }
      }
    }
  }
</style>
