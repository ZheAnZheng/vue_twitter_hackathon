// 將所有的filter放在mixins中
export const Filters = {
  filters: {
    addAtFilter(account) {
      return `@${account}`
    }
  }
}