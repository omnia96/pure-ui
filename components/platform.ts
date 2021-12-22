export default class Platform {
  public static get isIos() {
    let isIos = false;
    uni.getSystemInfo({
      success: (res) => {
        isIos = res.platform === 'ios' || res.system.split(' ')[0] === 'iOS';
      },
    });
    return isIos;
  }
  static get isAndroid() {
    let isAndroid = false;
    uni.getSystemInfo({
      success: (res) => {
        isAndroid = res.platform === 'android' || res.system.split(' ')[0] === 'Android';
      },
    });
    return isAndroid;
  }
}
