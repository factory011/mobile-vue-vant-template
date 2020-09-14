<template>
  <div class="about">
    <van-address-edit :area-list="areaList"
                      show-postal
                      show-delete
                      show-set-default
                      show-search-result
                      :search-result="searchResult"
                      @save="onSave"
                      @delete="onDelete"
                      @change-detail="onChangeDetail" />
    <van-goods-action>
      <van-goods-action-icon icon="chat-o"
                             text="客服" />
      <van-goods-action-icon icon="cart-o"
                             text="购物车"
                             info="5" />
      <van-goods-action-icon icon="shop-o"
                             text="店铺"
                             info="12" />
      <van-goods-action-button type="warning"
                               text="加入购物车" />
      <van-goods-action-button type="danger"
                               text="立即购买" />
    </van-goods-action>
  </div>
</template>

<script>

export default {
  data () {
    return {
      areaList: {
        province_list: {
          110000: '北京市',
          120000: '天津市',
          130000: '武汉市'
        },
        city_list: {
          110100: '北京市',
          120100: '天津市',
          130100: '武汉市'
        },
        county_list: {
          110101: '东城区',
          110102: '西城区',
          110105: '朝阳区',
          110106: '丰台区',
          130102: '武昌区',
          130105: '汉阳区',
          130106: '江汉区'
        }
      },
      searchResult: []
    }
  },
  methods: {
    onSave () {
      alert('save')
    },

    onDelete () {
      alert('delete')
    },

    onChangeDetail (val) {
      if (val) {
        this.searchResult = [{
          name: '黄龙万科中心',
          address: '杭州市西湖区'
        }]
      } else {
        this.searchResult = []
      }
    },

    onClickIcon () {
      alert('点击图标')
    },

    onClickButton () {
      alert('点击按钮')
    }
  }
}
</script>
