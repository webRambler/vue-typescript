<template>
  <div class="search-input">
    <div class="search-input-top">
      <i class="iconfont  icon-fangdajing"></i>
      <input @focus="trueFocusFlag" placeholder="搜索歌曲、歌单、专辑" type="text">
      <span @click="falseFocusFlag" v-if="focusFlag">取消</span>
    </div>
    <div class="search-input-historys" v-if="focusFlag">
      <ul>
        <li>
          <i class="iconfont  icon-clock"></i>
          <span>哈哈哈哈</span>
          <i class="iconfont  icon-cha"></i>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class searchInput extends Vue {
  focusFlag: boolean = false
  trueFocusFlag() {
    this.focusFlag = true
  }
  falseFocusFlag() {
    this.focusFlag = false
  }
}
</script>

<style scoped lang="scss">
  .search-input {
    position: relative;
    &-top {
      display: flex;
      margin: .1rem;
      position: relative;
      i {
        position: absolute;
        top: .06rem;
        color: #ccc;
        left: .1rem;
      }
      input {
        flex: 1;
        border-radius: 4px;
        font-size: .14rem;
        height: .16rem;
        color: #ccc;
        padding: 8px 12px 8px 35px;
        &::-webkit-input-placeholder {
          color: #ccc;
        }
      }
      span {
        padding: 0 .1rem;
        font-size: .14rem;
        height: .36rem;
        line-height: .36rem;
      }
    }

    &-historys {
      position: absolute;
      top: .45rem;
      width: 100%;
      z-index: 999;
      li {
        padding: 0 .15rem;
        border-bottom: 1px solid #ededed;
        text-align: left;
        background-color: #fff;
        height: .44rem;
        line-height: .44rem;
        span {
          font-size: .15rem;
          margin-left: .15rem;
          color: #000;
        }
        i:last-of-type {
          float: right;
        }
      }
    }
  }
</style>
