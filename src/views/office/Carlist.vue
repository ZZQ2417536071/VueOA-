<template>
  <div>
    <el-card class="box-card">
      <!--serach-->
      <div class="oa_search">
        <el-form :inline="true" :model="form" class="demo-form-inline">
          <el-form-item label="车辆类型">
            <el-input
              v-model="form.name"
              placeholder="请输入督办事项"
            ></el-input>
          </el-form-item>
          <el-form-item label="使用时间">
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
            <el-button type="success" icon="el-icon-circle-plus-outline"
              >车辆申请</el-button
            >
          </el-form-item>
        </el-form>
        <!-- 表格 -->
        <!--list-->
        <el-table :data="tableData4" stripe style="width: 100%">
          <el-table-column fixed label="流水号" width="150">
            <template slot-scope="scope"> 0{{ scope.$index + 1 }} </template>
          </el-table-column>
          <el-table-column
            prop="name"
            label="车辆类型"
            align="center"
            min-width="200"
          >
          </el-table-column>
          <el-table-column
            prop="subName"
            align="center"
            width="200"
            label="车牌号"
          >
          </el-table-column>
          <el-table-column prop="state" align="center" width="130" label="状态">
          </el-table-column>
          <el-table-column
            prop="person"
            align="center"
            label="开始时间"
            width="160"
          >
          </el-table-column>
          <el-table-column
            prop="time"
            align="center"
            label="结束时间"
            width="160"
          >
          </el-table-column>
          <el-table-column fixed="right" align="center" label="操作" width="80">
            <template>
              <el-button type="text" size="small"
                ><i class="el-icon-search"></i
              ></el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </el-card>
  </div>
</template>

<script>
import zgaxios from "@/server/zgaxios.js"
export default {
  data() {
    return {
      tableData4: new Array(11).fill({
        id: 10001,
        name: "奥迪A6",
        subName: "皖A12345",
        state: "审批中",
        person: "2021-2-1",
        time: "2021-2-28",
      }),
      form: {
        name: "",
        person: "",
        time: [],
      },
    };
  },
  created() {
    this.getEmployeeList()
  },

  methods: {
    handleGoUrl(url) {
      this.$router.push({ path: url });
    },
    async getEmployeeList() {
      let result = await zgaxios("GET", "/api/employeelist");
      // console.log(result,"xxxxxxxxxxxxxxx");
    },

    onSubmit() {},
  },
};
</script>

<style lang="scss" scoped>
.box-card {
  margin: 25px;
  background-color: rgba(255, 255, 255, 0.8);
}
</style>