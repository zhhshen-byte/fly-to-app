import { openApp } from 'fly-to-app'

// 打开微信
const source = `weixin://dl/scan`
openApp({
  source,
  isApp: false, // 是否在app中
  target: 'http://m.ke.com',
  cb: () => {
    window.alert('打开成功')
  }
})
console.log('object', openApp)