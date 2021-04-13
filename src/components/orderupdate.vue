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
    <div class="card w-75 ml-auto mr-auto mt-4">
  <div class="card-header text-center">
  订单修改
  </div>
  <el-form ref="orders" :model="orders" label-width="120px" class="mt-5 ml-auto mr-auto">
  <el-form-item label="商品名" prop="product" style="width:450px" >
    <el-input v-model="orders.product" disabled></el-input>
  </el-form-item>
   <el-form-item label="手机号" prop="iphone" style="width:450px" >
    <el-input v-model="orders.iphone" disabled></el-input>
  </el-form-item>
   <el-form-item label="邮寄地址" prop="address" style="width:450px">
    <el-input v-model="orders.address"></el-input>
  </el-form-item>
     <el-form-item label="确认签收或收货" prop="status" style="width:250px">
    <el-select v-model="orders.status" placeholder="请选择签收或退货">
      <el-option label="确认签收" value="确认签收"></el-option>
      <el-option label="确认退货" value="确认退货"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="edit('orders')">确认</el-button>
    <el-button @click="order()">取消</el-button>
  </el-form-item>
</el-form>
</div>

</el-main>
      </el-container>
  </div>
</template>

<script>
export default {
  data(){
    return{
      userimage:'',
      orders:[{
                product:'',
                iphone:'',
                address:'',
                money:'' ,
                status:''
            }],
    }
  },
  created(){
    const _this =this;
     _this.userimage=_this.$store.getters.getUser.userimage;
      this.$axios.get("http://localhost:8383/order/findById/"+this.$route.query.id).then(
           function(resp){
               _this.orders=resp.data
           }
       )
  
  },
  methods:{
             edit(formName) { 
        const _this=this;
        this.$refs[formName].validate((valid) => {
          if (valid) {
              if(_this.orders.status=='确认退货')
              {
                  this.$alert('已退给您'+_this.orders.money+'元,请您查收！', '退货提示', {
          confirmButtonText: '确定',
          callback: action => {
          this.$axios.put("http://localhost:8383/order/update",this.orders).then(function(resp){
              
               if(resp.data=='success')
               {  
                   _this.$alert('订单更新成功','商品订单更新',  {
          confirmButtonText: '确定',
          callback: action => {
           _this.$router.push('/order')
          }
        });    
               }
               else{
                   _this.$message("订单更新失败")
               }
           })
          }
        });
              }
              else{
                  this.$axios.put("http://localhost:8383/order/update",this.orders).then(function(resp){
              
               if(resp.data=='success')
               {  
                   _this.$alert('订单更新成功','商品订单更新',  {
          confirmButtonText: '确定',
          callback: action => {
           _this.$router.push('/order')
          }
        });    
               }
               else{
                   _this.$message("订单更新失败")
               }
           })

              }
           
          } else {
            return false;
          }
        });
      },
      order(){
          this.$router.push('/order')
      }
  }

}
</script>

<style scoped>
.el-main{
    height: 40em;
    background-image: url('../static/登录界面.jpg');
    background-size: 100%;
}
</style>