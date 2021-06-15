import request from '@/utils/request';

export async function getCategory(): Promise<any> {
    return request({
        url: '/product/getCategory',
        method: 'POST'
    });
}