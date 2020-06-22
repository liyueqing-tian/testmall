module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        // 默认src : @
        'assets': '@/assets',
        'components': '@/components',
        'views': '@/views',
        'common': '@/common',
        'network': '@/network'

      }
    }
  }
}