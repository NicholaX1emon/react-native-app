

export default class NaviUtil {
  static navigateTo = (target, params) => {
    const navigation  = NaviUtil.navigation
    if (!navigation) return
    navigation.navigate(target, {
      ...params
    })
  }
}