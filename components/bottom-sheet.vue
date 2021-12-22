<template>
  <view class="bottom-sheet" :style="[bottomSheetStyle]" @click="close">
    <view class="bottom-sheet-container" :style="[containerStyle]" @click.stop>
      <view class="bottom-sheet-header">
        <view class="bottom-sheet-close">
          <u-icon name="close" v-if="isAndroid" @click="close"></u-icon>
        </view>
        <view class="text-center">
          <view class="bottom-sheet-title headline-6">{{title}}</view>
          <view class="bottom-sheet-subtitle subtitle-1">{{subtitle}}</view>
        </view>
        <view class="bottom-sheet-close">
          <view class="button" v-if="isIos" @click="close">完成</view>
        </view>
      </view>
      <view class="bottom-sheet-content">
        <slot></slot>
      </view>
      <view class="bottom-sheet-footer"></view>
    </view>
  </view>
</template>
<script lang="ts">
import {Component, Emit, Prop, Vue} from 'vue-property-decorator';
import Platform from './platform';

@Component({})
export default class BottomSheet extends Vue {
  @Prop({default: 'Title', type: String})
  title?: string;
  @Prop({default: '', type: String})
  subtitle?: string;
  @Prop({default: false, type: Boolean})
  show!: boolean;
  isAndroid = Platform.isAndroid;
  isIos = Platform.isIos;
  get bottomSheetStyle() {
    return {
      display: this.show? 'flex' : 'none',
    };
  }
  get containerStyle() {
    return {
      width: Platform.isIos ? '100%' : 'calc(100vw - 40rpx)',
      backgroundColor: Platform.isAndroid ? '#fff' : '#f3f4f6',
      padding: Platform.isIos ? '20rpx': '0',
    };
  }
  @Emit()
  close() {}
}
</script>
<style lang="scss">
.bottom-sheet {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  background: rgba(0, 0, 0, 0.5);
  &-container {
    overflow: hidden;
    border-radius: 20+rpx 20+rpx 0 0;
    background: #ffffff;
  }
  &-header, &-content, &-footer {
    width: 100%;
  }
  &-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100+rpx;
  }
  &-close {
    width: 100+rpx;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &-content {
    //background: red;
  }
}
</style>
