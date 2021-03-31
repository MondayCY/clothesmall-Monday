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
    <div class="card w-75 ml-auto mr-auto mt-4">
  <div class="card-header">
  个人中心
  </div>
</div>
<el-form ref="form" :model="form" label-width="80px" class="h-75 w-50 ml-auto mr-auto pt-4" style="background-color:white">
  <el-form-item label="个人头像:">
     <el-avatar src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3557229618,1810308486&fm=26&gp=0.jpg" class="ml-2"></el-avatar>
  
  
   <el-button type="primary"  @click="dialogFormVisible = true" plain class="float-right">修改头像</el-button>
   <el-dialog title="修改头像" :visible.sync="dialogFormVisible">
  <el-upload
  class="avatar-uploader"
  action="https://jsonplaceholder.typicode.com/posts/"
  :show-file-list="false"
  :on-success="handleAvatarSuccess"
  :before-upload="beforeAvatarUpload">
  <img v-if="imageUrl" :src="imageUrl" class="avatar">
  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
</el-upload>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
  </div>
</el-dialog>
 </el-form-item> 
   <el-form-item label="用户名:">
  <span class="ml-2">1111</span>
   <el-button type="primary"  @click="dialogPassVisible = true" plain class="float-right">修改密码</el-button>

<el-dialog title="修改密码" :visible.sync="dialogPassVisible">
  <el-form :model="form">
    <el-form-item label="原密码" :label-width="formLabelWidth">
      <el-input v-model="form.pass" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="新密码" :label-width="formLabelWidth">
        <el-input v-model="form.new" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="确认新密码" :label-width="formLabelWidth">
        <el-input v-model="form.new" autocomplete="off"></el-input>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogPassVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogPassVisible = false">确 定</el-button>
  </div>
</el-dialog>
 </el-form-item> 
   <el-form-item label="手机号:">
       <span class="ml-2">1111</span>
 </el-form-item> 
 <el-form-item label="邮寄地址:">
     <span class="ml-2">1111</span>
      <el-button type="primary"  @click="dialogAddrVisible = true" plain class="float-right">更改邮寄地址</el-button>
<el-dialog title="更改邮寄地址" :visible.sync="dialogAddrVisible">
  <el-form :model="form">
    <el-form-item label="修改地址" :label-width="formLabelWidth">
      <el-input v-model="form.pass" autocomplete="off"></el-input>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogAddrVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogAddrVisible = false">确 定</el-button>
  </div>
</el-dialog>
 </el-form-item> 
  <!-- <el-form-item>
    <el-button type="primary" @click="onSubmit">立即创建</el-button>
    <el-button>取消</el-button>
  </el-form-item> -->
</el-form>
</el-main>
      </el-container>
  </div>
</template>

<script>
 export default {
    data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        dialogFormVisible: false,
         imageUrl: '',
        dialogPassVisible: false,
        dialogAddrVisible: false,
      }
    },
    methods: {
        handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>

<style>
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
    height: 90vh;
    background-image: url('../static/登录界面.jpg');
    background-size: 100%;
}

</style>