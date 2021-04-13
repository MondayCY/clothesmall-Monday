<template>
<div class="box">
<el-container>
  <el-header height="60px">
      <el-row>
  <el-col :span="12"><div class="grid-content bg-purple mt-2" align="left">
    <a href="/user" class=" text-decoration-none">
      <img src="../assets/m.png" alt="Mondat-Mall" style="width:40px;height:40px">
      <span class="font-weight-bolder align-middle text-dark" style="font-size:24px">Monday</span>
     </a> </div></el-col>
  <el-col :span="12"  class="mt-0"><div class="grid-content bg-purple-light" align="right">
     <el-menu class="el-menu-demo border-0" mode="horizontal">
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
      <el-carousel>
    <el-carousel-item v-for="(item,index) in kind" :key="index" style="height:470px">
     <a class="carousel-caption d-none d-md-block text-decoration-none" :href="item.lianjie"> 
        <img  style="width:600px;height:450px" :src="item.image" alt="Monday">
        <h5 class="font-weight-bolder text-muted mt-1" style="font-size:20px">{{item.xilie}}</h5>
        <p class="font-weight-bolder text-muted" style="font-size:16px">不过是追求内心的梦，希望努力之后实现的光辉，照进现实。</p>
        <p class="font-weight-bolder text-muted" style="font-size:16px">春的气息渐渐袭近，愿你与我们一样，美好、简单...</p>
      </a> 
      
    </el-carousel-item>
      </el-carousel>
<div class="container mt-4 mb-4">
  <div class="row mb-3">
    <div class="col font-weight-bolder">
      上装
    </div>
    <div class="col">
      <a href="/shangzhuang" class="font-weight-bold text-decoration-none text-secondary float-right">查看更多</a>
    </div>
  </div>
  <div class="card-group">
  <div class="card mr-3 float-left ml-5" style="min-width:18rem" v-for="(item,proid) in shang" :key="proid">
  <img :src="item.shangimage" class="card-img-top" alt="Monday">
  <div class="card-body">
    <p class="card-text">{{item.shang}}</p>
    <span>{{item.money}}</span>元
   <button type="button" class="btn btn-outline-danger" @click="productinfo(item.proid)">查看商品详情</button>
  </div>
</div>
  </div>
</div>
 <div class="container mt-3">
  <div class="row mb-3" style="clear:both">
    <div class="col font-weight-bolder">
      裙装
    </div>
    <div class="col">
      <a href="/qunzhuang" class="font-weight-bold text-decoration-none text-secondary float-right">查看更多</a>
    </div>
  </div>
    <div class="card-group">
  <div class="card mr-3 float-left ml-5 mb-3" style="min-width:18rem" v-for="(item,proid) in qun" :key="proid">
    <a href="">
  <img :src="item.qunimage" class="card-img-top" alt="Monday"></a>
  <div class="card-body">
    <p class="card-text">{{item.qun}}</p>
    <span>{{item.qunmoney}}</span>
   <button type="button" class="btn btn-outline-danger" @click="productinfo(item.proid)">查看商品详情</button>
  </div>
</div></div>
</div>
<div class="container mt-3">
  <div class="row mb-3 ml-3" style="clear:both">
    <div class="col font-weight-bolder">
     下装
    </div>
    <div class="col">
      <a href="/xiazhuang" class="font-weight-bold text-decoration-none text-secondary float-right">查看更多</a>
    </div>
  </div>
    <div class="card-group">
  <div class="card mr-3 float-left ml-5" style="min-width:18rem" v-for="(item,proid) in xia" :key="proid">

  <img :src="item.xiaimage" class="card-img-top" alt="Monday">
  <div class="card-body">

    <p class="card-text">{{item.xia}}</p>
    <span>{{item.xiamoney}}</span>元
   <button type="button" class="btn btn-outline-danger" @click="productinfo(item.proid)">查看商品详情</button>
  </div>
</div>
    </div>
</div> 
  </el-main>
  <!-- <el-footer height="100px">Footer</el-footer> -->
</el-container>
</div>
</template>

<script>
export default {
    data() {
        return {
          userimage:'',
          kind:[
            {
              index:0,
               image:require("../static/shang.png"), 
               xilie: "上装系列",
               lianjie:"/shangzhuang"
            },
            {
              index:1,
              image:require("../static/qun.png"),  
              xilie:"裙装系列",
              lianjie:"/qunzhuang"
            },
            {
              index:2,
              image: require("../static/xia.png"),
              xilie:"下装系列",
              lianjie:"/xiazhuang"
            }
          ],
          shang:[
            {
              proid:'',
              shang:'',
              shangimage:'',
              money:""
            }
          ],
          qun:[
                {
              proid:'',
              qun:'',
              qunimage:'',
              qunmoney:''
            }
          ],
          xia:[
             {
              proid:'',
              xia:'',
              xiaimage:'',
              xiamoney:''
             }
              
          ]

        }
    },
    created(){
      const _this =this;
       _this.userimage=_this.$store.getters.getUser.userimage;
      this.$axios.get("http://localhost:8282/xia/findAll").then(function(resp){
        _this.xia=resp.data;
}),
      this.$axios.get("http://localhost:8282/shang/findAll").then(function(resp){
        _this.shang=resp.data;
}),
      this.$axios.get("http://localhost:8282/qun/findAll").then(function(resp){
        _this.qun=resp.data;
})
    },
methods:{
  productinfo(proid){
    this.$router.push("/productinfo/"+proid)
  },
  login(){
    this.$router.push('/login')
  },
  register(){
    this.$router.push('/register')
  }
}
}
</script>

<style  scope>

.el-carousel{
  margin: auto;
  width: 75%;
  height: 470px;
}
.el-carousel__arrow
{
    top:75%
}
 .el-carousel__item{
    background-image: url("https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3775528801,4155070593&fm=26&gp=0.jpg");
  }
.clothes-kind{

    margin: auto;
    height: 100%;
    
}
  .el-main {
    text-align: center;
    height: 130em;
    background-image: url('../static/登录界面.jpg');
    background-size: 100%;
    
  }
   .el-container {
    margin-bottom: 40px;
  }
  .el-header{
  }

</style>