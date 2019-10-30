<template>
  <div class="search-input">
    <div class="search-input-top">
<!--      <i class="iconfont  icon-fangdajing"></i>-->
      <el-input prefix-icon="el-icon-search" @keyup.native.enter="search" clearable @focus="trueFocusFlag" placeholder="搜索歌曲、歌单、专辑" type="text" v-model="inputVal">
      </el-input>
      <span @click="falseFocusFlag" v-if="focusFlag">取消</span>
    </div>
    <div class="search-input-historys" v-if="focusFlag &&searchHistory.length">
      <ul>
        <li v-for="(item, index) in searchHistory" :key="index">
          <i class="iconfont  icon-clock"></i>
          <span @click="tapHistory(item)">{{item}}</span>
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
import eBus from '@/utils/event-bus'


@Component
export default class searchInput extends Vue {
  focusFlag: boolean = false
  inputVal: any = '世间的美好与你环环相扣'
  pageNum: number = 1
  search() {
    if (this.inputVal === '') return
    this.$store.commit('ADD_HISTORYLIST', this.inputVal)
    const now = Date.now()
    this.$http.get(`/song/searchSong?_=${now}&w=${this.inputVal}&p=${this.pageNum++}`)
      .then(res => {
        console.log(res, '000033')
      })
  }
  tapHistory(val) {
    this.inputVal = val
    this.pageNum = 1
    this.search()
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
  created() {
    eBus.$on('searchHotkey', val => {
      this.inputVal = val
      this.search()
    })
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
      /deep/ .el-input__inner {
        height: .36rem;
        line-height: .36rem;
      }
      span {
        padding: 0 .1rem;
        font-size: .14rem;
        height: .36rem;
        min-width: .3rem;
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
        display: flex;
        span {
          font-size: .15rem;
          margin-left: .15rem;
          color: #000;
          flex: 1;
        }
        i:last-of-type {
          float: right;
        }
      }
    }
  }
</style>
