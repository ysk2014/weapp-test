Page({
    data: {
        current: 'all',
        navbars: {
            all: [
                ['市场推广', '餐厅服务', '店员团购', '才艺技能', '物流仓储'],
                ['展会演出', '家教培训', '客服话务', '文员助理', '其他']
            ]
        }
    },
    handleChange({ detail }) {
        wx.showLoading({
            title: '加载中'
        });
        this.setData({
            current: detail.key
        });
    }
});
