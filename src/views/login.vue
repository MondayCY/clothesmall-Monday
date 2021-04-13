<template>
  <div class="box">
      <el-container>
  <el-header>
      <el-row>
  <el-col :span="24" class="mt-2">
      <el-button type="success" plain @click="register()">注册账号</el-button>
  <el-button type="info" plain @click="index()">返回Monday首页</el-button>
  </el-col>
</el-row>
      </el-header>
  <el-main>
      <div class="card ml-auto mr-auto border-0 w-50" style="background-color:transparent">
  <div class="card-body font-weight-bold text-lg-center" style="font-size:2.4em">
   Monday-Mall
  </div>
</div>
 <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm"  class="demo-ruleForm" style="height:20em">
       <el-form-item label="手机号" prop="iphone" class="font-weight-bold">
    <el-input v-model.number="ruleForm.iphone" placeholder="输入手机号"></el-input>
  </el-form-item>
    
  <el-form-item label="密码" prop="password" class="font-weight-bold">
    <el-input type="password" v-model="ruleForm.password" autocomplete="off" show-password placeholder="输入用户名密码"></el-input>
  </el-form-item>
  <el-form-item label="确认密码" prop="checkPass" class="font-weight-bold">
    <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off" show-password placeholder="确认密码"></el-input>
  </el-form-item>
  <el-form-item align="center">
    <el-button type="primary" @click="loginForm('ruleForm')">登录</el-button>
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
          if (this.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {  
        id:'',
        ruleForm: {
          password: '',
          iphone: ''
        }, 
        checkPass: '',
        rules: {
          password: [
            { required:true,message:"请输入用户密码",validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { required:true,validator: validatePass2, trigger: 'blur' }
          ],
          iphone: [
            {  required: true, message: '手机号不能为空', trigger: 'blur' },
              {  pattern:/^1[3456789]\d{9}$/, message: '手机格式不正确'}
          ]
        }
      };
    },
    created(){
      const _this=this
      this.$axios.get('http://localhost:8585/user/findAll').then(function(resp){
        // console.log(JSON.stringify(resp.data));
        
      })
    },
    methods: {
       resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      register(){
        
        this.$router.push('/register')
      },
      index(){
        this.$router.push('/index')
      },
      loginForm(formName)
{
  const _this=this;
        this.$refs[formName].validate((valid) => {
          if (valid) {
           this.$axios.post('http://localhost:8787/login',_this.ruleForm).then(function(resp){
               console.log(resp);
               const jwt = resp.headers['authorization']
               const userInfo = resp.data.data
               //把数据共享出去
               _this.$store.commit("SET_TOKEN",jwt)
               _this.$store.commit("SET_USERINFO",userInfo)
               console.log(_this.$store.getters.getUser);
               if(resp.data.code=='200')
               {
                 _this.$router.push('/user')
               }
               if(resp.data.code=='400')
               {
                _this.$message({
                   showClose: true,
                message: '密码输入错误',
                type: 'error'
                })
               }
           }).catch(function(error)
           {  //状态值 
             if (error.response) { 
         _this.$alert('该用户不存在', '错误提示', {
          confirmButtonText: '确定',
        }); 
            
  } 
           })
          } else {
            return false;
          }
        });
}
},

    }
</script>

<style scoped>

.box{
  font-size: 10px;
    width: 100%;
    display: flex;
}
.el-main{
  height: 52em;
    background-image: url('../static/背景1.jpg');
    background-size: 100%;

}
.el-form{
    margin: auto;
    width: 30%;
}

</style>