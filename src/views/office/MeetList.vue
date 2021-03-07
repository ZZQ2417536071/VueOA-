<template>
  <div>
    <el-card class="box-card">
      <!--serach-->
      <div class="oa_search">
        <el-form :inline="true" :model="form" class="demo-form-inline">
          <el-form-item label="会议主题">
            <el-input
              v-model="form.name"
              placeholder="请输入会议主题"
            ></el-input>
          </el-form-item>
          <el-form-item label="会议时间">
            <el-input
              v-model="form.person"
              placeholder="请输入会议时间"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" icon="el-icon-search" @click="onSubmit"
              >查询</el-button
            >
            <el-button type="success" icon="el-icon-circle-plus-outline" v-permission="['admin']"
              >新增会议</el-button
            >
          </el-form-item>
        </el-form>
        <!-- 表格 -->
        <!--list-->
        <el-table :data="tableData4" stripe style="width: 100%" class="table">
          <el-table-column fixed prop="id" label="会议主题" min-width="200">
          </el-table-column>
          <el-table-column
            prop="name"
            label="会议地方"
            align="center"
            width="220"
          >
          </el-table-column>
          <el-table-column
            prop="subName"
            align="center"
            width="150"
            label="会议日期"
          >
          </el-table-column>
          <el-table-column
            prop="person"
            align="center"
            label="开始时间"
            width="150"
          >
          </el-table-column>
          <el-table-column
            prop="time"
            align="center"
            label="结束时间"
            width="150"
          >
          </el-table-column>
          <el-table-column
            prop="loadDate"
            align="center"
            label="状态"
            width="130"
          >
          </el-table-column>
          <el-table-column fixed="right" align="center" label="操作" width="90">
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
import permission from '@/directive/permission/index.js' // 权限判断指令
import checkPermission from '@/utils/permission' // 权限判断函数
export default {
  directives: { permission },
  data() {
    return {
      tableData4: new Array(12).fill({
        id: "部门月度会议",
        name: "会议室203",
        subName: "2021-03-18",
        person: "9:00”",
        time: "12:00",
        qixian: "每周",
        loadDate: "未进行",
      }),
      form: {
        name: "",
        person: "",
        time: [],
      },
    };
  },

  methods: {
    checkPermission,
    handleGoUrl(url) {
      this.$router.push({ path: url });
    },

    onSubmit() {},
  },
};
</script>

<style lang="scss" scoped>
.box-card {
  margin: 25px;
  background-color: rgba(255, 255, 255, 0.8);
  .table {
    background-color: rgba(255, 255, 255, 0.8);
  }
}
</style>