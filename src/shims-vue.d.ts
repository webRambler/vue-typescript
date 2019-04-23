import Vue from 'vue'
import
import { AxiosStatic } from 'axios'

declare module '*.vue' {
  export default Vue
}

declare module 'vue/types/vue' {
  interface Vue {
    $http: AxiosStatic
  }
}

declare module ''
