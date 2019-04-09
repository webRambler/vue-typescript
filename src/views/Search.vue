<template>
  <div>
    这是搜索页面
    <search-input></search-input>
    <hot-keyword></hot-keyword>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import HotKeyword from '@/components/search/hot-keyword'
import SearchInput from '@/components/search/search-input'

  @Component({
    components: {
      HotKeyword,
      SearchInput
    }
  })
export default class Search extends Vue {

}

</script>

<style scoped>

</style>
