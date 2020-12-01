<template>
  <div id="app">
    <router-view />
    <van-overlay :show="$root.showLoading"
                 @click="$root.showLoading = false">
      <div class="mengceng"
           @click.stop>
        <van-loading type="spinner"
                     vertical>加载中...</van-loading>
      </div>
    </van-overlay>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 384px;
  max-width: 14.23rem;
  margin: 0 auto;
  .mengceng {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
}
</style>
