import GetProviderRes = UniApp.GetProviderRes;
import RequestPaymentOptions = UniApp.RequestPaymentOptions;
import NavigateToOptions = UniApp.NavigateToOptions;
import ShowToastOptions = UniApp.ShowToastOptions;
import NavigateBackOptions = UniApp.NavigateBackOptions;
import GetStorageOptions = UniApp.GetStorageOptions;
import SetStorageOptions = UniApp.SetStorageOptions;
import {Observable} from 'rxjs';
import GetLocationOptions = UniApp.GetLocationOptions;
import GetLocationSuccess = UniApp.GetLocationSuccess;

export default class RxUni {
  /**
   * 获取服务供应商
   * @param {'oauth' | 'share' | 'payment' | 'push'} service
   * @return {Observable<any>}
   */
  public static getProvider(service: 'oauth' | 'share' | 'payment' | 'push'): Observable<GetProviderRes> {
    return new Observable<GetProviderRes>((subscriber) => {
      uni.getProvider({
        service,
        success: (result) => subscriber.next(result),
        fail: (result) => subscriber.error(result),
        complete: () => subscriber.complete(),
      });
    });
  }

  /**
   * 支付
   * @param {RequestPaymentOptions} options
   * @return {Observable<unknown>}
   */
  static requestPayment(options: RequestPaymentOptions): Observable<any> {
    return new Observable((subscriber) => {
      options.success = (result) => subscriber.next(result);
      options.fail = (result) => subscriber.error(result);
      options.complete = () => subscriber.complete();
      uni.requestPayment(options);
    });
  }

  /**
   * 导航
   * @param {string} url
   * @return {Observable<any>}
   */
  static navigateTo(url: string): Observable<any> {
    return new Observable<any>((subscriber) => {
      const options: NavigateToOptions = {url};
      options.success = (result) => subscriber.next(result);
      options.fail = (result) => {
        console.error(result);
        subscriber.error(result);
      };
      options.complete = () => subscriber.complete();
      uni.navigateTo(options);
    });
  }

  /**
   * 显示消息提示框
   * @param {string} title
   * @param {'success' | 'loading' | 'error' | 'none' | undefined} icon
   * @return {Observable<any>}
   */
  static showToast(title: string, icon: 'success' | 'loading' | 'error' | 'none' | undefined = 'none') {
    const options: ShowToastOptions = {title, icon};
    return new Observable<any>((subscriber) => {
      options.success = (result) => subscriber.next(result);
      options.fail = (result) => subscriber.error(result);
      options.complete = () => subscriber.complete();
      uni.showToast(options);
    });
  }

  /**
   * 返回
   * @param {NavigateBackOptions} options
   * @return {Observable<any>}
   */
  static navigateBack(options: NavigateBackOptions) {
    return new Observable((subscriber) => {
      if (!options.delta) options.delta = 1;
      uni.navigateBack(options);
      subscriber.next();
      subscriber.complete();
    });
  }
  /**
   * 获取缓存
   * @param {string} key
   * @return {Observable<any>}
   */
  static getStorage(key: string) {
    return new Observable<{errMsg: string, data: any}>((subscriber) => {
      const options: GetStorageOptions = {key};
      options.success = (result) => subscriber.next(result);
      options.fail = (result) => subscriber.error(result);
      options.complete = () => subscriber.complete();
      uni.getStorage(options);
    });
  }

  /**
   * 设置缓存
   * @param {string} key
   * @param {any} data
   * @return {Observable<any>}
   */
  static setStorage(key: string, data: any) {
    const options: SetStorageOptions = {key, data};
    return new Observable<{errMsg: string, data: any}>((subscriber) => {
      options.success = (result) => subscriber.next({errMsg: result.errMsg, data});
      options.fail = (result) => subscriber.error(result);
      options.complete = () => subscriber.complete();
      uni.setStorage(options);
      // #ifdef APP-PLUS
      subscriber.next({errMsg: '', data: data});
      // #endif
    });
  }

  static getLocation() {
    const options: GetLocationOptions = {};
    return new Observable<GetLocationSuccess>((subscriber) => {
      options.success = (result) => subscriber.next(result);
      options.fail = (result) => subscriber.error(result);
      options.complete = () => subscriber.complete();
      uni.getLocation(options);
    });
  }

  static get() {
  }
}
