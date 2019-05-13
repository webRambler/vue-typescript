<template>
  <div class="top-list">
    <!--这是music排行榜页面-->
    <!--<ul>-->
      <!--<li>-->
        <!---->
      <!--</li>-->
    <!--</ul>-->
    <music-list v-for="obj in topList" :obj="obj" :key="obj.id"></music-list>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import MusicList from '@/components/top-list/Music-list.vue'

@Component({
  components: {
    MusicList
  }
})

export default class Toplist extends Vue {
  topList = []
  created() {
    this.getTopList()
  }
  getTopList() {
    this.$http.get('/api/v8/fcg-bin/fcg_myqq_toplist.fcg?_=1552316682653&g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1').then(res => {
      this.topList = res.data.topList
      // console.log(this.topList)
    })
  }
}
</script>

<style scoped lang="scss">
.top-list {
  padding: .1rem;
}
</style>
