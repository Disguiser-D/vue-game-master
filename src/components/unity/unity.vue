<template>
  <div class="unity">
  <!--TODO: 这里是商品列表加载    -->
<!--    <div @click="shop_info(item)">-->
      <div class="game"
           :style="{backgroundImage: `url( ${item.bgImgUrl} )`}"
      >
        <div class="conten-wrapper">
          <game-icon class="game-icon"
                     :size=2
                     :type="item.iconType >= 0?item.iconType:9"></game-icon>
          <p class="text">{{ item.text }}</p>
          <p class="text-Golden">{{ item.Golden }}</p>
          <p class="text-white">{{ item.white }}</p>
          <p class="price">{{ item.price === 0 ? "免费" : "￥" + item.price }}</p>
        </div>
      </div>
    </div>
<!--  </div>-->
</template>

<script>
import GameIcon from '@/components/GameIcon/GameIcon'
import axios from "axios";

export default {
  name: 'unity',
  props: {
    item: {}
  },
  components: {
    GameIcon
  },
  methods: {
    shop_info(item){
      // console.log(item.text)
      axios
          .get("/api/")
          .then(response => {console.log(response)})
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
  font-size: 16px;
  color: white;
  position: absolute;
  top: 165px;
}
</style>
