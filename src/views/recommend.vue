<template>
  <div>
    <Home-swiper :swipeList="swipeList"></Home-swiper>
    <Radio :radioList="radioList"/>
    <HotsongMenu :songList="songList"/>
    <div class="footer">
      <p style="color: rgba(0,0,0,.6);">去客户端发现更多好音乐 ></p>
      <p style="color: #000">查看电脑版网页</p>
      <div style="margin: .10rem">
        <i style="font-size: .23rem;" class="iconfont  icon-QQyinle"></i>
        <span style="font-size: .18rem">QQ音乐</span>
      </div>
      <p class="copyright">Copyright © 1998 - <span id="js_cpright_year">2019</span> Tencent. All Rights Reserved.</p>
      <p class="link">联系电话：0755-86013388 QQ群：55209235</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import HomeSwiper from '@/components/recommend/Home-swiper.vue'
import Radio from '@/components/recommend/Radio.vue'
import HotsongMenu from '@/components/recommend/Hotsong-menu.vue'

@Component({
  components: {
    HomeSwiper,
    Radio,
    HotsongMenu
  }
})

export default class Home extends Vue {
  swipeList = []
  radioList = []
  songList = []
  created() {
    this.getRecommendList()
  }
  mounted() {
    console.log(this, 777)
  }
  getRecommendList() {
    this.$http.get('/api/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?g_tk=714553375&uin=894633585&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1549907341318').then(res => {
      console.log(res.data, 987)
      this.swipeList = res && res.data && res.data.slider
      this.radioList = res && res.data && res.data.radioList
      this.songList = res && res.data && res.data.songList
    })
  }
}
</script>

<style lang="scss" scoped>
  .footer {
    font-size: .14rem;
    .link,.copyright {
      font-size: .10rem;
    }
  }
</style>

