<template>
  <el-card class="box-card">
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="员工id" prop="id">
        <el-col :span="9">
          <el-input v-model.number="ruleForm.id"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="姓名" prop="name">
        <el-col :span="9">
          <el-input v-model="ruleForm.name" autocomplete="off"></el-input
        ></el-col>
      </el-form-item>
      <el-form-item label="性别" prop="gender">
        <el-col :span="9">
          <el-radio-group v-model="ruleForm.gender">
            <el-radio label="男"></el-radio>
            <el-radio label="女"></el-radio>
          </el-radio-group>
        </el-col>
      </el-form-item>
      <el-form-item label="年龄" prop="age">
        <el-col :span="9">
          <el-input v-model.number="ruleForm.age"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="部门" prop="department">
        <el-col :span="9">
          <el-input v-model="ruleForm.department" autocomplete="off"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="职位" prop="job">
        <el-col :span="9">
          <el-input v-model="ruleForm.job" autocomplete="off"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >提交</el-button
        >
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
// import { addEmployee } from "@/api/employee";
import zgaxios from "@/server/zgaxios.js";
export default {
  data() {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("年龄不能为空"));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error("请输入数字值"));
        } else {
          if (value < 18) {
            callback(new Error("必须年满18岁"));
          } else {
            callback();
          }
        }
      }, 500);
    };
    var checkId = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("id不能为空"));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error("请输入数字值"));
        } else {
          if (value <= 21) {
            callback(new Error("id必须大于21"));
          } else {
            callback();
          }
        }
      }, 500);
    };
    return {
      ruleForm: {
        id: "",
        age: "",
        name: "",
        gender: "",
        department: "",
        job: "",
      },
      rules: {
        age: [{ validator: checkAge, trigger: "blur" }],
        id: [{ validator: checkId, trigger: "blur" }],
      },
    };
  },
  created() {

  },

  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.addEmployee(this.ruleForm);
          alert("添加员工成功!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    async addEmployee() {
      let result = await zgaxios("POST", "/api/employeeadd");
      console.log(result,'添加员工信息xxxxxxxxxxxxxxxxxx')
    },
  },
};
</script>

<style lang="scss" scoped>
.box-card {
  margin: 20px;
  .demo-ruleForm {
    margin-left: 100px;
    margin-top: 50px;
  }
}
</style>