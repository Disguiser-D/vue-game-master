<template>
  <div class="unity">
    <!--TODO: 这里是商品列表加载    -->
        <div @click="shop_info(item.jump)">
    <div class="game"
         :style="{backgroundImage: `url( ${item.bgImgUrl} )`}"
    >
      <div class="conten-wrapper">
        <game-icon class="game-icon"
                   :size=2
                   :type="item.iconType >= 0?item.iconType:9"></game-icon>
        <p class="text">{{ item.text }}</p>
        <p class="text-Golden">{{ item.golden }}</p>
        <p class="text-white">{{ item.white }}</p>
        <p class="price" v-if="is_discount(item.newPrice)">{{ item.oldPrice === 0 ? "免费" : "￥" + item.oldPrice }}</p>
        <div class="priceDiscount" v-else><del class="price">{{  "￥" + item.oldPrice }}</del>
         {{  "￥" + item.newPrice }}
          <div class="meka-price-label--discount-label">-{{  100-item.discount*100 }}%</div></div>
      </div>
    </div>
  </div>
    </div>
</template>

<script>
import GameIcon from '@/components/GameIcon/GameIcon'
import axios from "axios";
import {shopInfo} from "@/api";

export default {
  name: 'unity',
  props: {
    item: {}
  },
  components: {
    GameIcon
  },
  methods: {
    shop_info(shop_id) {
      this.$router.push({path:"/about",query:{ shop_id:shop_id }})
    },
    is_discount(newprice){
      // console.log(this.item);
      return newprice === 0;
    }
  }
}
</script>

<style scoped>
.game {
  height: 414px;
  width: 288px;
  margin-top: 15px;
  position: relative;
  z-index: 10;
  background-repeat: no-repeat;
  background-size: 320px 414px;
  transition: all 0.3s;
  cursor: pointer;
}

.game:hover {
  transform: scale(1.05);
}

.conten-wrapper {
  top: 210px;
  position: absolute;
  text-align: left;
  padding: 20px;
}

.conten-wrapper .text {
  font-weight: 700;
  font-size: 18px;
  color: white;
  margin-bottom: 6px;
}

.conten-wrapper .text-Golden {
  color: #fecc00;
  font-size: 14px;
  margin-bottom: 6px;
}

.conten-wrapper .text-white {
  color: #bfbfbf;
  font-size: 14px;
  margin-bottom: 6px;
}

.conten-wrapper .price {
  align-items: center;
  //display: flex;
  flex-flow: wrap;
  justify-content: space-between;
  //font-size: 16px;
  color: white;
  //display: inline-block;
  //position: absolute;
  //top: 165px;
}
.conten-wrapper .priceDiscount {
  color: #6cdb00;
  //padding-right: 100px;
  //float: right;
  //display: inline-block;
}
.conten-wrapper .meka-price-label--discount-label {
  background-color: #6cdb00;
  border-radius: 5px;
  color: black;
  display: inline-block;
  margin-left: 1px;
  padding: 1px 1px;
  white-space: nowrap;
  float: right;
  font-size: 14px;
  //display: inline-block;
}
</style>
