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
<el-form ref="user" :model="user" :rules="rules" label-width="110px" label-position='right' class="h-75 w-50 ml-auto userl mr-auto mt-3 text-center" style="padding-top:80px">
  <el-form-item label="用户头像:">
           <el-image 
    style="width: 50px; height: 50px"
    class="rounded-circle mr-5"
    :src="user.userimage" 
    :preview-src-list="[user.userimage]">
  </el-image>
 </el-form-item> 
   <el-form-item label="用户名:">
 <el-input class="mr-5" disabled style="width:250px" v-model="user.name"></el-input>
 </el-form-item> 
   <el-form-item label="原密码:">
       <el-input class="mr-5" disabled style="width:250px" v-model="oldpassword"></el-input>
 </el-form-item>
 <el-form-item label="新密码输入:" prop="password">
     <el-input   class="mr-5" style="width:250px" v-model="user.password"></el-input>
 </el-form-item> 

    <el-form-item>
    <el-button type="primary" @click="edit('user')">修改</el-button>
    <el-button @click="update()">取消修改</el-button>
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
        oldpassword:'',
        user: {
         name:'',
         userimage:'',
         password:'',
         iphone:'',
         address:''
}     ,
        rules: {
          password: [
            { trigger: 'blur',message:"新密码不能为空"},
            {  pattern:/(?!^(\d+|[a-zA-Z]+|[~!@#$%^&*?]+)$)^[\w~!@#$%^&*?]{6,12}$/, message: '应设置6-12位带有数字、字母的密码！'}
          ],
         } 
    }
    },
    created(){
      const _this =this;
       _this.userimage=_this.$store.getters.getUser.userimage
        _this.oldpassword=_this.$store.getters.getUser.password
       this.$axios.get("http://localhost:8585/user/findById/"+_this.$store.getters.getUser.id).then(
           function(resp){
               _this.user=resp.data
           }
       )

    },
    methods: {
     edit(formName) { 
        const _this=this;
        this.$refs[formName].validate((valid) => {
          if (valid) {
           this.$axios.put("http://localhost:8585/user/update",this.user).then(function(resp){
              if(_this.user.password==_this.oldpassword)
              {
                            _this.$alert('新密码和旧密码重复','密码修改',  {
          confirmButtonText: '确定',
          callback: action => {
           _this.$router.push('/password')
          }
        });
              }
              else if(resp.data=='success')
               {  
                   _this.$alert('密码更新成功','密码修改',  {
          confirmButtonText: '确定',
          callback: action => {
           _this.$router.push('/usermessage')
          }
        });    
               }
               else{
                   _this.$message("密码更新失败")
               }
           })
          } else {
            return false;
          }
        });
      },
        update(){
            this.$router.push('/usermessage')
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