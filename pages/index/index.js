//获取应用实例
const app = getApp()

Page({
  data: {
    
  },
  chooseVideo(){
    wx.chooseVideo({
      sourceType: ['album', 'camera'],
      maxDuration: 60,
      camera: 'back',
      success(res) {
        console.log(res.tempFilePath)
      }
    })
  }
 
});
