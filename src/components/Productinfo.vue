<template>
  <div class="box">
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
 <div class="title" style="height:8em">
   <div class="info">
   <a href="/shangzhuang" class="index text-light mr-2 text-decoration-none">所有分类</a>
        <a href="/user" class="index text-light text-decoration-none">回到首页</a>
     </div> </div>
  <el-main>
  <!-- {{this.$route.params.img}} -->
      <!-- 商品图片和标题以及价格和购买选择 -->
<div class="card mb-4 ml-auto mr-auto text-left" style="width:60em;height:25em;min-width:30em">
  <div class="row no-gutters mt-2 ml-4" style="width:60em">
    <div class="col-md-4 float-left" style="max-width:20em;">
      <img :src="products.image" alt="Monday" style="max-width:32em;height:23em">
    </div>
    <div class="col-md-8 border-left-0 float-right" style="width:32em;height:20em">
      <div class="card-body text-lg-left" style="margin-left:4em;min-width:20em">
        <h5 class="card-title text-danger font-italic">Monday：</h5>
        <p class="card-text">{{products.product}}</p>
        <img src="//img.alicdn.com/tps/TB1uibqKpXXXXXjXXXXXXXXXXXX-80-14.png" alt="">
        <p style="font-size:12px">海量新品 潮流穿搭 玩趣互动</p>
        <div class="mb-4" style="width:19em;height:2.5em;background-color:#FFF2E8;line-height:2.5em">
        <p class="card-text float-left mr-1"><small class="text-muted">价格：</small></p>
        <span class="text-danger font-italic float-left" style="font-size:26px;font-weight:bold">¥</span>
        <p class="text-danger font-italic" style="font-size:26px;font-weight:bold;margin-left:1em">{{products.pirce}}</p></div>
        <div class="divcss5"></div>
        <p class="mb-3 mt-1" style="width:19em;height:2.5em;background-color:#FFF9F5;line-height:2.5em" ><small class="text-muted">优惠：</small>
        <img src="//img.alicdn.com/tfs/TB1Kz8VQFXXXXa6XFXXXXXXXXXX-56-16.png" alt="">
        <small class="text-muted">全地区包邮</small></p>
        <el-button type="danger" plain @click='shop()'>立即购买</el-button>
        <p class="mt-3"><small class="text-muted">承诺：</small>
        <img src="//img.alicdn.com/tps/i1/T1EQA5FpVgXXceOP_X-16-16.jpg" alt="">
        <small class="text-muted">7天无理由</small></p>
      </div>
    </div>
  </div>
</div>
<div class="card text-center mr-auto ml-auto" style="width:56em;height:50em">
  <div class="card-header">
    <ul class="nav nav-tabs card-header-tabs">
      <li class="nav-item">
        <a class="nav-link active" href="#">商品详情</a>
      </li>
    </ul>
  </div>
  <div class="card-body">
    <img :src="products.introduce" alt="" style="width:37em;height:43em">
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
          userimage:'',
            products:{
                proid:'',
                image:'',
                product:'',
                pirce:'',
                introduce:''
            },
            orders:{
              number:'1',
              image:'',
              product:'',
              money:'',
              user:'',
              iphone:'',
              address:'',
              status:'未发货'
            }
        }
    },
    created(){
      //设置页面跳转的时候从顶部开始显示
      window.parent.scrollTo(0, 0);
      //根据商品的唯一proid显示商品详情
      const _this=this;
       _this.userimage=_this.$store.getters.getUser.userimage;
       _this.orders.user=_this.$store.getters.getUser.username;
       _this.orders.iphone=_this.$store.getters.getUser.iphone;
       _this.orders.address=_this.$store.getters.getUser.address;
      this.$axios.get("http://localhost:8282/product/findAll").then(function(resp){
        console.log(resp);
        _this.products=resp.data;
        for(var i=0;i<_this.products.length;i++)
        {
          if(_this.products[i].proid==_this.$route.params.proid)
          {
            _this.products=_this.products[i];
          }
        }
      })
    },
    methods:{
      shop(){
        const _this =this;
        _this.orders.product=_this.products.product;
        _this.orders.money=_this.products.pirce;
        _this.orders.image=_this.products.image;
        _this.$confirm('购买此商品你需要支付'+_this.products.pirce+'元', '商品购买', {
          confirmButtonText: '确认支付',
          cancelButtonText: '取消支付',
        }).then(() => {
               this.$axios.post("http://localhost:8383/order/save",_this.orders).then(function(resp){
               if(resp.data=='success')
               {  
                   _this.$alert('商品购买成功','商品购买',  {
          confirmButtonText: '确定',
          callback: action => {
           _this.$router.push("/productinfo/"+_this.products.proid)
          }
        });   
               }
               else{
                   _this.$message("商品购买失败")
               }
           })
          }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消支付'
          });          
        });
      }
    }

}
</script>

<style scoped>
.box{
  margin:0px;
  width:100%;
  height:100%;
}
.title{
  background-image: url('../static/详情.jpg');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  display: flex;
}
.info{
  margin-left: 8em;
  align-self: flex-end;
}
  .el-main {
    text-align: center;
    height: 82em;
    background-image: url('../static/登录界面.jpg');
    background-size: 100%;
  }
  .index{
    font-size: 10px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  .divcss5{ height:1px; width:90%; border-bottom:1px dashed #D9D9D9}
</style>