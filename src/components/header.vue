<template>
  <div class="header">
    <ul>
      <li>
        <img src="../assets/top-icon.png" alt="">
        <p style="margin-left:6px;font-size:20px">网易云音乐</p>
      </li>
      <li class="font15">下载APP</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import http from '@/utils/http'

@Component
export default class Header extends Vue {
  created() {
    http.post('csdn/QXAR123/phoenix/comment/list/86499533?page=1&size=15&tree_type=1',{
      page: 1,
      size: 15,
      tree_type: 1
    }).then(res => {
      console.log(res, 999)
    })
  }
}
</script>


<style scoped lang="scss">
  $mainColor: #d33a31;
  .header {
    color: #fff;
    padding: 16px 13px;
    background-color: $mainColor;
    ul {
      display: flex;
      height: 30px;
      justify-content: space-between;
      li:first-child {
        display: flex;
        height: 25px;
        line-height: 25px;
      }
      li:last-child {
        height: 30px;
        width: 80px;
        line-height: 30px;
        border-radius: 15px;
        border: 1px solid rgba(255, 240, 240, 0.4);
      }
    }
  }
</style>
