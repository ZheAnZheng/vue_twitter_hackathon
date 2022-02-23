// 將所有的filter放在mixins中
export const Filters = {
  // 帳號前方加上@的filter
  filters: {
    addAtFilter(account) {
      return `@${account}`
    },
    // 跟隨中後方加上單位的filter
    addFollowingUnitFilter(num) {
      return `${num}個`
    },
    // 跟隨者後方加上單位的filter
    addFollowerUnitFilter(num) {
      return `${num}位`
    }
  }
}