<template>
  <el-card class="box-card">
    <div class="oa_main">
      <!--serach-->
      <div class="oa_search">
        <el-form :inline="true" :model="form" class="demo-form-inline">
          <el-form-item label="公文名称">
            <el-input
              v-model="form.name"
              placeholder="请输入公文名称"
            ></el-input>
          </el-form-item>
          <el-form-item label="拟稿人">
            <el-input
              v-model="form.person"
              placeholder="请输入拟稿人"
            ></el-input>
          </el-form-item>
          <el-form-item label="签发时间">
            <el-date-picker
              v-model="form.time"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            >
            </el-date-picker>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" icon="el-icon-search" @click="onSubmit"
              >查询</el-button
            >
          </el-form-item>
        </el-form>
      </div>
      <!--list-->
      <el-table :data="tableData4" stripe style="width: 100%">
        <el-table-column fixed prop="id" label="流水号" width="120">
        </el-table-column>
        <el-table-column
          prop="name"
          label="公文名称"
          align="center"
          min-width="220"
        >
        </el-table-column>
        <el-table-column
          prop="subName"
          align="center"
          width="160"
          label="拟稿人"
        >
        </el-table-column>
        <el-table-column
          prop="person"
          align="center"
          label="签发时间"
          width="120"
        >
        </el-table-column>
        <el-table-column
          prop="time"
          align="center"
          label="签发部门"
          width="200"
        >
        </el-table-column>
        <el-table-column fixed="right" align="center" label="操作" width="160">
          <template>
            <i class="el-icon-search"></i>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </el-card>
</template>
<script>
export default {
  data() {
    return {
      tableData4: new Array(13).fill({
        id: 10001,
        name: "关于春节放假的通知",
        subName: "章志强",
        person: "2021-2-3",
        time: "行政部",
      }),
      form: {
        name: "",
        person: "",
        time: [],
      },
    };
  },
  methods: {
    handleGoUrl(url) {
      this.$router.push({ path: url });
    },
    onSubmit() {
      console.log(this.form);
    },
  },
};
</script>
<style lang="scss" scoped>
.box-card {
    margin: 20px;
    background-color: rgba(255, 255, 255, 0.5);
    .el-icon-search {
        color: blue;
    }
}
</style>
