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
  <el-submenu index="6" class="float-right">
    <template slot="title">
      <el-avatar :src="userimage"></el-avatar></template>
    <el-menu-item index="6-1"><a href="/usermessage" class=" text-decoration-none">个人中心</a> </el-menu-item>
    <el-menu-item index="6-2"><a href="/order" class=" text-decoration-none">我的购物</a> </el-menu-item>
       <el-menu-item index="6-3"> <a href="/user" class=" text-decoration-none">回到首页</a> </el-menu-item>
    <el-menu-item index="6-4"> <a href="../views/index.vue" class=" text-decoration-none">退出登录</a> </el-menu-item>
  </el-submenu>
</el-menu>
      </div></el-col>
</el-row>
</el-header>
<el-main>
    <div class="card w-50 ml-auto mr-auto mt-4  text-center">
  <div class="card-header text-center">
  个人中心
  </div>
</div>
<el-form ref="user" :model="user" label-width="100px" label-position='right' class="h-75 w-50 ml-auto userl mr-auto mt-3 text-center" style="padding-top:65px">
  <el-form-item label="个人头像:">
      <el-image 
    style="width: 50px; height: 50px"
    class="rounded-circle mr-5"
    :src="user.userimage" 
    :preview-src-list="[user.userimage]">
  </el-image>
 </el-form-item> 
   <el-form-item label="用户名:">
 <el-input class="mr-5" disabled style="width:250px" v-model="user.username"></el-input>
 </el-form-item> 
   <el-form-item label="手机号:">
       <el-input class="mr-5" disabled style="width:250px" v-model="user.iphone"></el-input>
 </el-form-item> 
 <el-form-item label="邮寄地址:">
     <el-input disabled  class="mr-5" style="width:250px" v-model="user.address"></el-input>
 </el-form-item> 
  <el-form-item>
    <el-button type="primary" @click="update()" class="mr-5">修改个人信息</el-button>
     <el-button type="primary" @click="password()" class="mr-5">修改密码</el-button>
  </el-form-item>
</el-form>
</el-main>
      </el-container>
  </div>
  
</template>

<script>
 export default {
    data() {
      return {
        userimage:'',
        user: [{
         username:'',
         userimage:'',
         iphone:'',
         address:''
}
        ],
      }
    },
    created(){
      const _this =this;
       _this.userimage=_this.$store.getters.getUser.userimage;
       _this.user =_this.$store.getters.getUser;
    },
    methods: {
      update() {
        this.$router.push('/userupdate')
        
      },
        password(){
          this.$router.push('/password')
        }
    }
  }
</script>

<style scoped>
.userl{
  background-image: url('../static/个人中心.jpg');
  background-size: 100%;
}
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
.el-main{
    height: 40em;
    background-image: url('../static/user.jpg');
    background-size: 100%;
}

</style>