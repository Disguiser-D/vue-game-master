<template>
    <div class="shopping">
        <div class="shopping-header">
            <div class="c-wrapper">
                <img src="//shopbnet.cnc.blzstatic.cn/static/7.3.9/images/family-icons/starcraft-ii.svg" width="60" height="60">
                <div class="text-wrapper">
                    <h1>{{ gameData.text }} </h1>
                    <p>{{ gameData.white }}</p>
                </div>
            </div>
        </div>
        <div class="shopping-main">
          <div>
          <p class="price border-s" v-if="is_discount(gameData.newPrice)">标准版 {{ gameData.oldPrice === 0 ? "免费" : "￥" + gameData.oldPrice }}</p>
          <div class="priceDiscount border-s" v-else><div class="version">标准版 </div><del class="price">{{  "￥" + gameData.oldPrice }}</del>
            {{  "￥" + gameData.newPrice }}
            <div class="meka-price-label--discount-label">-{{  100-gameData.discount*100 }}%</div></div>
          </div>
          <el-button class="short">{{ gameData.oldPrice === 0 ? '免费游戏':'立即购买' }}</el-button>
            <div class="shopping-p">
                <game-icon :size=4 :type=2></game-icon>
                <h1>添加至心愿单</h1>
            </div>
        </div>
    </div>
</template>

<script>
import GameIcon from "@/components/GameIcon/GameIcon"
import axios from "axios";
import {shopInfo} from "@/api";

export default {
  name:'shopping',
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
  components: {
    GameIcon
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
    },
    is_discount(newPrice){
      // console.log(this.item);
      return newPrice === 0;
    },
  },
}
</script>

<style>
    .shopping {
        border-top: 1px solid #585757;
        width: 500px;
        height: 293px;
        background: linear-gradient(to bottom,#272e3b,#1c2534);
        position: relative;
        left: 50px;
        top: 50px;
    }
    .shopping-header {
        border-bottom: 1px solid rgba(0,0,0,.3);
        width: 500px;
        height: 101px;
    }
    .c-wrapper {
        position: absolute;
        left: 30px;
        top: 18px;
    }
    .text-wrapper {
        display: inline-block;
        color: white;
        margin-left: 10px;
    }
    .text-wrapper h1 {
        font-family: inherit;
        font-size: 24px;
        height: 10px;
        font-weight: 500;
    }
    .text-wrapper p {
        color: rgba(255, 255, 255, 0.8);
        margin-left: 5px;
        margin-top: 5px;
        font-family: "Open Sans",Helvetica,Arial,sans-serif;
        font-size: 14px;
    }
    .shopping-main .el-button {
        width: 456px;
        height: 61px;
        display: block;
        border-radius: 0;
        margin: 35px auto;
        background-color: #0e86ca;
        border-color: #10a1de;
        font-size: 1.25rem;
        color: white;
    }
    .shopping-main .el-button:hover {
        background-color: #119ef3;
    }
    .shopping-p{
        text-align: center;
    }
    .shopping-p h1 {
        display: inline-block;
        color: #00aeff;
        font-size: 1.125rem;
        transition: all 0.3s;
        cursor:pointer;
        font-weight: 500;
    }
    .shopping-p h1:hover {
        color: white;
    }
    .shopping-main .price {
      align-items: center;
    //display: flex;
      flex-flow: wrap;
      justify-content: space-between;
    font-size: 20px;
      color: white;
    //display: inline-block;
    //position: absolute;
    //top: 165px;
    }
    .shopping-main .border-s {
      border-style: solid;
      border-color: #235ed0;
      border-width: 2px;
    }
    .shopping-main .version {
      //align-items: center;
    //display: flex;
      margin: 10px;
      bottom: 10px;
      padding: 0;
      flex-flow: wrap;
      justify-content: space-between;
      font-size: 20px;
      color: white;
    display: inline-block;
    //position: absolute;
    //top: 165px;
    }
    .shopping-main .priceDiscount {
      color: #6cdb00;
      font-size: 30px;
      //border-bottom-color: #6cdb00;
    //padding-right: 100px;
    //float: right;
    //display: inline-block;
    }
    .shopping-main .meka-price-label--discount-label {
      background-color: #6cdb00;
      border-radius: 5px;
      color: black;
      display: inline-block;
      margin-left: 1px;
      padding: 1px 1px;
      white-space: nowrap;
      float: right;
      font-size: 30px;
    //display: inline-block;
    }
    .shopping-main .short{
      align-content: center;
      margin: 23px;
      border-radius: 13px;
      //float: top;
      //bottom: 20px;
      //padding: 20px;
    }
</style>
