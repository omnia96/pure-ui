<template>
  <view class="waterfall"
       :style="[{padding: _margin}]"
  >
    <view class="waterfall__item" v-for="(waterfallItem,waterfallIndex) in waterfall" :key="waterfallIndex">
      <view class="w-100" :style="[{margin: _margin}]"
          v-for="(item,index) in waterfallItem" :key="index">
        <slot :value="item"></slot>
      </view>
    </view>
  </view>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    value: {type: Array, default: []},

    column: {type: Number, default: 2},
    margin: {type: [Number, String], default: 10},
  },

  data: () => {
    const items: any[] = [];
    const waterfall: Array<Array<any>> = [];
    // tslint:disable-next-line:prefer-const variable-name
    let _margin!: string|number;
    return {items, waterfall, _margin};
  },
  created(): void {
    // if (this.value.length > 0) {
    //     this.items = this.value;
    // }
    this.items = this.value;
    this.setWaterfall();
    this.setMargin();
  },
  watch: {
    value(newValue): void {
      this.items = newValue;
      this.waterfall = [];
      this.setWaterfall();
    },
  },
  methods: {
    setWaterfall(): void {
      for (let index = 0; index < this.column; index++) {
        this.waterfall.push([]);
      }
      // tslint:disable-next-line:forin
      for (const index in this.items) {
        this.waterfall[Number(index) % this.column].push(this.items[index]);
      }
    },
    setMargin(): void {
      //  #ifdef MP-WEIXIN
      if (this.margin.toString().indexOf('upx') !== -1) {
        this._margin = this.margin.toString().split('upx')[0] + 'rpx';
      } else {
        this._margin = this.margin;
      }
      //  #endif
      //  #ifdef H5
      this._margin = this.margin;
      // #endif
    },
  },
});
</script>
<style lang="scss">
.waterfall {
  width: 100%;
  display: flex;
  &__item {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
