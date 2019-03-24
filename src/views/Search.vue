<template>
  <div>
    这是搜索页面
    <hot-keyword></hot-keyword>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import HotKeyword from '../components/search/hot-keyword'

  @Component({
    components: {
      HotKeyword
    }
  })
export default class Search extends Vue {

}

</script>

<style scoped>

</style>
