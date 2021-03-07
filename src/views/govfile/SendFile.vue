<template>
  <el-card class="box-card">
    <div class="oa_main">
      <!--list-->
      <el-row class="send_file">
        <el-col :span="16">
          <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="公文名称">
              <el-input
                v-model="form.name"
                placeholder="请输入公文名称"
              ></el-input>
            </el-form-item>
            <el-row>
              <el-col :span="12">
                <el-form-item label="公文类型">
                  <el-select
                    v-model="form.region"
                    placeholder="请选择公文类型"
                    style="width: 100%"
                  >
                    <el-option label="决议" value="1"></el-option>
                    <el-option label="命令" value="2"></el-option>
                    <el-option label="议案" value="3"></el-option>
                    <el-option label="指示" value="4"></el-option>
                    <el-option label="通告" value="5"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="机密程度">
                  <el-select
                    v-model="form.region"
                    placeholder="请选择机密程度"
                    style="width: 100%"
                  >
                    <el-option label="公开" value="1"></el-option>
                    <el-option label="部门" value="2"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>
            <el-form-item label="主送单位">
              <el-input
                v-model="form.zsdw"
                placeholder="请输入主送单位"
              ></el-input>
            </el-form-item>
            <el-form-item label="抄送单位">
              <el-input
                v-model="form.csd"
                placeholder="请输入抄送单位"
              ></el-input>
            </el-form-item>
            <el-row>
              <el-col :span="12">
                <el-form-item label="拟稿人">
                  <el-input
                    v-model="form.cdw"
                    placeholder="请输入拟稿人"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="拟稿部门">
                  <el-input
                    v-model="form.csdw"
                    placeholder="请输入拟稿部门"
                  ></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-form-item label="正文" class="editer">
              <vue-editor v-model="form.content"></vue-editor>
            </el-form-item>
            <el-form-item label="附件">
              <el-upload
                class="upload-demo"
                drag
                action="https://jsonplaceholder.typicode.com/posts/"
                multiple
              >
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">
                  将文件拖到此处，或<em>点击上传</em>
                </div>
              </el-upload>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">立即创建</el-button>
              <el-button>取消</el-button>
            </el-form-item>
          </el-form>
        </el-col>
        <el-col :span="8">
          <div class="set_tp">
            <el-steps direction="vertical" :active="1">
              <el-step title="收文登记"></el-step>
              <el-step title="步骤 2"></el-step>
              <el-step
                title="步骤 3"
                description="这是一段很长很长很长的描述性文字"
              ></el-step>
            </el-steps>
          </div>
        </el-col>
      </el-row>
    </div>
  </el-card>
</template>
<script>
import { VueEditor } from "vue2-editor";
export default {
  components: {
    VueEditor,
  },
  data() {
    return {
      form: {
        name: "",
        region: "",
        type: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
        content: "请输入正文内容",
      },
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
  },
};
</script>
<style lang="scss" scoped>
.send_file {
  margin: 25px 0;
  .set_tp {
    margin-left: 80px;
    height: 400px;
  }
}
</style>
<style lang="scss">
.box-card {
  margin: 20px;
  background-color: rgba(255, 255, 255, 0.7);
.send_file {
  margin: 25px 0;
}
}

</style>
