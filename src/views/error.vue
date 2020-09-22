<template>
  <div class="error">
    <div class="wrapper">
      <div class="logo"></div>
      <div class="msg">网络不给力，请稍后再试</div>
      <div class="link"
           @click="reload">点击重新加载</div>
    </div>
    <van-overlay :show="showLoading"
                 @click="showLoading = false">
      <div class="mengceng"
           @click.stop>
        <van-loading type="spinner"
                     vertical>加载中...</van-loading>
      </div>
    </van-overlay>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showLoading: false
    }
  },
  created () {

  },
  methods: {
    reload () {
      this.showLoading = true
      setTimeout(() => {
        this.$router.push({
          path: '/home'
        })
      }, 1000)
    }
  }
}
</script>

<style lang="scss">
.error {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .mengceng {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .wrapper {
    width: 150px;
    height: 150px;
    margin-top: -60px;

    .logo {
      width: 150px;
      height: 95px;
      background: url('./../assets/imgs/error.png') no-repeat center;
      background-size: 100% 100%;
    }

    .msg {
      font-size: 12px;
      color: #848484;
      line-height: 17px;
      margin-top: 10px;
    }

    .link {
      font-size: 14px;
      color: #5a9fff;
      line-height: 14px;
      margin-top: 15px;
    }
  }
}
</style>
