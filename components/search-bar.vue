<template>
  <div class="md-search">
    <div class="md-search-content">
      <u-search bg-color="transparent"
                :disabled="true"
                height="90"
                :show-action="false"
                placeholder="搜索城市和地区"></u-search>
      <u-avatar size="76rpx" @click="toAccount" icon="account"></u-avatar>
    </div>
  </div>
</template>
<script lang="ts">
import {Component, Emit, Vue} from 'vue-property-decorator';
@Component({})
export default class mdSearch extends Vue {
  private popupStatus = false;
  @Emit()
  toAccount() {
    this.popupStatus = !this.popupStatus;
  }
}
</script>
<style lang="scss">
.md-search {
  width: 100%;
  padding: 20+rpx 40+rpx;
  &-content {
    border-radius: 10+rpx;
    background-color: #eeeeee;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 20+rpx;
  }
}
</style>
