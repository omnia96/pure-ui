<template>
  <view class="actions-bar">
    <template v-for="(item, index) in actions">
      <view class="action" :key="index" @click="action(index)">
        <view class="action-icon">
          <u-icon :name="item.icon" size="60rpx" color="white"></u-icon>
        </view>
        <view class="action-text">{{item.text}}</view>
      </view>
    </template>
  </view>
</template>
<script lang="ts">
import {Component, Emit, Prop, Vue} from "vue-property-decorator";

@Component({})
export default class ActionsBar extends Vue {
  @Prop({default: [], type: Array})
  actions!: any[]
  @Emit()
  action(index: number) {}
}
</script>
<style lang="scss">
.actions-bar {
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 120+rpx;
  background: linear-gradient(to top , #00000080, #00000000);
  color: white;
}
.action {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 120+rpx;
  border-radius: 120+rpx;
  &:active, &:hover {
    background: #00000030;
  }
}
</style>
