<template>
  <div class="search-input">
    <div class="search-input-top">
      <i class="iconfont  icon-fangdajing"></i>
      <input @keyup.enter="search" @focus="trueFocusFlag" placeholder="搜索歌曲、歌单、专辑" type="text">
      <span @click="falseFocusFlag" v-if="focusFlag">取消</span>
    </div>
    <div class="search-input-historys" v-if="focusFlag &&searchHistory.length">
      <ul>
        <li v-for="(item, index) in searchHistory" :key="index">
          <i class="iconfont  icon-clock"></i>
          <span>{{item}}</span>
          <i @click="deleteOneHistory(item)" class="iconfont  icon-cha"></i>
        </li>
        <div style="background-color:#fff;">
          <span @click="clearHistory" class="clear-history">清除搜索记录</span>
        </div>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class searchInput extends Vue {
  focusFlag: boolean = false
  search(e: any) {
    e.preventDefault()
    let val = e.target.value
    this.$store.commit('ADD_HISTORYLIST', val)
    // console.log(val, 3366)
    this.$http.get('/api/soso/fcgi-bin/search_for_qq_cp?_=1555096627064&g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&w=%E5%BC%A0%E6%9D%B0&zhidaqu=1&catZhida=1&t=0&flag=1&ie=utf-8&sem=1&aggr=0&perpage=20&n=20&p=1&remoteplace=txt.mqq.all')
      .then(res => {
        // console.log(res, '000033')
      })
  }
  trueFocusFlag() {
    this.focusFlag = true
  }
  falseFocusFlag() {
    this.focusFlag = false
  }
  get searchHistory() {
    return this.$store.getters.searchHistoryList
  }
  clearHistory() {
    this.$store.commit('CLEAR_HISTORYLIST')
  }
  deleteOneHistory(str: String) {
    this.$store.commit('DELETE_HISTORYLIST', str)
  }
  mounted() {
    // console.log(this.$store, 'store333')
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
      .clear-history {
        color: #47c88a;
        font-size: .14rem;
        line-height: .44rem;
        background-color: #fff;
      }
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
