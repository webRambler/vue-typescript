<template>
  <div class="music-list">
    <div class="music-list-left">
      <img :src="obj1.picUrl" :alt="obj1.topTitle">
      <span class="ali-icon span">
        <i class="iconfont icon-erji"></i>
        {{calculateNum(obj1.listenCount)}}万
      </span>
    </div>
    <div class="music-list-right">
      <h2 v-text="obj1.topTitle"></h2>
      <i class="iconfont icon-iconfont-right"></i>
      <ul>
        <li class="txt" v-for="(item, i) in obj1.songList" :key="i">
          {{ i+1 }}
          <span style="color: #000;margin-left: 0.05rem">{{item.songname}}</span> -
          {{item.singername}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class MusicList extends Vue {
  @Prop(Object) obj!: object
  obj1 = this.obj || {}
  calculateNum <Number> (num: number): number {
    return Math.round(num / 1000) / 10
  }
}
</script>

<style scoped lang="scss">
.music-list {
  /*overflow: hidden;*/
  display: flex;
  background-color: #fff;
  margin-bottom: .1rem;
  justify-content: flex-start;
  &-left {
    /*float: left;*/
    position: relative;
    /*width: 1rem;*/
    height: 1rem;
    flex: 100;
    > img {
      width: 100%;
      height: 100%;
    }
    > span {
      position: absolute;
      bottom: 0;
      left: .1rem;
      color: white;
      opacity: .6;
      font-size: .12rem;
      i {
        font-size: .12rem;
      }
    }
  }
  &-right {
    position: relative;
    box-sizing: border-box;
    /*float: left;*/
    width: 2.55rem;
    padding: .04rem .1rem .04rem .15rem;
    flex: 255;
    text-align: left;
    > h2 {
      font-size: .16rem;
      color: #000;
      font-weight: 400;
      margin-bottom: .05rem;
    }
    > i {
      position: absolute;
      right: .03rem;
      font-size: .16rem;
      top: 40%;
    }
    .txt {
      overflow: hidden;
      font-size: .14rem;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
</style>
