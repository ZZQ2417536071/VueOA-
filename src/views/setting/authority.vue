<template>
  <el-card class="elcard">
    <!-- <span>您当前登录的身份为 {{ roles }}</span> -->
    <!-- <switch-roles @change="handleRolesChange" /> -->

    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span class="head"
          >您当前登录的身份为 <span class="shenfen">{{ roles }}</span></span
        >
        <switch-roles @change="handleRolesChange" />
      </div>
    </el-card>
  </el-card>
</template>

<script>
import permission from "@/directive/permission/index.js"; // 权限判断指令
import checkPermission from "@/utils/permission"; // 权限判断函数
import SwitchRoles from "../permission/components/SwitchRoles";


export default {
  name: "DirectivePermission",
  components: { SwitchRoles },
  directives: { permission },
  data() {
    return {
      key: 1, // 为了能每次切换权限的时候重新初始化指令
    };
  },
  computed: {
    roles() {
      if (this.$store.getters.roles == "admin") {
        var str = "超级管理员";
        return str;
      } else if (this.$store.getters.roles == "editor") {
        var str = "普通用户";
        return str;
      }
    },
  },

  methods: {
    checkPermission,
    handleRolesChange() {
      this.key++;
    },
  },
};
</script>


<style lang="scss" scoped>
.elcard {
  margin: 20px;
  height: 820px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both;
  }
  .head {
    font-size: 25px;
    font-family: "Arial", "Microsoft YaHei", "黑体", "宋体", sans-serif;
  }
  .shenfen {
    color: rgb(127, 136, 255);
  }
  .box-card {
    width: 550px;
    background-color: rgba(255, 255, 255, 0.8);
  }
}
.el-card {
  background-color: rgba(178, 190, 195,0);
}
</style>