// 登录相关的接口模拟
// 登录接口
let urlQ = 'http://localhost:8081'
export function getProductList() {
    return {
        url: urlQ + '/product/getProductList',
        type: 'post',
        data: {
            code: 200,
            msg: null,
            data: {
                productList: [
                    {
                        imageScale: 50,
                        path: null,
                        productId: 40135,
                        productImageUrl: "https://cdn-opimage.qiumeiapp.com/vipXcx/act20210603/525_03.jpg"
                    },
                    {
                        imageScale: 50,
                        path: null,
                        productId: 40079,
                        productImageUrl: "https://cdn-opimage.qiumeiapp.com/vipXcx/act20210603/525_04.jpg"
                    },
                    {
                        imageScale: 50,
                        path: null,
                        productId: 40045,
                        productImageUrl: "https://cdn-opimage.qiumeiapp.com/vipXcx/act20210603/525_05.jpg"
                    },
                    {
                        imageScale: 50,
                        path: null,
                        productId: 40081,
                        productImageUrl: "https://cdn-opimage.qiumeiapp.com/vipXcx/act20210603/525_06.jpg"
                    },
                    {
                        imageScale: 50,
                        path: null,
                        productId: 42248,
                        productImageUrl: "https://cdn-opimage.qiumeiapp.com/vipXcx/act20210603/525_07.jpg"
                    },
                    {
                        imageScale: 50,
                        path: null,
                        productId: 40027,
                        productImageUrl: "https://cdn-opimage.qiumeiapp.com/vipXcx/act20210603/525_08.jpg"
                    }
                ]
            }
        }
    }
}

export function getCategoryList() {
    return {
        url: urlQ + '/product/getCategoryList',
        type: 'post',
        data: {
            code: 200,
            msg: null,
            data: {
                categoryList:
                    [{
                        "categoryImageUrl": "https://yimei-res.qiumeiapp.com/ymNew/ymBanner/aH6pAAKXR04Pm3Y5CpWniNxP4Qj6h1G0.jpg", "subCategoryList": [{ "productIdList": "40001,40002,40003,40004,40005,40006,40007,40008,40028,40029,40034,40077,40085,40037,40038,40039,40040,40132,40157,40158", "categoryImageUrl": "http://yimei-res.qiumeiapp.com/ymNew/ymCategory/category1_01.png", "categoryName": "舒敏保湿系列", "categoryId": 40006, "categoryDescription": null }, { "productIdList": "40041,40042,40043,40044,40045,40046,40048,40049,40050,40143,40144", "categoryImageUrl": "http://yimei-res.qiumeiapp.com/ymNew/ymCategory/category1_02.png", "categoryName": "极润保湿系列", "categoryId": 40007, "categoryDescription": null }, { "productIdList": "40015,40016,40017,40018,40155,40156", "categoryImageUrl": "http://yimei-res.qiumeiapp.com/ymNew/ymCategory/category1_03.png", "categoryName": "舒缓控油系列", "categoryId": 40008, "categoryDescription": null }, { "productIdList": "40036,40075,40076,40133,40134,40137,40138,42246,42245", "categoryImageUrl": "http://yimei-res.qiumeiapp.com/ymNew/ymCategory/category1_04.png", "categoryName": "舒敏修红系列", "categoryId": 40009, "categoryDescription": null }, { "productIdList": "40019,40020,40061,40062,40063", "categoryImageUrl": "http://yimei-res.qiumeiapp.com/ymNew/ymCategory/category1_05.png", "categoryName": "美白保湿系列", "categoryId": 40010, "categoryDescription": null },
                        { "productIdList": "40033,40064,40088,40051,40052,40053,40054,40065,40084,40149,40150", "categoryImageUrl": "http://yimei-res.qiumeiapp.com/ymNew/ymCategory/category1_06.png", "categoryName": "净痘系列", "categoryId": 40011, "categoryDescription": null }, { "productIdList": "40009,40010,40030,40031,40080,40032", "categoryImageUrl": "http://yimei-res.qiumeiapp.com/ymNew/ymCategory/category1_07.png", "categoryName": "柔润系列", "categoryId": 40012, "categoryDescription": null }, { "productIdList": "40012,40079,40130,40131,40159,40160,40161,41929,42494,42493", "categoryImageUrl": "http://yimei-res.qiumeiapp.com/ymNew/ymCategory/category1_08.png", "categoryName": "防晒系列", "categoryId": 40013, "categoryDescription": null }, { "productIdList": "40022,40023,40024,40025,40026,40027,40145,40146,41213,42514", "categoryImageUrl": "http://yimei-res.qiumeiapp.com/ymNew/ymCategory/category1_09.png", "categoryName": "光皙透白系列", "categoryId": 40014, "categoryDescription": null }, { "productIdList": "40021,40070,40071,40072,40073,40074,40139,40140,40141,40142,40147,40148", "categoryImageUrl": "http://yimei-res.qiumeiapp.com/ymNew/ymCategory/category1_10.png", "categoryName": "透明质酸系列", "categoryId": 40015, "categoryDescription": null }, { "productIdList": "40011,40055,40056,40057,40058,40059,40060,40135,40151,40152,41930,42377,42378", "categoryImageUrl": "http://yimei-res.qiumeiapp.com/ymNew/ymCategory/category1_11.png", "categoryName": "紧致系列", "categoryId": 40016, "categoryDescription": null }, { "productIdList": "40048,40068,40069,40067,40066,40078,40082,40083,40047,40153,40154", "categoryImageUrl": "http://yimei-res.qiumeiapp.com/ymNew/ymCategory/category1_12.png", "categoryName": "彩妆系列", "categoryId": 40017, "categoryDescription": null }, { "productIdList": "40035,40081", "categoryImageUrl": "http://yimei-res.qiumeiapp.com/ymNew/ymCategory/category1_13.png", "categoryName": "玻尿酸系列", "categoryId": 40018, "categoryDescription": null }, { "productIdList": "40086,40087,40088,40132,40136,40128,40129", "categoryImageUrl": "http://yimei-res.qiumeiapp.com/ymNew/ymCategory/category1_14.png", "categoryName": "套装礼盒", "categoryId": 40019, "categoryDescription": null }, { "productIdList": "40013,40014,41513,41514,41515,41516,41517,41518,41519,41520,41521,41522,42625", "categoryImageUrl": "http://yimei-res.qiumeiapp.com/ymNew/ymCategory/category1_15.png", "categoryName": "薇诺娜宝贝", "categoryId": 40020, "categoryDescription": null }], "categoryName": "产品系列", "categoryId": 40001, "categoryDescription": null
                    }, { "categoryImageUrl": "https://yimei-res.qiumeiapp.com/ymNew/ymBanner/935MjjYQZ8Di0EstxCB39fhhyN0xHzpW.jpg", "subCategoryList": [{ "productIdList": "40001,40015,40016,40026,40041,40051,40056,40062,40071,40072,40132,40134,40136", "categoryImageUrl": "http://yimei-res.qiumeiapp.com/ymNew/ymCategory/category2_01.png", "categoryName": "洁面", "categoryId": 40021, "categoryDescription": null }, { "productIdList": "40002,40003,40017,40027,40042,40052,40057,40059,40063,40073,40076,40132,40137,40138,40139,40140,40136", "categoryImageUrl": "http://yimei-res.qiumeiapp.com/ymNew/ymCategory/category2_02.png", "categoryName": "爽肤水", "categoryId": 40022, "categoryDescription": null }, { "productIdList": "40020,40022,40025,40034,40035,40050,40033,40055,40064,40077,40085,40135,40084,40152", "categoryImageUrl": "http://yimei-res.qiumeiapp.com/ymNew/ymCategory/category2_03.png", "categoryName": "精华", "categoryId": 40023, "categoryDescription": null }, { "productIdList": "40004,40005,40006,40007,40009,40010,40013,40014,40019,40023,40024,40030,40036,40043,40044,40067,40074,40078,40053,40054,40018,40031,40032,40132,40133,40143,40144,40136,40145,40147,40148,40149,40150,40151,40152,40155,40156,40161", "categoryImageUrl": "http://yimei-res.qiumeiapp.com/ymNew/ymCategory/category2_04.png", "categoryName": "乳液/面霜", "categoryId": 40024, "categoryDescription": null }, { "productIdList": "40008,40021,40045,40046,40049,40058,40060,40061,40070,40075,40081,40141,40142,40146", "categoryImageUrl": "http://yimei-res.qiumeiapp.com/ymNew/ymCategory/category2_05.png", "categoryName": "面膜", "categoryId": 40025, "categoryDescription": null }, { "productIdList": "40012,40079,40130,40131,40159,40160", "categoryImageUrl": "http://yimei-res.qiumeiapp.com/ymNew/ymCategory/category2_06.png", "categoryName": "防晒", "categoryId": 40026, "categoryDescription": null }, { "productIdList": "40028,40029,40039,40040,40037,40038,40157,40158", "categoryImageUrl": "http://yimei-res.qiumeiapp.com/ymNew/ymCategory/category2_07.png", "categoryName": "喷雾", "categoryId": 40027, "categoryDescription": null }, { "productIdList": "40048,40068,40069,40067,40066,40078,40082,40083,40047,40145,40153,40154", "categoryImageUrl": "http://yimei-res.qiumeiapp.com/ymNew/ymCategory/category2_08.png", "categoryName": "彩妆", "categoryId": 40028, "categoryDescription": null }, { "productIdList": "40011", "categoryImageUrl": "http://yimei-res.qiumeiapp.com/ymNew/ymCategory/category2_09.png", "categoryName": "眼部护理", "categoryId": 40029, "categoryDescription": null }, { "productIdList": "40080", "categoryImageUrl": "http://yimei-res.qiumeiapp.com/ymNew/ymCategory/category2_10.png", "categoryName": "唇部护理", "categoryId": 40030, "categoryDescription": null }], "categoryName": "护肤步骤", "categoryId": 40002, "categoryDescription": null }, { "categoryImageUrl": "https://yimei-res.qiumeiapp.com/ymNew/ymBanner/Cwe1sEBRNhSBnX8JZ3RKYE5p3exzM8RP.jpg", "subCategoryList": [{ "productIdList": "40001,40002,40003,40004,40005,40006,40007,40008,40028,40029,40034,40036,40075,40076,40077,40085,40037,40038,40039,40040,40130,40131,40132,40133,40134,40137,40138,40139,40140,40141,40142,40147,40148,40157,40158,40159,40160", "categoryImageUrl": "http://yimei-res.qiumeiapp.com/ymNew/ymCategory/category3_01.png", "categoryName": "敏感肌肤", "categoryId": 40031, "categoryDescription": null }, { "productIdList": "40041,40042,40043,40044,40045,40046,40048,40049,40050,40009,40010,40030,40031,40080,40032,40021,40070,40071,40072,40073,40074,40035,40081,40130,40131,40138,40139,40140,40141,40142,40143,40144,40047,40147,40148,40157,40158,40159,40160", "categoryImageUrl": "http://yimei-res.qiumeiapp.com/ymNew/ymCategory/category3_02.png", "categoryName": "干性肌肤", "categoryId": 40032, "categoryDescription": null }, { "productIdList": "40015,40016,40017,40018,40033,40064,40088,40051,40052,40053,40054,40065,40130,40131,40084,40140,40141,40142,40136,40149,40150,40155,40156,40159,40160,40161", "categoryImageUrl": "http://yimei-res.qiumeiapp.com/ymNew/ymCategory/category3_03.png", "categoryName": "油痘肌肤", "categoryId": 40033, "categoryDescription": null }, { "productIdList": "40019,40020,40061,40062,40063,40022,40023,40024,40025,40026,40027,40048,40068,40069,40067,40066,40078,40082,40083,40130,40131,40141,40142,40143,40144,40047,40145,40146,40153,40154,40159,40160", "categoryImageUrl": "http://yimei-res.qiumeiapp.com/ymNew/ymCategory/category3_04.png", "categoryName": "暗沉肌肤", "categoryId": 40034, "categoryDescription": null }, { "productIdList": "40011,40055,40056,40057,40058,40059,40060,40130,40131,40135,40141,40142,40151,40152,40159,40160", "categoryImageUrl": "http://yimei-res.qiumeiapp.com/ymNew/ymCategory/category3_05.png", "categoryName": "老化肌肤", "categoryId": 40035, "categoryDescription": null }], "categoryName": "肤质类型", "categoryId": 40003, "categoryDescription": null }, { "categoryImageUrl": "https://yimei-res.qiumeiapp.com/ymNew/ymBanner/1wQKeeMHYpxfFezN6d4h652a9xcKJzB2.jpg", "subCategoryList": [{ "productIdList": "40001,40002,40003,40004,40005,40006,40007,40008,40028,40029,40034,40036,40075,40076,40077,40085,40037,40038,40039,40040,40130,40131,40132,40133,40134,40137,40138,40139,40140,40141,40142,40147,40148,40157,40158,40159,40160", "categoryImageUrl": "http://yimei-res.qiumeiapp.com/ymNew/ymCategory/category4_01.png", "categoryName": "敏感", "categoryId": 40036, "categoryDescription": null }, { "productIdList": "40041,40042,40043,40044,40045,40046,40048,40049,40050,40009,40010,40030,40031,40080,40032,40021,40070,40071,40072,40073,40074,40035,40081,40130,40131,40137,40138,40139,40140,40141,40142,40143,40144,40047,40147,40148,40157,40158,40159,40160", "categoryImageUrl": "http://yimei-res.qiumeiapp.com/ymNew/ymCategory/category4_02.png", "categoryName": "缺水干燥", "categoryId": 40037, "categoryDescription": null }, { "productIdList": "40036,40075,40076,40130,40131,40133,40134,40137,40138,40139,40140,40141,40142,40159,40160", "categoryImageUrl": "http://yimei-res.qiumeiapp.com/ymNew/ymCategory/category4_03.png", "categoryName": "红血丝", "categoryId": 40038, "categoryDescription": null }, { "productIdList": "40019,40020,40061,40062,40063,40022,40023,40024,40025,40026,40027,40130,40131,40139,40140,40141,40142,40143,40144,40145,40146,40153,40154,40159,40160", "categoryImageUrl": "http://yimei-res.qiumeiapp.com/ymNew/ymCategory/category4_04.png", "categoryName": "暗沉色斑", "categoryId": 40039, "categoryDescription": null }, { "productIdList": "40015,40016,40017,40018,40033,40064,40088,40051,40052,40053,40054,40065,40130,40131,40139,40084,40140,40141,40142,40136,40149,40150,40155,40156,40159,40160,40161", "categoryImageUrl": "http://yimei-res.qiumeiapp.com/ymNew/ymCategory/category4_05.png", "categoryName": "出油/痘痘", "categoryId": 40040, "categoryDescription": null }, { "productIdList": "40059,40060,40130,40131,40139,40140,40141,40142,40159,40160", "categoryImageUrl": "http://yimei-res.qiumeiapp.com/ymNew/ymCategory/category4_06.jpg", "categoryName": "毛孔粗大", "categoryId": 40041, "categoryDescription": null }, { "productIdList": "40011,40055,40056,40057,40058,40130,40131,40135,40139,40140,40141,40142,40151,40152,40159,40160", "categoryImageUrl": "http://yimei-res.qiumeiapp.com/ymNew/ymCategory/category4_07.png", "categoryName": "松弛衰老", "categoryId": 40042, "categoryDescription": null }, { "productIdList": "40012,40079,40130,40131,40159,40160", "categoryImageUrl": "http://yimei-res.qiumeiapp.com/ymNew/ymCategory/category4_08.png", "categoryName": "防晒", "categoryId": 40043, "categoryDescription": null }, { "productIdList": "40030,40009,40010", "categoryImageUrl": "http://yimei-res.qiumeiapp.com/ymNew/ymCategory/category4_09.png", "categoryName": "身体干痒", "categoryId": 40044, "categoryDescription": null }, { "productIdList": "40031,40032", "categoryImageUrl": "http://yimei-res.qiumeiapp.com/ymNew/ymCategory/category4_10.png", "categoryName": "手部干燥", "categoryId": 40045, "categoryDescription": null }, { "productIdList": "40080", "categoryImageUrl": "http://yimei-res.qiumeiapp.com/ymNew/ymCategory/category4_11.png", "categoryName": "唇部干燥", "categoryId": 40046, "categoryDescription": null }], "categoryName": "肌肤问题", "categoryId": 40004, "categoryDescription": null }, { "categoryImageUrl": "https://yimei-res.qiumeiapp.com/ymNew/ymBanner/kHRPeNcBWT3Jh64isfEAZXrADBJbWb7F.jpg", "subCategoryList": [{ "productIdList": "42494,42493", "categoryImageUrl": "https://res.qiumeiapp.com/xcx/proImageshTxZDHsxnj.jpg", "categoryName": "新品防晒喷雾", "categoryId": 40105, "categoryDescription": null }, { "productIdList": "42227,42228,42229,42230,42231,42232", "categoryImageUrl": "https://res.qiumeiapp.com/xcx/proImages6A2xmWxJAG.jpg", "categoryName": "男士系列", "categoryId": 40102, "categoryDescription": null }, { "productIdList": "40013,40014,41513,41514,41515,41516,41517,41518,41519,41520,41521,41522", "categoryImageUrl": "http://yimei-res.qiumeiapp.com/ymNew/ymCategory/category5_01.png", "categoryName": "薇诺娜宝贝", "categoryId": 40047, "categoryDescription": null }, { "productIdList": "40022,40023,40024,40025,40026,40027,40145,40146,42514", "categoryImageUrl": "http://yimei-res.qiumeiapp.com/ymNew/ymCategory/category5_02.png", "categoryName": "光皙透白系列", "categoryId": 40048, "categoryDescription": null }, { "productIdList": "40035,40081", "categoryImageUrl": "http://yimei-res.qiumeiapp.com/ymNew/ymCategory/category5_03.png", "categoryName": "玻尿酸系列", "categoryId": 40049, "categoryDescription": null }, { "productIdList": "41169,41170,42248,42247,42376,42375", "categoryImageUrl": "https://res.qiumeiapp.com/xcx/proImagesKX7PwyJtK4.jpg", "categoryName": "安心系列", "categoryId": 40059, "categoryDescription": null }, { "productIdList": "42424,42422,42420,42418,42416,42414", "categoryImageUrl": "https://res.qiumeiapp.com/xcx/proImagesCeJS4SrTEd.jpg", "categoryName": "痘痘康系列", "categoryId": 40104, "categoryDescription": null }], "categoryName": "新品上市", "categoryId": 40005, "categoryDescription": null }]

            }
        }
    }
}

export function getShoppingCartProductList() {
    return {
        url: urlQ + '/product/getShoppingCartProductList',
        type: 'post',
        data: {
            code: 200,
            msg: null,
            data: {
                productList:[
                    {
                        imageScale: 50,
                        path: null,
                        productId: 40135,
                        productImageUrl: "https://cdn-opimage.qiumeiapp.com/vipXcx/act20210603/525_03.jpg"
                    }
                ]
            }
        }
    }
}
