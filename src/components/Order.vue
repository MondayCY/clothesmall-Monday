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
  我买到的宝贝
  </div>
</div>
<el-table
    :data="tableData"
    border
    class="w-75 ml-auto mr-auto mt-3">
    <el-table-column
      prop="product"
      label="商品名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="image"
      label="商品图"
      width="180">
    </el-table-column>
    <el-table-column
      prop="pirce"
      label="商品价格">
    </el-table-column>
    <el-table-column
      prop="status"
      label="发货状态">
    </el-table-column>
    <el-table-column
      prop="shop"
      label="是否收货">
      <el-button type="primary">确认收货</el-button>
    </el-table-column>
     <el-table-column
      prop="reject"
      label="是否退货">
      <el-button type="danger">确认退货</el-button>
    </el-table-column>
  </el-table>
</el-main>
      </el-container>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>