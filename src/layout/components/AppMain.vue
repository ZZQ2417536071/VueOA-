<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <router-view :key="key" />
    </transition>
    <particles-bg type="circle" :num="5" :bg="true" />
  </section>
</template>

<script>
import { ParticlesBg } from "particles-bg-vue";
export default {
  name: 'AppMain',
  computed: {
    key() {
      return this.$route.path
    }
  },
  components: {
    ParticlesBg
  }
}
</script>

<style scoped>
.app-main {
  /*50 = navbar  */
  min-height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  overflow: hidden;
}
.fixed-header+.app-main {
  padding-top: 50px;
}
</style>

<style lang="scss">
.el-popup-parent--hidden {
  .fixed-header {
    padding-right: 15px;
  }
}
</style>
