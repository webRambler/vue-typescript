<template>
  <div>
    <!-- swiper -->
    <swiper :options="swiperOption">
      <swiper-slide v-for="item in swipeList" :key="item.id">
        <img style="width: 100%;" :src="item.picUrl" alt="">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

@Component({
  components: {
    swiper,
    swiperSlide
  }
})

export default class HomeSwiper extends Vue {
  @Prop(Array) swipeList!: any
  swiperOption: any = {
    pagination: {
      el: '.swiper-pagination'
    },
    autoplay: {
      delay: 4000
    },
    loop: true
  }
}
</script>

<style scoped lang="scss">
  .swiper-pagination {
    /deep/ span {
      width: .06rem;
      height: .06rem;
      &.swiper-pagination-bullet-active {
        background-color: #fff;
        width: .08rem;
        height: .08rem;
      }
    }
  }
</style>
