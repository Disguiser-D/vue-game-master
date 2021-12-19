<template>
  <div class="w">
    <h1>账号概览</h1>

    <cardDiv text=使用兑换码
             :width="sort">
      <div>
        <el-input placeholder="XXXXXXX"></el-input>
        <el-button type="primary"
                   :style="{'margin-left':'50px'}">使用兑换码
        </el-button>
        <p class="text">输入代码以兑换游戏序列号、游戏时间、虚拟物品。如需兑换点卡，请访问兑换点卡页面</p>
      </div>
    </cardDiv>

    <cardDiv text=暴雪游戏点数
             :width="sort">
      <div class="money">0暴雪游戏点数</div>
    </cardDiv>

    <cardDiv text=您的信息
             :width="sort">
      <div v-for="(item,index) in comm"
           :key="index">
        <el-row>
          <el-col :span="8"><span class="commTitle">{{ item.title }}</span></el-col>
          <el-col :span="16"><span class="commComm">{{ item.comm }}</span></el-col>
        </el-row>
      </div>
    </cardDiv>

    <cardDiv class="safeDiv"
             text=安全检查
             :width="sort">
      <el-row>
        <el-col :span="5"><span class="safeIcon"><i class="el-icon-success"
                                                    width="50px"></i></span></el-col>
        <el-col :span="19"
                :style="{'margin-top':'7px'}"><span class="commComm">已验证电子邮箱</span></el-col>
      </el-row>
      <el-row>
        <el-col :span="5"><span class="safeIcon"><i class="el-icon-success"
                                                    width="50px"></i></span></el-col>
        <el-col :span="19"
                :style="{'margin-top':'7px'}"><span class="commComm">已验证电子邮箱</span></el-col>
      </el-row>
      <el-row>
        <el-col :span="5"><span class="safeIcon"><i class="el-icon-success"
                                                    width="50px"></i></span></el-col>
        <el-col :span="19"
                :style="{'margin-top':'7px'}"><span class="commComm">已验证电子邮箱</span></el-col>
      </el-row>
    </cardDiv>

    <cardDiv class="gameTime"
             text=充值&游戏时间
             :width="long">
      <div v-for="(item,index) in gameTimeComm"
           :key="index">
        <el-row>
          <el-col :span="4">
            <game-icon :type="item.type"
                       :size="item.size"></game-icon>
          </el-col>
          <el-col :span="10">
            <p class="p1">{{ item.title1 }}</p>
            <p class="p2">中国</p>
          </el-col>
          <el-col :span="10">
            <p class="p1">{{ item.title2 }}</p>
            <p class="p2">账号状态</p>
          </el-col>
        </el-row>
        <br/><br/>
      </div>
    </cardDiv>

  </div>
</template>

<script>

import cardDiv from "./cardDiv"
import GameIcon from '@/components/GameIcon/GameIcon'
import axios from "axios";

export default {
  data() {

    return {
      sort: {width: '590px'},
      long: {width: '1210px'},
      user_name: [],
      comm: [
        {
          title: '姓名',
          comm: ''
        },
        {
          title: '战网昵称',
          comm: ''

        }, {
          title: '电子邮箱',
          comm: ''
        },
        {
          title: '手机',
          comm: ''
        },
        {
          title: '身份证号码',
          comm: ''
        }
      ],
      gameTimeComm: [{
        type: 1,
        size: 2,
        title1: "《魔兽世界》",
        title2: "新手试玩"
      },
        {
          type: 2,
          size: 2,
          title1: "《守望先锋》",
          title2: "永久游玩"
        }]
    }
  },
  methods: {
    structure(array) {
      // 将字符串转化成数组
      let arrBox = [...array];
      // 2.将数组中的4-7位变成*
      let str = '';
      //map() 方法返回一个新数组,数组中的元素为原始数组元素调用函数处理后的值
      arrBox.map((res, index) => {
        if (index > 3 && index < 11) {
          str += '*';
          // return '*';
        } else {
          str += res;
          // return res;
        }
      });
      return str;
    },
    get_user_info() {
      const url = '/api/user/get_info';
      axios.get(url).then((results) => {
        // console.log(results);
        this.comm[1].comm = results.data.data.username;
        this.comm[2].comm = results.data.data.email;
        this.comm[3].comm = results.data.data.phone;
        this.comm[4].comm = this.structure(results.data.data.identityId);
        this.comm[0].comm = results.data.data.name;
        // console.log(results);

      }).catch(
          function (error) {
            localStorage.removeItem("Authorization");
            console.log(error);
            alert('请求失败');
            // this.$router.push("/login");
          })
    }},
    mounted() {
      // 页面一加载完成就执行getList方法
      this.get_user_info();
    }
    ,
    props: {}
    ,
    components: {
      cardDiv,
      GameIcon
    },
  }
</script>

<style scoped>
.w {
  margin-left: 60px;
  width: 1240px;
  min-height: 500px;
}

.w ul {
  text-align: left !important;
}

.text {
  text-align: left;
  margin-top: 30px;
  font-size: 16px;
  color: #afb3bb;
}

.w h1 {
  font-size: 36px;
  padding-bottom: 30px;
  color: #fff;
  margin-left: 15px;
}

.gameTime .p1 {
  font-size: 18px;
  color: #fff;
}

.gameTime .p2 {
  font-size: 16px;
  color: #afb3bb;
}

.el-input {
  width: 300px;
}

.money {
  color: #70d929;
  font-size: 30px;
  margin: 36px 0px;
}

.commTitle {
  font-size: 14px;
  color: #afb3bb;
  overflow-wrap: normal;
  line-height: 36px;
}

.commComm {
  font-size: 16px;
  color: #fff;
  height: 100%;
  overflow-wrap: normal;
  line-height: 36px;
}

.safeIcon {
  font-size: 16px;
  color: #fff;
  overflow-wrap: normal;
  line-height: 36px;
}

.el-icon-success {
  color: lawngreen;
  font-size: 50px;
}

.safeDiv {
  height: 356px;
}
</style>

