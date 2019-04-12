<template>
  <div class="search-input">
    <div class="search-input-top">
      <i class="iconfont  icon-fangdajing"></i>
      <input placeholder="搜索歌曲、歌单、专辑" type="text">
      <span>取消</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class searchInput extends Vue {

}
</script>

<style scoped lang="scss">
  .search-input {
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
  }
</style>
