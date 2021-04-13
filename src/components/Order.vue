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
  我买到的宝贝
  </div>
</div>
<el-table
    :data="orders"
    border
    class="w-75 ml-auto mr-auto mt-3" max-height="500">
    <el-table-column
      prop="product"
      label="商品名"
      width="180" align="center">
    </el-table-column>
    <el-table-column
      prop="image"
      label="商品图"
    align="center">
    <template slot-scope="scope">
    <el-image :src="scope.row.image" style="width: 50px; height:50px" :preview-src-list="[scope.row.image]">
        <div slot="error" class="image-slot">
              <i class="el-icon-picture-outline"></i>
            </div>
    </el-image>
  </template>
    </el-table-column>
    <el-table-column
      prop="number"
      label="数量" align="center">
    </el-table-column>
    <el-table-column
      prop="money"
      label="商品价格" align="center">
    </el-table-column>
    <el-table-column
      prop="status"
      label="发货状态" align="center">
    </el-table-column>
       <el-table-column prop="status" label="商品退收货" align="center" fixed="right">
 <template slot-scope="scope">
<el-button @click="edit(scope.row)" type="primary" plain size="small">确认退收货</el-button>
   </template>
   </el-table-column> 
  </el-table>
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
                image:'',
                number:'',
                product:'',
                money:'', 
                status:''
            }],
    }
  },
  created(){
    const _this =this
     _this.userimage=_this.$store.getters.getUser.userimage;
  this.$axios.get("http://localhost:8383/order/findAll").then(
        function(resp){
          _this.orders=resp.data;
          // _this.total= resp.data.totalElements;
             for(let i=0;i<_this.orders.length;i++)
      {
        if(_this.orders[i].iphone!== _this.$store.getters.getUser.iphone)
        {
          _this.orders.splice(i,1);
          i--;
        }
      }
     
        }
      )
  },
  methods:{
    edit(row) {
          this.$router.push({
            path:'/orderupdate',
            query:{
              id:row.id
            }
          })
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