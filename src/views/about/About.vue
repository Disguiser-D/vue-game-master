<template>
  <div class="about">
    <vhead/>
    <headtow/>
    <div class="about_main" :style="{'background-image': 'url('+ gameData.bg + ')'}">
      <img class="icon" :src="icon">
      <div class="shop">
        <shopping/>
      </div>
    </div>
    <pro/>
    <vfoot/>
  </div>
</template>
<script>
import vhead from '../../components/myHeader/myhead.vue'
import headtow from '../../components/headTow/headTow.vue'
import vfoot from '@/components/footer/footer.vue'
import pro from './Product_info.vue'
import shopping from './shopping.vue'
import {shopInfo} from "@/api";
import axios from "axios";

export default {
  name: 'About',
  data() {
    return {
      icon: '//product.cnc.blzstatic.cn//38/6047efb1e206229a2fd4c7ce8d428229-sc2-wol-cn-1000.png',
      bgimg: null,
      gameData: {
        bg: "",
        discount: 0,
        icon: "",
        newPrice: 0,
        oldPrice: 0,
        text: "",
        white: "",
      }
    }
  },
  created() {
    this._getShopInfo(this.$route.query.shop_id)
  },
  methods: {
    _getShopInfo(shop_id) {
      axios.get(shopInfo + shop_id)
          .then((res) => {
            console.log(res.data.data)
            // props.gameData.bg = res.data.data.bg;
            // props.gameData.discount = res.data.data.discount;
            // props.gameData.icon = res.data.data.icon;
            // props.gameData.newPrice = res.data.data.newPrice;
            // props.gameData.oldPrice = res.data.data.oldPrice;
            // props.gameData.text = res.data.data.text;
            // props.gameData.white = res.data.data.white;
            // console.log(this.gameData.bg)
            this.$set(this.gameData, "bg", res.data.data.bg);
            this.$set(this.gameData, "discount", res.data.data.discount);
            this.$set(this.gameData, "icon", res.data.data.icon);
            this.$set(this.gameData, "newPrice", res.data.data.newPrice);
            this.$set(this.gameData, "oldPrice", res.data.data.oldPrice);
            this.$set(this.gameData, "text", res.data.data.text);
            this.$set(this.gameData, "white", res.data.data.white);
          }).catch(function (error) {
        console.log(error)
        alert("请求失败")
      })
    }
  },
  components: {
    vhead,
    headtow,
    shopping,
    pro,
    vfoot
  },
}
</script>
<style scoped>
.about {
  background-color: #002650;
}


.about_main {
//background-image: url('//product.cnc.blzstatic.cn//faa/1397797ed56f90239996e6417b94d8c2-prod-full-bg-headerless.jpg'); transform: translate3d(0px, 0px, 0px); position: relative; box-shadow: inset 0 -30px 60px rgba(0, 0, 0, .3);
  width: 100%;
  height: 600px;
  display: block;
}

.about_main .shop {
  position: absolute;
  right: 190px;
  top: 290px;
}

.about_main .icon {
  position: absolute;
  height: 160px;
  width: 250px;
  top: 100px;
  right: 265px;
}

.el-tabs__nav {
  margin-left: 15px;
}
</style>
