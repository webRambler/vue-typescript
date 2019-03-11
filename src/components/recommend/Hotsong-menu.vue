<template>
  <div class="hot-menu">
    <h2>热门歌单</h2>
    <ul>
      <li v-for="item in songList" :key="item.id">
        <img :src="item.picUrl" alt>
        <span class="ali-icon span">
          <i class="iconfont icon-erji"></i>
          {{calculateNum(item.accessnum)}}万
        </span>
        <i class="ali-icon iconfont  icon-bofang"></i>
        <div class="txt">
          <p v-text="item.songListDesc"></p>
          <p v-text="item.songListAuthor"></p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class Radio extends Vue {
  @Prop(Array) songList!: Array<object>;
  calculateNum <Number> (num: number): number {
    return Math.round(num / 1000) / 10
  }
}
</script>

<style scoped lang="scss">
  .hot-menu {
    margin-top: 20px;
    padding: 10px;
    > h2 {
      text-align: left;
      color: #000;
    }
    ul {
      display: flex;
      justify-content: space-between;
      width: 100%;
      flex-wrap: wrap;
      li {
        width: 49%;
        text-align: left;
        position: relative;
        background-color: #fff;
        margin-top: 10px;
        .ali-icon {
          position: absolute;
          &.span{
            left: 6px;
            color: #fff;
            font-size: 12px;
            bottom: 45px;
            i {
              color: #fff;
              font-size: 12px;
            }
          }
          &.iconfont {
            right: 3px;
            bottom: 45px;
            font-size: 20px;
            color: #fff;
          }
        }
        img {
          width: 100%;
        }
        .txt {
          padding-left: 8px;
          p {
            color: #000;
            font-size: 12px;
            &:first-child {
              font-size: 14px;
              text-overflow: ellipsis;
              white-space: nowrap;
              overflow: hidden;
            }
          }
        }
      }
    }
  }
</style>
