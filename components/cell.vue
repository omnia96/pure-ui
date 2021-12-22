<template>
  <view class="cell" :style="[cellStyle]" @click="click">
    <view class="cell-start"></view>
    <view class="cell-center" :class="{'cell-line': isIos && !isLast}">{{title}}</view>
    <view class="cell-end" :class="{'cell-line': isIos && !isLast}">
      <view v-if="isIos">
        <u-icon name="arrow-right"></u-icon>
      </view>
    </view>
  </view>
</template>
<script lang="ts">
import {Component, Emit, Prop, Vue} from 'vue-property-decorator';
import Platform from './platform';

@Component({})
export default class Cell extends Vue {
  @Prop({default: 'Title', type: String})
  title!: string;
  @Prop({default: false, type: Boolean})
  isLast!: boolean;
  isIos = Platform.isIos;
  get cellStyle() {
    return {
      padding: Platform.isAndroid ? '0 40rpx' : 'none',
    };
  }
  @Emit()
  click() {}
}
</script>
<style lang="scss">
.cell {
  height: 100+rpx;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &-start, &-center, &-end {
    height: 100%;
    display: flex;
    align-items: center;
  }
  &-center {
    flex: 1;
    margin-left: 20+rpx;
  }
  &-end {
    padding-right: 20+rpx;
  }
  &-line {
    border-bottom: 1px solid #e5e5e5;
  }
  &:active {
    background-color: #eeeeee;
  }
}
</style>
