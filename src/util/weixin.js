// var wx = require('weixin-js-sdk');


export function initsharemassage(content) {
    wx.updateAppMessageShareData({
        title: content.title, // 分享标题
        desc: content.friend, // 分享描述
        link: content.link, // 分享链接
        imgUrl: content.image, // 分享图标  
        success: function() {
            // 设置成功
            console.log('设置成功')
        },
        fail(res) {
            console.log('f', res)
        }
    })
    wx.updateTimelineShareData({
        title: content.title, // 分享标题
        desc: content.friend, // 分享描述
        link: content.link, // 分享链接
        imgUrl: content.image, // 分享图标  
        success: function() {
            // 设置成功
        }
    })

    if (content.isshare)
        wx.hideOptionMenu(); //取消分享

}

export function wxChooseImage() {
    return new Promise((reslove, reject) => {
        wx.chooseImage({
            count: 1, // 默认9
            sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
            sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
            success: function(res) {

                reslove(res.localIds)
            },
            fail: function(fail) {
                reject()
            }
        });

    })
}


/**
 * 
 * @param {*} localId 
 * @param {*} that 
 */
export function wxUploadImage(localId) {
    return new Promise((reslove, reject) => {
        wx.uploadImage({
            localId: localId[0], // 需要上传的图片的本地ID，由chooseImage接口获得
            isShowProgressTips: 1, // 默认为1，显示进度提示
            success: function(res) {
                reslove(res.serverId)
            },
            fail: function(res) {
                reject()
            }
        });

    })
}