<template>
  <el-card class="box-card">
    <!-- 搜索 -->
    <div>
      <el-form ref="form" v-model="input" class="form">
        <el-input
          placeholder="请输入月份或姓名或部门"
          v-model="input"
          clearable
        >
        </el-input>
        <el-button type="primary" @click="search">搜索</el-button>
      </el-form>
      <el-button type="info" v-print="'#printTest'">打印表格</el-button>
    </div>
    <!-- 表格 -->
    <el-table
      :data="salarylist"
      stripe
      style="width: 100%; margin-top: 15px"
      v-loading="listLoading"
      element-loading-text="Loading"
      id="printTest"
    >
      <el-table-column label="序号" width="50" align="center">
        <template slot-scope="scope">
          {{ scope.$index + 1 }}
        </template>
      </el-table-column>
      <el-table-column label="姓名" width="70" align="center">
        <template slot-scope="scope">
          {{ scope.row.name }}
        </template>
      </el-table-column>
      <el-table-column label="部门" align="center" width="70">
        <template slot-scope="scope">
          {{ scope.row.department }}
        </template>
      </el-table-column>
      <el-table-column label="一月工资(/元)" align="center" width="">
        <template slot-scope="scope">
          {{ scope.row.jansalary }}
        </template>
      </el-table-column>
      <el-table-column label="二月工资" align="center" width="">
        <template slot-scope="scope">
          {{ scope.row.febsalary }}
        </template>
      </el-table-column>
      <el-table-column label="三月工资" align="center" width="">
        <template slot-scope="scope">
          {{ scope.row.marsalary }}
        </template>
      </el-table-column>
      <el-table-column label="四月工资" align="center" width="">
        <template slot-scope="scope">
          {{ scope.row.aprsalary }}
        </template>
      </el-table-column>
      <el-table-column label="五月工资" align="center" width="">
        <template slot-scope="scope">
          {{ scope.row.maysalary }}
        </template>
      </el-table-column>
      <el-table-column label="六月工资" align="center" width="">
        <template slot-scope="scope">
          {{ scope.row.junsalary }}
        </template>
      </el-table-column>
      <el-table-column label="七月工资" align="center" width="">
        <template slot-scope="scope">
          {{ scope.row.julsalary }}
        </template>
      </el-table-column>
      <el-table-column label="八月工资" align="center" width="">
        <template slot-scope="scope">
          {{ scope.row.augsalary }}
        </template>
      </el-table-column>
      <el-table-column label="九月工资" align="center" width="">
        <template slot-scope="scope">
          {{ scope.row.septsalary }}
        </template>
      </el-table-column>
      <el-table-column label="十月工资" align="center" width="">
        <template slot-scope="scope">
          {{ scope.row.octsalary }}
        </template>
      </el-table-column>
      <el-table-column label="十一月工资" align="center" width="">
        <template slot-scope="scope">
          {{ scope.row.novsalary }}
        </template>
      </el-table-column>
      <el-table-column label="十二月工资" align="center" width="">
        <template slot-scope="scope">
          {{ scope.row.decsalary }}
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center" width="60">
        <template>
          <el-button type="text" size="small"
            ><i class="el-icon-search"></i
          ></el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script>
import zgaxios from "@/server/zgaxios.js";
export default {
  data() {
    return {
      listLoading: true,
      input: "",
      salarylist: [],
    };
  },
  created() {
    this.getEmployeeSalary();
  },
  methods: {
    // 搜索
   async search() {
      console.log("搜索！")
      let result;
      if(this.input){
        result = await zgaxios("GET", "/api/employeeSearch/"+this.input);
      }
      else{
        result = await zgaxios("GET", "/api/employeeSearch/all");   
      }
      this.salarylist = result.message;
      console.log(result,"88888888888888888888")

    },

    async getEmployeeSalary() {
      this.listLoading = true;
      let result = await zgaxios("GET", "/api/employeesalary");
      //   console.log(result, "请求到的工资信息");
      this.salarylist = result.message;
      this.listLoading = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.box-card {
  margin: 20px;
  background-color: rgba(255, 255, 255, 0.8);
  .form {
    display: inline-block;
    .el-input {
      width: 530px;
      margin-right: 20px;
    }
  }
}
</style>