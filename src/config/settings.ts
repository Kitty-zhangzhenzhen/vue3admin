/**
 * 站点配置
 * @author LiQingSong
 */
export interface SettingsType {
    /**
     * 站点名称
     */
    siteTitle: string;
  
    /**
     * 顶部菜单开启
     */
    topNavEnable: boolean;
  
    /**
     * 头部固定开启
     */
    headFixed: boolean;
  
    /**
     * 站点本地存储Token 的 Key值
     */
    siteTokenKey: string;
  
    /**
     * Ajax请求头发送Token 的 Key值
     */
    ajaxHeadersTokenKey: string;
  
    /**
     * Ajax返回值不参加统一验证的api地址
     */
    ajaxResponseNoVerifyUrl: string[];

    /**
     * iconfont.cn 项目在线生成的 js 地址
     */
    iconfontUrl: string[];
}
// @font-face {
//     font-family: 'iconfont';  /* Project id 2651199 */
//     src: url('//at.alicdn.com/t/font_2651199_fq4705nnpha.woff2?t=1625456624383') format('woff2'),
//          url('//at.alicdn.com/t/font_2651199_fq4705nnpha.woff?t=1625456624383') format('woff'),
//          url('//at.alicdn.com/t/font_2651199_fq4705nnpha.ttf?t=1625456624383') format('truetype');
//   }

const settings: SettingsType = {
    siteTitle: 'ADMIN-ANTD-VUE',
    topNavEnable: true,
    headFixed: true,
    siteTokenKey: 'admin_antd_vue_token',
    ajaxHeadersTokenKey: 'x-token',
    ajaxResponseNoVerifyUrl: [
        '/user/login', // 用户登录
        '/user/info', // 获取用户信息
    ],
    iconfontUrl: ['//at.alicdn.com/t/font_2651199_vzxktcvkx8.js'],
};

export default settings;
  