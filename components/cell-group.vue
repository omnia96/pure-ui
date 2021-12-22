<template>
  <view class="cell-group" :style="[cellGroupStyle]">
    <slot></slot>
  </view>
</template>
<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import Platform from './platform';

@Component({})
export default class CellGroup extends Vue {
  get cellGroupStyle() {
    return {
      backgroundColor: '#ffffff',
      width: '100%',
      flex: 1,
      margin: '40rpx 0',
      borderRadius: Platform.isIos ? '20rpx' : '0',
      minHeight: '100rpx',
      overflow: 'hidden',
      borderTop: Platform.isAndroid ? '2rpx solid #eeeeee' : 'none',
      borderBottom: Platform.isAndroid ? '2rpx solid #eeeeee' : 'none',
    };
  }
}
</script>
<style lang="scss"></style>
