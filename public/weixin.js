//js_appid timestamp nonceStr signature 由微信安全分享域名提供
//例如 <script src="http://wxmarsjpqd91c9.esmartwave.com/Wxshare.aspx"></script>
//分享域名 需与项目 域名匹配  详细参考  https://shimo.im/sheets/4HkBNYcKs6IRUXM8/
var js_appid, timestamp, nonceStr, signature;
wx.config({
    debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    appId: js_appid, // 必填，公众号的唯一标识
    timestamp: timestamp, // 必填，生成签名的时间戳
    nonceStr: nonceStr, // 必填，生成签名的随机串
    signature: signature, // 必填，签名，见附录1
    jsApiList: ["updateTimelineShareData", "updateAppMessageShareData", "onMenuShareQQ", "onMenuShareWeibo", "startRecord", "stopRecord", "onVoiceRecordEnd", "playVoice", "pauseVoice", "stopVoice", "onVoicePlayEnd", "uploadVoice", "downloadVoice", "chooseImage", "previewImage", "uploadImage", "downloadImage", "translateVoice", "getNetworkType", "openLocation", "getLocation", "hideOptionMenu", "showOptionMenu", "hideMenuItems", "showMenuItems", "hideAllNonBaseMenuItem", "showAllNonBaseMenuItem", "closeWindow", "scanQRCode", "chooseWXPay", "openProductSpecificView", "addCard", "chooseCard", "openCard"], // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
    openTagList: ['wx-open-launch-app', 'wx-open-launch-weapp']
});




wx.ready(function() {

});


wx.error(function(res) {
    // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
    // console.log(res);
});