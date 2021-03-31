<template>
<div>
<el-container>
  <el-header height="60px">
      <el-row>
  <el-col :span="12"><div class="grid-content bg-purple mt-2" align="left">
    <a href="../views/index.vue" class=" text-decoration-none">
      <img src="../assets/m.png" alt="Mondat-Mall" style="width:40px;height:40px">
      <span class="font-weight-bolder align-middle text-dark" style="font-size:24px">Monday</span>
     </a> </div></el-col>
  <el-col :span="12"  class="mt-3"><div class="grid-content bg-purple-light" align="right">
       <el-button type="success" round size="small" @click="login()">登录</el-button>
  <el-button type="info" round size="small" @click="register()">注册</el-button>
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
  <div class="card mr-3 float-left ml-5" style="width:18rem" v-for="(item,index) in shang" :key="index">
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
  <div class="card mr-3 float-left ml-5 mb-3" style="width: 18rem;" v-for="(item,index) in qun" :key="index">
    <a href="">
  <img :src="item.img" class="card-img-top" alt="Monday"></a>
  <div class="card-body">
    <p class="card-text">{{item.introduce}}</p>
    <span>{{item.pirce}}</span>
   <button type="button" class="btn btn-outline-danger">加入购物车</button>
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
  <div class="card mr-3 float-left ml-5" style="width: 18rem;" v-for="(item,index) in xia" :key="index">
    <a href="">
  <img :src="item.img" class="card-img-top" alt="Monday"></a>
  <div class="card-body">

    <p class="card-text">{{item.introduce}}</p>
    <span>{{item.pirce}}</span>
   <button type="button" class="btn btn-outline-danger">加入购物车</button>
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
          qun:[
             {
              index:110,
              img:require("../static/JK短裙.jpg"),
              introduce:"学院风厚版不规则半身裙秋冬女高腰显瘦a字百褶裙",
              pirce:"76"
            },
                {
              index:120,
              img:require("../static/蕾丝连衣裙.jpg"),
              introduce:" 爱心网纱拼蕾丝连衣裙2021新款春气质金丝绒v领裙子",
              pirce:"112"
            },
                {
              index:130,
              img:require("../static/豹纹连衣裙.jpg"),
              introduce:"小辣妹豹纹吊带裙a字复古气质连衣裙2021新款春季",
              pirce:"79"
            },
          ],
          xia:[
             {
              index:200,
              img:require("../static/绣花长裤.jpg"),
              introduce:"桃花刺绣走边直筒牛仔裤女2021新款黑色宽松喇叭裤",
              pirce:"146"
            },
                {
              index:210,
              img:require("../static/西装裤.jpg"),
              introduce:"高腰运动休闲裤长裤子女宽松直筒春秋季2021新款",
              pirce:"112"
            },
                {
              index:220,
              img:require("../static/高腰裤.jpg"),
              introduce:"定制面料复古格子阔腿裤女高腰垂感裤子2021新款",
              pirce:"79"
            },
          ],

        }
    },
methods:{
  productinfo(index){
    this.$router.push("/productinfo/"+index)
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

<style>

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
    height: 330vh;
    background-image: url('../static/登录界面.jpg');
    background-size: 100%;
    
  }
   .el-container {
    margin-bottom: 40px;
  }
  .el-header{
  }

</style>