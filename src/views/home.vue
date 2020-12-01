<template>
  <div class="home">
    <h3>this is home page！</h3>
  </div>
</template>

<script>
import apiUrl from 'api/http.js'
export default {
  data () {
    return {

    }
  },
  created () {
    // this.getSomeInfo()
  },
  methods: {
    getSomeInfo () {
      this.$root.showLoading = true
      this.$post(apiUrl.getSomeInfo, {
        xxx: 'xxx'
      }).then(res => {
        if (res.data.resuldCode === '0') {
          this.$root.showLoading = false
          const result = res.data.resultData
          console.log('result=', result)
        } else {
          this.$root.showLoading = false
          this.$toast({
            message: res.data.resultMessage,
            type: 'fail',
            duration: 2000
          })
        }
      })
        /* eslint handle-callback-err: "warn" */
        .catch(err => {
          if (err.message === 'Network Error') {
            this.$router.push({
              path: '/error',
              query: {
                xxx: 'xxx'
              }
            })
          }
        })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
