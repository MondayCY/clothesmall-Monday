<template>
  <div class="box">
      <el-container>
  <el-header>
      <el-row>
  <el-col :span="24" class="mt-2">
       <el-button type="primary" plain @click="login()">返回登录</el-button>
  <el-button type="info" plain @click="index()">返回Monday首页</el-button>
  </el-col>
</el-row>
      </el-header>
  <el-main>
      <div class="card w-25 ml-auto mr-auto border-0" style="background-color:transparent">
  <div class="card-body font-weight-bold text-lg-center" style="font-size:24px">
   Monday-Mall
  </div>
</div>
 <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
       <el-form-item label="用户名" prop="name">
    <el-input v-model="ruleForm.name" placeholder="请输入用户名"></el-input>
  </el-form-item>
     <el-form-item label="手机号" prop="number">
    <el-input v-model="ruleForm.number" placeholder="请输入手机号"></el-input>
  </el-form-item>
  <el-form-item label="设置密码" prop="pass">
    <el-input type="password" v-model="ruleForm.pass" autocomplete="off" placeholder="设置密码"></el-input>
  </el-form-item>
  <el-form-item label="确认密码" prop="checkPass">
    <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off" placeholder="确认密码"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary">注册</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item>
</el-form>

  </el-main>
</el-container>
  </div>
</template>

<script>
export default {
    data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          pass: '',
          checkPass: '',
          name: '',
          number:''
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur',required:true,message:"设置密码"}
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur',required:true}
          ],
          name: [
            { required:true,message:"请输入用户名",trigger: 'blur' }
          ],
          number:[
              { required:true,message:"请输入手机号",trigger:'blur'}
          ]
        }
      };
    },
    methods: {
        login(){
            this.$router.push('/login')
        },
        index(){
            this.$router.push('/index')
        }
    }
  }
</script>

<style>
.box{
    width: 100%;
    display: flex;
}
.el-main{
    height: 90vh;
    background-image: url('../static/登录界面.jpg');
    background-size: 100%;
}
.el-form{
    margin: auto;
    width: 30%;
}

</style>