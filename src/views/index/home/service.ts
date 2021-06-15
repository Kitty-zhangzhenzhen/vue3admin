import request from '@/utils/request';

export async function getProduct(): Promise<any> {
    return request({
        url: '/product/getProduct',
        method: 'POST'
    });
}