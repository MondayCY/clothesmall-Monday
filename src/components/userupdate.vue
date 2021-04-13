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
    <el-menu-item index="6-3"> <a href="../views/index.vue" class=" text-decoration-none">退出登录</a> </el-menu-item>
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
<el-form ref="user" :model="user" :rules="rules" label-width="100px" label-position='right' class="h-75 w-50 ml-auto userl mr-auto mt-3 text-center" style="padding-top:80px">
  <el-form-item label="头像地址:" prop="userimage">
      <el-input class="mr-5"  style="width:250px" v-model="user.userimage"></el-input>
 </el-form-item> 
   <el-form-item label="用户名:" prop="name">
 <el-input class="mr-5"  style="width:250px" v-model="user.name"></el-input>
 </el-form-item> 
   <el-form-item label="手机号:">
       <el-input class="mr-5" disabled style="width:250px" v-model="user.iphone"></el-input>
 </el-form-item>
 <el-form-item label="邮寄地址:" prop="address">
     <el-input   class="mr-5" style="width:250px" v-model="user.address"></el-input>
 </el-form-item> 

    <el-form-item>
    <el-button type="primary" @click="edit('user')">更新</el-button>
    <el-button @click="update()">取消更新</el-button>
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
        user: {
         name:'',
         userimage:'',
         password:'',
         iphone:'',
         address:''
},
rules:{
  name: [
            { required:true,message:"用户名不能为空",trigger: 'blur' },
             { min: 2, max: 9, message: '用户名在 2 到 9 个字符', trigger: 'blur' },
               {
                        required: true,
                        pattern: /^[\u4e00-\u9fa5_a-zA-Z0-9]+$/,
                        message: '用户名格式不可包含符号',
                        trigger: 'blur'
               }
          ],
        userimage:[
            { pattern:/^((ht|f)tps?):\/\/[\w\-]+(\.[\w\-]+)+([\w\-.,@?^=%&:\/~+#]*[\w\-@?^=%&\/~+#])?$/, message: '图片地址格式不正确'}
          ],
          address:[
            {required:true,message:"邮寄地址不能为空",trigger:'blur'},
             { pattern:/(?<=区)\S.*/, message: '邮寄地址格式不正确'}
          ]
}
      }
    },
    created(){
      const _this =this;
       this.userimage=_this.$store.getters.getUser.userimage
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
              
               if(resp.data=='success')
               {  
                   _this.$alert('信息更新成功,请重新登录','用户信息',  {
          confirmButtonText: '确定',
          callback: action => {
           _this.$router.push('/login')
          }
        });    
               }
               else{
                   _this.$message("信息更新失败")
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