npm<template>
  <div class="root">
    <div class="logo">
      <img src="../../assets/img/loginpage.png">
      <span>今日债券后台管理系统</span>
    </div>
    <div class="back">
      <div class="info">
        <div class="info-box">
          <div class="info-header">
            <span class="info-header-img"></span>
            <span>管理员登陆</span>
          </div>
          <div class="info-body">
            <div class="info-body-top">
              <img src="../../assets/img/account.png">
              <el-input v-model="userinfo.code" placeholder="请输入用户名"></el-input>
            </div>
            <div class="info-body-top">
              <img src="../../assets/img/pwd.png">
              <el-input
                v-model="userinfo.pwd"
                showpassword="true"
                case-insensitive="false"
                placeholder="请输入密码"
              ></el-input>
            </div>
            <div class="info-body-top1">
              <div style="width:80%;height:100%;display:inline-block;vertical-align: middle;">
                <img
                  style="width:30px;height:30px;vertical-align: middle;"
                  src="../../assets/img/secuity.png"
                >
                <el-input
                  style="width:80%;height:30px;border: 0;display:inline-block;"
                  v-model="userinfo.verifity"
                  placeholder="请输入验证码"
                ></el-input>
              </div>
              <div
                style="width:15%;height:40px;display:inline-block;vertical-align: middle;margin-bottom:30px; test-align:center; background-color:white;">
                <a style="text-decoration:none;" href="javascript:;" @click="changeCodeImg()">
                  <img style="font-size:10px" :src="codeImg" alt="加载失败">
                </a>
              </div>
            </div>
            <div class="info-body-top">
              <el-checkbox style="color:#ffffff" v-model="userinfo.isRember">下次记住我</el-checkbox>
            </div>
          </div>
          <div class="info-foot">
            <el-button type="primary" round>登陆</el-button>
            <p style="text-align:left;font-size:13px;color:#ffffff">版本:v1.0</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "login",
  created(){
    this.codeImg="url";
  },
  data() {
    return {
      userinfo: {
        code: "用户名",
        pwd: "密码",
        verifity: "验证码",
        isRember: true
      },
      isactive: true,
      inputverifity: "input-verifity",
      codeImg:''
    };
  },
  methods: {
    onFocus() {
      this.isactive = true;
      console.log(this.isactive);
      console.log("onFocus");
    },
    onBlur() {
      this.isactive = false;
      console.log(this.isactive);
      console.log("onBlur");
    },
    changeCodeImg:function(){
      var num=Math.ceil(Math.random()*10);
      this.codeImg='url?'+num;
    }
  }

};
</script>

<style>
.root {
  background-image: url(../../assets/img/root.jpg);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: fixed;
  margin: 0 auto;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
}
.back {
  position: absolute;
  left: 10%;
  top: 10%;
  width: 80%;
  height: 80%;
  background-image: url(../../assets/img/back.jpg);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.info {
  position: absolute;
  left: 60.39%;
  top: 10.62%;
  right: 10%;
  width: 33.08%;
  height: 78.74%;
  background-color: black;
  opacity: 0.7;
  /* background: rgba(0, 0, 0, 0.7); */
}
.logo {
  /* background-color: blueviolet; */
  width: 100%;
  height: 33px;
  /* left: 1.92%; */
  margin-top: 19px;
  margin-left: 25px;
  /* line-height: 33px; */
  text-align: left;
}
.logo > img {
  display: inline-block;
  width: 28px;
  height: 28px;
  vertical-align: middle;
}
.logo > span {
  display: inline-block;
  margin-left: 10px;
  font-size: 24px;
}
.info-box {
  background-color: #ffffff;
  position: absolute;
  left: 5.71%;
  top: 5%;
  right: 8.28%;
  bottom: 2.5%;
  background: rgba(0, 0, 0, 0.7);
}
.info-header {
  /* background-color: brown; */
  height: 20%;
  text-align: left;
  color: #ffffff;
  font-size: 30px;
  margin-top: 0;
}
.info-header-img {
  display: inline-block;
  width: 4px;
  height: 18px;
  border-radius: 2.5px;
  background-image: linear-gradient(170deg, #77beff, #428fff);
}
.info-body-top {
  height: 70px;
  text-align: left;
  vertical-align: middle;
}
.info-body-top > img {
  height: 30px;
  vertical-align: middle;
}
.info-body-top > el-input {
  height: 30px;
  float: left;
  font-size: 16px;
}
.info-body-top1 {
  height: 70px;
  text-align: left;
  vertical-align: middle;
  /* background-color: green; */
}
.info-body-top1 > img {
  height: 30px;
  vertical-align: middle;
}
.el-input {
  width: 80%;
  border: 0;
  font-size: 16px;
}
.el-input__inner {
  border: 0;
  border-bottom: 1px solid dimgray;
  border-radius: 0px;
  width: 100%;
  background: rgba(0, 0, 0, 0.7);
  opacity: 0.7;
  margin-left: 10px;
  border-radius: 0px;
  color: #ffffff;
}
.el-input__inner.focus {
  border: 0;
  border-bottom: 1px solid #77beff;
  border-radius: 0px;
  width: 100%;
  opacity: 0.7;
  width: 200px;
  border-radius: 0px;
}
.el-input__inner.blur {
  border: 0;
  border-bottom: 1px solid dimgray;
  border-radius: 0px;
  opacity: 0.7;
  width: 100%;
  margin-left: 10px;
  border: 0 none;
  border-radius: 0px;
}
.el-button {
  width: 100%;
  height: 50px;
}
.el-button--default {
  background-image: linear-gradient(99deg, #77beff, #428fff);
  font-size: 20px;
  margin-top: 20px;
  margin-bottom: 40px;
}
info-foot {
  border-radius: 18px;
  background-color: #428fff;
  color: #ffffff;
  font-size: 20px;
  margin-top: 20px;
  margin-bottom: 40px;
  /* background-image: linear-gradient(99deg, #77beff, #428fff); */
}
.input-verifity {
  border: 0;
  border-bottom: 1px solid dimgray;
  border-radius: 0px;
  width: 60%;
  background-color: black;
  opacity: 0.1;
  color: #ffffff;
  margin-left: 10px;
  border-radius: 0px;
}
#inputVerifity {
  width: 60%;
  height: 50px;
  border: 0;
  border-bottom: 1px solid dimgray;
  border-radius: 0px;
  width: 100%;
  background: rgba(0, 0, 0, 0.7);
  opacity: 0.7;
  margin-left: 10px;
  border-radius: 0px;
  color: #ffffff;
}
</style>

