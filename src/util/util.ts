
import Toast from 'vant/lib/toast';
import Picker from 'vant/lib/picker';
import Dialog from 'vant/lib/dialog';
import Loading from 'vant/lib/loading';
//获取路径中的参数
export function getParamsBydecodeURI(name:string) {
    let result = (window.location.search+window.location.hash).match(new RegExp("[\?\&]" + name + "=([^\&]+)", "i"));
    if (result == null || result.length < 1) {
        return "";
    }
    return result[1];
}

export function $toast(message:string='loading',duration:number=3000) {
    Toast({
        message,
        forbidClick:true,
        duration
   })
}
export function $loading(message:string='loading',duration:number=3000) {
    Toast({
        message,
        forbidClick:true,
        duration
   })
}
