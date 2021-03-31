<template>
  <div>
      <el-container>
   <el-header height="60px">
      <el-row>
  <el-col :span="12"><div class="grid-content bg-purple mt-2" align="left">
    <a href="../views/index.vue" class="text-decoration-none">
      <img src="../assets/m.png" alt="Mondat-Mall" style="width:40px;height:40px">
      <span class="font-weight-bolder align-middle text-dark" style="font-size:24px">Monday</span>
     </a> </div></el-col>
  <el-col :span="12"><div class="grid-content bg-purple-light user" align="right">
       <el-menu class="el-menu-demo border-0" mode="horizontal">
  <el-submenu index="6" class="float-right">
    <template slot="title">
      <el-avatar src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3557229618,1810308486&fm=26&gp=0.jpg"></el-avatar></template>
    <el-menu-item index="6-1"><a href="/usermessage" class=" text-decoration-none">个人中心</a> </el-menu-item>
    <el-menu-item index="6-2"><a href="/order" class=" text-decoration-none">我的购物</a> </el-menu-item>
    <el-menu-item index="6-3"> <a href="../views/index.vue" class=" text-decoration-none">退出登录</a> </el-menu-item>
  </el-submenu>
</el-menu>
      </div></el-col>
</el-row>
</el-header>
  <el-main>
  <!-- {{this.$route.params.img}} -->
      <!-- 商品图片和标题以及价格和购买选择 -->
      <div class="card mb-5 ml-auto mr-auto" style="max-width: 940px;height:420px">
  <div class="row no-gutters mt-3 ml-3">
    <div class="col-md-4">
      <img :src="clothes.image" alt="..." style="width:370px;height:370px">
    </div>
    <div class="col-md-8 border-left-0" style="width:300px;height:420px">
      <div class="card-body text-lg-left" style="margin-left:70px">
        <h5 class="card-title text-danger font-italic">Monday：</h5>
        <p class="card-text">{{clothes.name}}</p>
        <img src="//img.alicdn.com/tps/TB1uibqKpXXXXXjXXXXXXXXXXXX-80-14.png" alt="">
        <p style="font-size:12px">海量新品 潮流穿搭 玩趣互动</p>
        <div class="mb-4" style="width:300px;height:40px;background-color:#FFF2E8;line-height:40px">
        <p class="card-text float-left mr-1"><small class="text-muted">价格：</small></p>
        <span class="text-danger font-italic float-left mr-1" style="font-size:26px;font-weight:bold">¥</span>
        <p class="text-danger font-italic" style="font-size:26px;font-weight:bold">{{clothes.pirce}}</p></div>
        <div class="divcss5"></div>
        <p class="mb-3 mt-1" style="width:300px;height:40px;background-color:#FFF9F5;line-height:40px" ><small class="text-muted">优惠：</small>
        <img src="//img.alicdn.com/tfs/TB1Kz8VQFXXXXa6XFXXXXXXXXXX-56-16.png" alt="">
        <small class="text-muted">全地区包邮</small></p>
        <el-button type="danger" plain>立即购买</el-button>
        <p class="mt-3"><small class="text-muted">承诺：</small>
        <img src="//img.alicdn.com/tps/i1/T1EQA5FpVgXXceOP_X-16-16.jpg" alt="">
        <small class="text-muted">7天无理由</small></p>
      </div>
    </div>
  </div>
</div>
<div class="card text-center mr-auto ml-auto" style="width:900px;height:800px">
  <div class="card-header">
    <ul class="nav nav-tabs card-header-tabs">
      <li class="nav-item">
        <a class="nav-link active" href="#">商品详情</a>
      </li>
    </ul>
  </div>
  <div class="card-body">
    <img :src="clothes.xiangqing" alt="" style="width:600px;height:720px">
  </div>
</div>
  </el-main>
</el-container>
  </div>
</template>

<script>
export default {
    data() {
        return {
            clothes:{
                image:require("../static/好运卫衣.jpg"),
                name:'新年好运福2021卫衣加绒加厚女闺蜜装宽松圆领上衣',
                pirce:'112',
                xiangqing:require("../static/好运卫衣详情.jpg")
            }
        }
    },

}
</script>

<style>
  .el-main {
    text-align: center;
    height: 220vh;
    background-image: url('../static/登录界面.jpg');
    background-size: 100%;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  .divcss5{ height:1px; width:100%; border-bottom:1px dashed #D9D9D9}
</style>