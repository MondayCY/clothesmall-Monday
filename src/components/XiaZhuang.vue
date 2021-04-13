<template>
  <div>
      <el-container>
      <el-header height="60px">
      <el-row>
  <el-col :span="12"><div class="grid-content bg-purple mt-2" align="left">
    <a href="/user" class="text-decoration-none">
      <img src="../assets/m.png" alt="Mondat-Mall" style="width:40px;height:40px">
      <span class="font-weight-bolder align-middle text-dark" style="font-size:24px">Monday</span>
     </a> </div></el-col>
  <el-col :span="12"><div class="grid-content bg-purple-light user" align="right">
       <el-menu class="el-menu-demo border-0" mode="horizontal">
         <el-menu-item index="1"><a href="/qunzhuang" class="text-decoration-none">裙装系列</a></el-menu-item>
         <el-menu-item index="2"><a href="/shangzhuang" class="text-decoration-none">上装系列</a></el-menu-item>
           <el-menu-item index="3"><a href="/user" class="text-decoration-none">回到首页</a></el-menu-item>
  <el-submenu index="6" class="float-right">
    <template slot="title">
      <el-avatar :src="userimage"></el-avatar></template>
   <el-menu-item index="6-1"><a href="/usermessage" class=" text-decoration-none">个人中心</a> </el-menu-item>
    <el-menu-item index="6-2"><a href="/order" class=" text-decoration-none">我的购物</a> </el-menu-item>
    <el-menu-item index="6-3"> <a href="../views/index.vue" class=" text-decoration-none">退出登录</a> </el-menu-item>
  </el-submenu>
</el-menu>
      </div></el-col>
</el-row>
</el-header>
 <el-main>
     <div class="card w-50 ml-auto mr-auto border-0 mb-3" style="background-color:transparent">
  <div class="card-body text-center text-dark font-weight-bold" style="font-size:20px">
    下装系列
  </div>
</div>
<div class="box">
  <div class="card ml-4 mb-3" style="width: 18rem" v-for="(item,proid) in xia" :key="proid">
  <img :src="item.image" class="card-img-top" alt="Monday">
      <div class="card-body">
    <p class="card-text">{{item.product}}</p>
    <div class="card text-center border border-light rounded-lg" style="line-height:20px">
           <div class="card-body">
       <span class="text-danger font-italic" style="font-size:24px;font-weight:bold">¥</span>
    <span style="font-size:16px" class="mr-2">{{item.pirce}}</span>
   <button type="button" class="btn btn-outline-danger" @click="productinfo(item.proid)">查看商品详情</button>
           </div>
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
          // product:[
          //   {
          //     id:'',
          //     image:'',
          //     product:"",
          //     pirce:"",
          //     introduce:''
          //   }
          // ],
                 xia:[
            {
              proid:'',
              id:'',
              image:'',
              product:"",
              pirce:""
            }
          ],
        }
    },
    created(){
      const _this =this;
       _this.userimage=_this.$store.getters.getUser.userimage;
      this.$axios.get("http://localhost:8282/product/findAll").then(function(resp){
        console.log(resp);
        _this.xia=resp.data; 
        console.log(_this.xia);
//遍历所有商品种类，并删除数组中不符合种类名的元素，不适合大型项目，过程繁琐
        for(let i=0;i<_this.xia.length;i++)
      {
        if(_this.xia[i].kind=='上装' || _this.xia[i].kind=='裙装')
        {
          _this.xia.splice(i,1);
          i--;
        }
        
      }
      console.log(_this.xia);
      })
      
     
      },     
      methods:{
         productinfo(proid){
    this.$router.push("/productinfo/"+proid)
  },
      }

}
</script>

<style scoped>
.box{
  display:flex;
  flex-wrap: wrap;
}
.el-main{
    height:80em;
    background-image: url('../static/登录界面.jpg');
    background-size: 100%;
}


</style>