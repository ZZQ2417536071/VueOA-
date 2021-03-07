<template>
  <el-card class="box-card">
    <div class="form">
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="id" prop="id">
          <el-col :span="9">
            <el-input v-model.number="ruleForm.id"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="任务类型" prop="name">
          <el-col :span="9">
            <el-input v-model="ruleForm.name" autocomplete="off"></el-input
          ></el-col>
        </el-form-item>
        <el-form-item label="标题" prop="title">
          <el-col :span="9">
            <el-input v-model="ruleForm.title" autocomplete="off"></el-input
          ></el-col>
        </el-form-item>
        <el-form-item label="提交人" prop="people">
          <el-col :span="9">
            <el-input v-model.number="ruleForm.people"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="提交时间" prop="add_time">
          <el-col :span="9">
            <el-input v-model="ruleForm.add_time" autocomplete="off"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="任务名" prop="taskname">
          <el-col :span="9">
            <el-input v-model="ruleForm.taskname" autocomplete="off"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >提交</el-button
          >
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </el-card>
</template>

<script>
// 引入api需要用{}
import { addTodo } from "@/api/todo";

export default {
  data() {
    var checkId = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("id不能为空"));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error("请输入数字值"));
        } else {
          if (value <= 120) {
            callback(new Error("id必须大于120"));
          } else {
            callback();
          }
        }
      }, 500);
    };
    return {
      ruleForm: {
        id: "",
        name: "",
        title: "",
        people: "",
        add_time: "",
        taskname: "",
      },
      rules: {
        id: [{ validator: checkId, trigger: "blur" }],
      },
    };
  },

  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(async (valid) => {
        console.log(this.ruleForm);
        if (valid) {
          let result = await addTodo(this.ruleForm);
          // console.log(result, "xxxxxxxxxxxxxxxxxxxxxx");
          this.$router.push("/personal/todo");
          alert("添加成功!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style lang="scss" scoped>
.box-card {
  margin: 20px;
  background-color: rgba(255, 255, 255, 0.5);
  height: 800px;
  .form {
    width: 1000px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-25%, -50%);
  }
}
</style>