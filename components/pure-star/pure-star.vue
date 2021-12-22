<template>
  <div class="star" :style="starStyle.toString()">
    <span class="title">{{title}}</span>
    <span class="close">x</span>
  </div>
</template>
<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";
@Component({
  name: "pure-star",
})
export default class PureStar extends Vue {
  @Prop({default: "添加到我的小程序，随时随地看天气!", type: String})
  title!: string;
  private starStyle = {
    top: uni.upx2px(20) + 'px'
  };
  public created() {
    console.log(11113333)
    uni.getSystemInfo({
      success: (result) => {
        console.log(result.statusBarHeight);
      },
    });
    const menuButtonInfo = uni.getMenuButtonBoundingClientRect()
    console.log(menuButtonInfo)
    console.log(123)
    this.starStyle = {
      top: uni.upx2px(20) + (menuButtonInfo.bottom as number) + 'px'
    }
    console.log(this.starStyle);

  }
}
</script>
<style lang="scss" scoped>
.star {
  position: fixed;
  top: 20+rpx;
  right: 20+rpx;
  background-color: #2196f3;
  color: white;
  display: flex;
  align-items: center;
  .title{
    padding: 0 20+rpx;
  }
  .close {
    width: 80+rpx;
    height: 80+rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, .15);
  }
}
</style>
