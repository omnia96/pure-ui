<template>
  <view class="update-manager">
    <bottom-sheet :show="updateManagerSheetState" title="更新提醒" @close="updateManagerSheetState = false">
      <view class="flex-c align-center update-manager-content">
        <u-image :src="src" width="400rpx" mode="widthFix"></u-image>
        <u-gap height="40rpx"></u-gap>
        <view>新版本现已就绪</view>
        <u-gap height="40rpx"></u-gap>
        <u-button type="primary" text="更新" shape="circle" @click="update"></u-button>
      </view>
    </bottom-sheet>
  </view>
</template>
<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import BottomSheet from "./bottom-sheet.vue";
import Images from "../unit/images";

@Component({
  components: {BottomSheet}
})
export default class UpdateManager extends Vue {
  src = Images.update;
  updateManagerSheetState = false;
  updateManager!: any
  created() {
    this.updateManager = uni.getUpdateManager();
    this.updateManager.onCheckForUpdate((res: any) => console.log(`has update: ${res.hasUpdate}`));
    this.updateManager.onUpdateReady((res: any) => this.updateManagerSheetState = true);
    this.updateManager.onUpdateFailed((res: any) => console.log('新的版本下载失败'));
  }
  update() {
    this.updateManager.applyUpdate();
  }
}
</script>
<style lang="scss">
.update-manager {
  &-content {
    padding: 40+rpx;
  }
}
</style>
