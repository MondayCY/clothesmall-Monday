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
      <div class="card w-50 ml-auto mr-auto border-0 text-center" style="background-color:transparent">
  <div class="card-body font-weight-bold text-lg-center" style="font-size:2.4em">
   Monday-Mall
  </div>
</div>
 <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="10em" class="demo-ruleForm" label-position='right' style="width:40%">
       <el-form-item label="用户名" prop="name" class="font-weight-bold">
    <el-input v-model="ruleForm.name" placeholder="请输入用户名"></el-input>
  </el-form-item>
     <el-form-item label="手机号" prop="iphone" class="font-weight-bold">
    <el-input v-model="ruleForm.iphone" placeholder="请输入手机号"></el-input>
  </el-form-item>
   <!-- <el-form-item label="头像地址" prop="userimage" class="font-weight-bold">
    <el-input v-model="ruleForm.userimage" placeholder="请输入头像URL地址"></el-input>
  </el-form-item> -->
    <el-form-item label="邮寄地址" prop="address" class="font-weight-bold">
    <el-input v-model="ruleForm.address" placeholder="请输入邮寄地址"></el-input>
  </el-form-item>
  <el-form-item label="设置密码" prop="password" class="font-weight-bold">
    <el-input type="password" v-model="ruleForm.password" autocomplete="off" placeholder="设置密码" show-password></el-input>
  </el-form-item>
  <el-form-item label="确认密码" prop="checkPass" class="font-weight-bold">
    <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off" placeholder="确认密码" show-password></el-input>
  </el-form-item>
  <el-form-item align='center' label-width="1em">
    <el-button type="primary" @click="register('ruleForm')">注册</el-button>
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
  // 手机验证
  // 设置手机号的验证规则
    // 设置密
     let reg = /(?!^(\d+|[a-zA-Z]+|[~!@#$%^&*?]+)$)^[\w~!@#$%^&*?]{6,12}$/
      var validatePass = (rule, value, callback) => {
        if(value ==='')
        {
          callback(new Error('密码不能为空'));
        }
        else{
           if (!reg.test(value)) {
          callback(new Error('应设置6-12位带有数字、字母的密码！'));
        }if (this.checkPass !== '') {
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
        ruleForm: {
          name: '',
          iphone: '',
          password: '',
          userimage:'',
          address:''
        },
        checkPass:'',
        rules: {
          password: [
            { validator: validatePass, trigger: 'blur',required:true}
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur',required:true}
          ],
          name: [
            { required:true,message:"请输入用户名",trigger: 'blur' },
             { min: 2, max: 9, message: '用户名在 2 到 9 个字符', trigger: 'blur' },
               {
                        required: true,
                        pattern: /^[\u4e00-\u9fa5_a-zA-Z0-9]+$/,
                        message: '用户名格式不可包含符号',
                        trigger: 'blur'
               }
          ],
         iphone:[
             {  required: true, message: '手机号不能为空', trigger: 'blur' },
              {  pattern:/^1[3456789]\d{9}$/, message: '手机格式不正确'}
          ],
          address:[
            {required:true,message:"邮寄地址不能为空",trigger:'blur'},
             { pattern:/(?<=区)\S.*/, message: '邮寄地址格式不正确'}
          ]
        }
      };
    },
    created(){
      

    },
    methods: {
      register(formName){
        this.$refs[formName].validate((valid) => {
          if (valid) {  
            let n=0;
           const _this=this;
           console.log(_this.ruleForm.iphone);
        this.$axios.get('http://localhost:8585/user/findAll').then(function(resp){
        console.log(resp.data);
      
        for(let i=0;i<resp.data.length;i++)
        {
          if(resp.data[i].iphone==_this.ruleForm.iphone)
          {

            n=n+1;
        }
        else{
            continue;
          }
          }
          console.log(n);
 if(n==0)
        {
               _this.$axios.post("http://localhost:8585/user/save",_this.ruleForm).then(function(resp){
               console.log(resp);

               if(resp.data=='success')
               {  
                   _this.$alert('用户注册成功','用户注册',  {
          confirmButtonText: '确定',
          callback: action => {
           _this.$router.push('/login')
          }
        });      
               }
               else{
                   _this.$message("用户注册失败")
               }
           })
        }
    else{
            _this.$alert('该手机号已存在','错误提示',  {
          confirmButtonText: '确定',
        });
    }
        })
    //      
     } else {
            return false;
          }
        });
      },
        login(){
            this.$router.push('/login')
        },
        index(){
            this.$router.push('/index')
        },
        resetForm(formName) {
        this.$refs[formName].resetFields();
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
    background-image: url('../static/注册.jpg');
    background-size: 100%;
    overflow: hidden;  
}
.el-form{
    margin: auto;
    width: 30%;
}

</style>