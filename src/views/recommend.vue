<template>
  <div>
    <Home-swiper :swipeList="swipeList"></Home-swiper>
    <Radio :radioList="radioList"/>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import HomeSwiper from '@/components/recommend/Home-swiper.vue'
import Radio from '@/components/recommend/Radio.vue'

@Component({
  components: {
    HomeSwiper,
    Radio
  }
})

export default class Home extends Vue {
  swipeList = []
  radioList = []
  created() {
    this.$http.get('/api/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?g_tk=714553375&uin=894633585&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1549907341318').then(res => {
      console.log(res.data, 987)
      this.swipeList = res && res.data && res.data.slider
      this.radioList = res && res.data && res.data.radioList
    })
  }
}
</script>
