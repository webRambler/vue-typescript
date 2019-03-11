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
    padding: 9px 13px 5px;
    background-color: $mainColor;
    position: fixed;
    z-index: 999;
    top: 0;
    width: 100%;
    ul {
      display: flex;
      height: 30px;
      justify-content: space-between;

      li:first-child {
        display: flex;
        height: 25px;
        line-height: 25px;

        img {
          height: 100%;
        }
      }

      li:last-child {
        height: 26px;
        width: 80px;
        line-height: 26px;
        background-color: #149c5a;
        border-radius: 13px;
        border: 1px solid rgba(255, 240, 240, 0.4);
      }
    }
  }
</style>
