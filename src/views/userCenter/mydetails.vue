<template>
  <div class="w">
    <h1>账号详情</h1>
    <cardDiv text=个人信息 :width="long">
      <el-row>
        <el-col class="detailTitle" :span="5">姓名</el-col>
        <el-col class="detailComm" :span="14">{{ system_name }}</el-col>
      </el-row>
      <el-row>
        <el-col class="detailTitle" :span="5">国家\地区</el-col>
        <el-col class="detailComm" :span="14">中国</el-col>
      </el-row>
    </cardDiv>
    <cardDiv text=电子邮箱 :width="long">
      <el-row>
        <el-col class="detailTitle" :span="5">电子邮箱</el-col>
        <el-col class="detailComm" :span="14">{{ email }}</el-col>
      </el-row>
    </cardDiv>
    <cardDiv text=手机号码 :width="long">
      <el-row>
        <el-col class="detailTitle" :span="5">手机号码</el-col>
        <el-col class="detailComm" :span="14">{{ mobile_phone }}</el-col>
      </el-row>
    </cardDiv>
    <cardDiv text=战网昵称 :width="long">
      <el-row>
        <el-col class="detailTitle" :span="5">战网昵称</el-col>
        <el-col class="detailComm" :span="14">{{ user_name }}</el-col>
      </el-row>
    </cardDiv>
  </div>
</template>

<script>

import cardDiv from "./cardDiv"
import {getUserInfo} from "@/api";

export default {
  data() {
    return {
      sort: {width: '590px'},
      long: {width: '1210px'},
      user_name: null,
      email: null,
      mobile_phone: null,
      identityId: null,
      system_name: null,
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
        if (index > 3 && index < 8) {
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
      getUserInfo().then((results) => {
        if (results.status !== 403) {
          // console.log(results.data);
          this.user_name = results.data.username;
          this.email = results.data.email;
          this.mobile_phone = results.data.phone;
          this.identityId = this.structure(results.data.identityId);
          this.system_name = results.data.name;
          // console.log(results);
        } else {
          localStorage.removeItem("Authorization");
          // console.log(results.data.name);
          this.$router.push("/login")
          alert('mydetails清空了token');
        }
      }).catch(
          function (error) {
            console.log(error);
            // localStorage.removeItem("Authorization");
            this.$router.push("/login")
            alert('请求失败');
          })
    }
  },
  mounted() {
    // 页面一加载完成就执行getList方法
    this.get_user_info();
  },
  components: {
    cardDiv,
  }
}
</script>

<style>
.w {
  margin-left: 60px;
  width: 1240px;
  min-height: 500px;
}

.w ul {
  text-align: left !important;
}

h1 {
  font-size: 36px;
  padding-bottom: 30px;
  color: #fff;
  margin-left: 15px;
}

.detailTitle {
  font-size: 14px;
  color: #afb3bb;
  overflow-wrap: normal;
  line-height: 36px;
}

.detailComm {
  font-size: 16px;
  color: #fff;
  height: 100%;
  overflow-wrap: normal;
  line-height: 36px;
}
</style>