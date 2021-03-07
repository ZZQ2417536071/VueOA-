<template>
  <el-card class="box-card">
    <div class="oa_search">
      <el-form ref="form" v-model="input" label-width="80px" class="form">
        <el-input
          v-model="input"
          placeholder="请输入员工姓名或部门关键字"
          clearable
          ><el-button
            slot="append"
            icon="el-icon-search"
            @click="search"
          ></el-button
        ></el-input>
      </el-form>
      <router-link to="/office/EmployeeAdd">
        <el-button
          class="new"
          type="primary"
          style="margin-left: 50px"
          @click="addEmployee"
          v-permission="['admin']"
          >新增员工</el-button
        >
      </router-link>
    </div>
    <!-- 表格 -->
    <el-table
      :data="emplist"
      stripe
      style="width: 100%; margin-top: 15px"
      v-loading="listLoading"
      element-loading-text="Loading"
    >
      <el-table-column label="序号" width="180" align="center">
        <template slot-scope="scope">
          {{ scope.$index + 1 }}
        </template>
      </el-table-column>
      <el-table-column label="姓名" width="150" align="center">
        <template slot-scope="scope">
          {{ scope.row.name }}
        </template>
      </el-table-column>
      <el-table-column label="性别" align="center" width="180">
        <template slot-scope="scope">
          {{ scope.row.gender }}
        </template>
      </el-table-column>
      <el-table-column label="年龄" align="center" width="180">
        <template slot-scope="scope">
          {{ scope.row.age }}
        </template>
      </el-table-column>
      <el-table-column label="部门" align="center" width="220">
        <template slot-scope="scope">
          {{ scope.row.department }}
        </template>
      </el-table-column>
      <el-table-column label="职位" align="center" width="220">
        <template slot-scope="scope">
          {{ scope.row.job }}
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center" fixed="right">
        <template>
          <router-link to="/office/EmployeeSalary">
            <el-button type="text" size="small" @click="toSalary"
              >查看工资</el-button
            >
          </router-link>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script>
import zgaxios from "@/server/zgaxios.js";
import permission from '@/directive/permission/index.js' // 权限判断指令
import checkPermission from '@/utils/permission' // 权限判断函数

export default {
  directives: { permission },
  data() {
    return {
      listLoading: true,
      emplist: [],
      input: "",
    };
  },

  created() {
    this.getEmployeeList();
  },
  methods: {
    checkPermission,
    addEmployee() {
      console.log("新增员工");
    },
    toSalary() {
      console.log("去薪水页面");
    },
    edit() {
      console.log("编辑");
    },
    // 发送请求，获取数据库数据
    async getEmployeeList() {
      this.listLoading = true;
      let result = await zgaxios("GET", "/api/employeelist");
      this.emplist = result.message;
      this.listLoading = false;
    },
    // 搜索
    async search() {
      console.log("搜索！");
      let result;
      if (this.input) {
        result = await zgaxios("GET", "/api/employeelistSearch/" + this.input);
      } else {
        result = await zgaxios("GET", "/api/employeelistSearch/all");
      }
      this.emplist = result.message;
      console.log(result, "88888888888888888888");
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
      width: 730px;
    }
  }
}
</style>