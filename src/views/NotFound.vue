<template>
  <div class="not-found">
    <b>404</b>&nbsp;&nbsp;&nbsp;无法找到对应的页面~~
  </div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class NotFound extends Vue {

}
</script>

<style scoped lang="scss">
  .not-found {
    text-align: center;
    padding-top: 200px;
    flex: 1;
    b {
      color: crimson;
    }
  }
</style>
