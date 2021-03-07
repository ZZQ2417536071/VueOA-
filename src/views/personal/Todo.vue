<template>
  <div class="oa_main">
    <el-card class="box-card">
      <!--serach-->
      <div class="oa_search">
        <el-form :inline="true" :model="form" class="demo-form-inline">
          <el-form-item label="标题">
            <el-input v-model="form.name" placeholder="请输入标题"></el-input>
          </el-form-item>
          <el-form-item label="发起人">
            <el-input
              v-model="form.person"
              placeholder="请输入发起人"
            ></el-input>
          </el-form-item>
          <el-form-item label="开始时间">
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
          <router-link to="/personal/addtodo">
          <!-- 只有管理员能新增 -->
          <el-button type="primary" v-permission="['admin']">新增事务</el-button>
          </router-link>
        </el-form>
      </div>
      <!--表格-->
      <el-table
        v-loading="listLoading"
        element-loading-text="Loading"
        :data="list"
        style="width: 100%"
        :row-class-name="tableRowClassName"
      >
        <el-table-column prop="id" label="流水号" width="110">
        </el-table-column>
        <el-table-column prop="name" label="流程名称" width="200">
        </el-table-column>
        <el-table-column prop="title" label="标题" width="250">
        </el-table-column>
        <el-table-column prop="people" label="发起人" width="220">
        </el-table-column>
        <el-table-column prop="add_time" label="发起时间" width="200">
        </el-table-column>
        <el-table-column prop="taskname" label="任务名称" width="200">
        </el-table-column>
        <el-table-column label="超时时间" width="200">
          2021-04-30
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="90">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small"
              >查看</el-button
            >
            <!-- 只有管理员能删除 -->
            <el-button
              type="text"
              size="small"
              v-permission="['admin']"
              @click="removeById(scope.$index, scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页 -->
      <pagination
        v-show="total > 0"
        :total="total"
        :page.sync="listQuery.page"
        :limit.sync="listQuery.limit"
        @pagination="fetchData"
      />
    </el-card>
  </div>
</template>
<script>
// 引入获取待办数据接口函数
import { getTodoList, deleteTodoList, addTodo } from "@/api/todo";
// 引入分页组件
import Pagination from "@/components/Pagination";
import permission from '@/directive/permission/index.js' // 权限判断指令
import checkPermission from '@/utils/permission' // 权限判断函数
export default {
  directives: { permission },
  data() {
    return {
      list: [],
      listLoading: true,
      form: {
        name: "",
        person: "",
        time: [],
      },
      total: 0,
      //分页选项
      listQuery: {
        query: "",
        page: 1,
        limit: 10,
      },
    };
  },
  components: {
    Pagination,
  },
  created() {
    this.fetchData();
  },
  methods: {
    checkPermission,
    fetchData() {
      this.listLoading = true;
      getTodoList(this.listQuery).then((response) => {
        this.list = response.data.items;
        // console.log(response);
        //保存总数据个数
        this.total = response.data.total;
        this.listLoading = false;
      });
    },

    tableRowClassName({ row, rowIndex }) {
      if (rowIndex === 1) {
        return "warning-row";
      } else if (rowIndex === 3) {
        return "success-row";
      }
      return "";
    },
    // 查看操作
    handleClick(row) {
      console.log(row);
    },
    // 删除元素
    removeById(index, item) {
      this.$confirm("此操作将删除该事项, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(async () => {
          deleteTodoList({ id: item.id }).then((response) => {
            this.fetchData();
            this.$message({
              type: "success",
              message: "删除成功!",
            });
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },

    onSubmit() {
      // console.log(this.form);
    },
  },
};
</script>

<style lang="scss" scoped>
.box-card {
  margin: 10px;
  margin-top: 20px;
  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
}
</style>
