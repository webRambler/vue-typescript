<template>
  <div class="hot-keyword">
    <h3 class="hot-keyword_title">热门搜索</h3>
    <div>
      <a class="hot-keyword_text" v-for="item in keywordList" :key="item.n">{{item.k}} </a>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

  @Component
export default class HotKeyword extends Vue {
    keywordList: Array<object> = []
    created() {
      this.getHotkey()
    }
    getHotkey() {
      this.$http.get('/api/splcloud/fcgi-bin/gethotkey.fcg?_=1553401390313&g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1').then(res => {
        console.log(res, 77)
        let list: Array<object> = res.data.hotkey
        if (res && res.data && res.data.special_key) {
          this.keywordList.unshift({ k: res.data.special_key, n: Date.now().toString().slice(-5).padStart(6, '1') })
          list.map(v => {
            v.k && v.k.length > 9 && this.keywordList.push(v)
          })
          this.keywordList = [...new Set(this.keywordList)]
          console.log(this.keywordList, 6666)
        }
      })
    }
}
</script>

<style scoped lang="scss">
  .hot-keyword {
    padding: .15rem;
    text-align: left;
    &_title {
      color: rgba(0,0,0,.6);
      margin-bottom: 8px;
      font-weight: 600;
    }
    &_text {
      padding: 0 .1rem;
      display: inline-block;
      margin-bottom: .1rem;
      margin-right: .14rem;
      border-radius: .9rem;
      line-height: .32rem;
      font-size: .14rem;
      height: .32rem;
      border: 1px solid rgba(0,0,0,.6);
      &:first-child {
        color: #fc4524;
        border-color: #fc4524;
      }
    }
  }
</style>
