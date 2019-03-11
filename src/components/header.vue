<template>
  <div class="header">
    <ul>
      <li>
        <img src="../assets/logo.png" alt="">
        <!--<p style="margin-left:6px;font-size:20px">网易云音乐</p>-->
      </li>
      <li class="font15">下载APP</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Header extends Vue {
}
</script>


<style scoped lang="scss">
  $mainColor: #31c27c;
  .header {
    color: #fff;
    box-sizing: border-box;
    padding: .09rem .13rem .05rem;
    background-color: $mainColor;
    position: fixed;
    z-index: 999;
    top: 0;
    width: 100%;
    ul {
      display: flex;
      height: .3rem;
      justify-content: space-between;

      li:first-child {
        display: flex;
        height: .25rem;
        line-height: .25rem;

        img {
          height: 100%;
        }
      }

      li:last-child {
        height: .26rem;
        width: .8rem;
        line-height: .26rem;
        background-color: #149c5a;
        border-radius: .13rem;
        border: .01rem solid rgba(255, 240, 240, 0.4);
      }
    }
  }
</style>
