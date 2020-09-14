module.exports = {
  css: {
    loaderOptions: {
      css: {},
      postcss: {
        plugins: [
          require('postcss-px2rem-exclude')({
            remUnit: 37.5
          })
        ]
      }
    }
  }
}
