let state = sessionStorage.getItem('state')

let defaultState = {
  searchHistoryList: ['张杰', '你的酒馆对我打了烊', '不能说的秘密', '比悲伤更悲伤的故事']
}

export default state ? JSON.parse(state) : defaultState
