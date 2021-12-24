<template>
  <view class="tabbar w-100">
    <view class="tabbar-content" :style="[tabbarStyle]">
      <template v-for="(item, index) in list">
        <view class="tabbar-item" :key="index" :class="{'tabbar-active': index === value}">
          <view>
            <u-icon size="60rpx" :name="item.icon"></u-icon>
          </view>
          <view class="tabbar-text">{{item.text}}</view>
        </view>
      </template>
    </view>
    <view class="tabbar-placeholder"></view>
  </view>
</template>
<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";
import Platform from "./platform";

@Component({})
export default class Tabbar extends Vue {
  @Prop({default: [{text: '图库', icon: 'photo'}, {text: '为您推荐', icon: 'star'}], type: Array})
  list!: Array<any>;
  @Prop({default: 0, type: Number})
  value!: number;
  get tabbarStyle() {
    return {
      height: '120rpx',
      backgroundColor: Platform.isAndroid ? "#f5f5f5" : '#ffffff',
      overflow: "hidden"
    };
  }
}
</script>
<style lang="scss">
.tabbar {
  &-content {
    width: 100%;
    position: fixed;
    bottom: 0;
    display: flex;
    align-items: center;
  }
  &-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
  }
  &-text {
    font-size: 24+rpx;
    color: #999999;
  }
  &-active {
    color: #000000;
  }
  &-placeholder {
    height: 120+rpx;
  }
}
button {
  &:after {
    border: none;
  }
}
</style>
