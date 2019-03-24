export default {
  ADD_HISTORYLIST(state: any, str: string) {
    state.searchHistoryList.push(str)
  },
  DELETE_HISTORYLIST(state: any, str: string) {
    let index = state.HISTORYLIST.indexOf(str)
    state.HISTORYLIST.splice(index, 1)
  }
}
