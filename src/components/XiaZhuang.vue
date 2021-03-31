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
         <el-menu-item index="1"><a href="/qunzhuang" class="text-decoration-none">裙装系列</a></el-menu-item>
         <el-menu-item index="2"><a href="/shangzhuang" class="text-decoration-none">上装系列</a></el-menu-item>
  <el-submenu index="6" class="float-right">
    <template slot="title">
      <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar></template>
    <el-menu-item index="6-1"><a href="" class=" text-decoration-none">个人资料</a> </el-menu-item>
    <el-menu-item index="6-2"><a href="" class=" text-decoration-none">我的购物</a> </el-menu-item>
    <el-menu-item index="6-3"> <a href="../views/index.vue" class=" text-decoration-none">退出登录</a> </el-menu-item>
  </el-submenu>
</el-menu>
      </div></el-col>
</el-row>
</el-header>
 <el-main>
     <div class="card w-50 ml-auto mr-auto border-0 mb-3" style="background-color:transparent">
  <div class="card-body text-center text-dark" style="font-size:18px">
    下装系列
  </div>
</div>
<div class="card-deck">
   <div class="card-group">
  <div class="card" style="width:18rem" v-for="(item,index) in shang" :key="index">
    <a href="">
  <img :src="item.img" class="card-img-top" alt="Monday"></a>
  <div class="card-body">
    <p class="card-text">{{item.introduce}}</p>
    <span>{{item.pirce}}</span>元
   <button type="button" class="btn btn-outline-danger" @click="productinfo(item.index)">加入购物车</button>
  </div>
</div>
  </div>
</div>

 </el-main>
 </el-container> </div>
</template>

<script>
export default {
    data() {
        return {
                 shang:[
            {
              index:101,
              img:require("../static/圣诞毛衣.jpg"),
              introduce:"古着圣诞圆领套头毛衣女宽松外穿复古慵懒风针织衫",
              pirce:"146"
            },
                {
              index:102,
              img:require("../static/好运卫衣.jpg"),
              introduce:"新年好运福2021卫衣加绒加厚女闺蜜装宽松圆领上衣",
              pirce:"112"
            },
                {
              index:103,
              img:require("../static/漫画T恤.jpg"),
              introduce:"自画像卡通趣味白色t恤女宽松慵懒风短袖内搭上衣",
              pirce:"79"
            },
          ],
        }
    },

}
</script>

<style>
.el-main{
    height: 90vh;
    background-image: url('../static/登录界面.jpg');
    background-size: 100%;
}

</style>