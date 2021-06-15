import request from '@/utils/request';

export async function getProduct(): Promise<any> {
    return request({
        url: '/product/getShopCart',
        method: 'POST'
    });
}