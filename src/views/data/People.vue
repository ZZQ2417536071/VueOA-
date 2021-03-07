<template>
  <el-card class="box-card">
    <div class="view-content">
      <div class="left">
        <div class="k"></div>
        <div class="c">
        <div id="myChart" :style="{ width: '450px', height: '480px' }"></div>
        </div>
      </div>
      <div id="myChart2" :style="{ width: '1000px', height: '900px' }"></div>
    </div>
  </el-card>
</template>

<script>
import * as echarts from "echarts";
import "../../../node_modules/echarts/map/js/china.js"; // 引入中国地图数据

export default {
  data() {
    return {};
  },
  mounted() {
    this.drawLine();
    this.chinaConfigure();
  },
  methods: {
    drawLine() {
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      var option;

      option = {
        backgroundColor: "rgba(223, 230, 233,0.2)",
        title: {
          text: "各部门员工人数",
          left: "center",
          top: 20,
          textStyle: {
            color: "#aaa",
          },
        },
        xAxis: {
          type: "category",
          data: [
            "办公室",
            "人事部",
            "企划部",
            "财务部",
            "董事会",
            "产品部",
            "项目部",
          ],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [
              {
                value: 1,
                itemStyle: {
                  color: "#74b9ff",
                },
              },
              {
                value: 2,
                itemStyle: {
                  color: "#a29bfe",
                },
              },
              {
                value: 2,
                itemStyle: {
                  color: "#fab1a0",
                },
              },
              {
                value: 3,
                itemStyle: {
                  color: "#ffeaa7",
                },
              },
              {
                value: 4,
                itemStyle: {
                  color: "#d63031",
                },
              },
              {
                value: 4,
                itemStyle: {
                  color: "#e84393",
                },
              },
              {
                value: 5,
                itemStyle: {
                  color: "#b2bec3",
                },
              },
            ],
            type: "bar",
          },
        ],
      };

      option && myChart.setOption(option);
    },
    // 中国地图配置
    chinaConfigure() {
      let myChart = this.$echarts.init(document.getElementById("myChart2"));
      var option;

      myChart.setOption({
        // 进行相关配置
        // backgroundColor: "blue",
        tooltip: {}, // 鼠标移到图里面的浮动提示框
        // backgroundColor: "rgba(223, 230, 233,0.2)",
        title: {
          text: "员工家乡分布",
          left: "center",
          top: 20,
          textStyle: {
            color: "#aaa",
          },
        },
        dataRange: {
          show: false,
          min: 0,
          max: 10000,
          text: ["High", "Low"],
          realtime: true,
          calculable: true,
          color: ["orangered", "yellow", "lightskyblue"],
        },
        geo: {
          // 这个是重点配置区
          map: "china", // 表示中国地图
          roam: true,
          label: {
            normal: {
              show: true, // 是否显示对应地名
              textStyle: {
                color: "rgba(0,0,0,0.4)",
              },
            },
          },
          itemStyle: {
            normal: {
              borderColor: "rgba(0, 0, 0, 0.2)",
            },
            emphasis: {
              areaColor: null,
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              shadowBlur: 20,
              borderWidth: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        },
        series: [
          {
            type: "scatter",
            coordinateSystem: "geo", // 对应上方配置
          },
          {
            name: "员工家乡分布", // 浮动框的标题
            type: "map",
            geoIndex: 0,
            data: [
              {
                name: "北京",
                value: 599,
              },
              {
                name: "上海",
                value: 8855,
              },
              {
                name: "黑龙江",
                value: 8844,
              },
              {
                name: "深圳",
                value: 92,
              },
              {
                name: "湖北",
                value: 810,
              },
              {
                name: "四川",
                value: 453,
              },
              {
                name: "甘肃",
                value: 1810,
              },
              {
                name: "河南",
                value: 2810,
              },
              {
                name: "内蒙古",
                value: 520,
              },
              {
                name: "山东",
                value: 9810,
              },
              {
                name: "新疆",
                value: 660,
              },
              {
                name: "西藏",
                value: 810,
              },
              {
                name: "云南",
                value: 1810,
              },
              {
                name: "青海",
                value: 7810,
              },
              {
                name: "重庆",
                value: 3810,
              },
              {
                name: "宁夏",
                value: 7810,
              },
              {
                name: "广西",
                value: 7810,
              },
              {
                name: "贵州",
                value: 7810,
              },
              {
                name: "台湾",
                value: 210,
              },
              {
                name: "江苏",
                value: 10010,
              },
              {
                name: "浙江",
                value: 17810,
              },
              {
                name: "陕西",
                value: 7810,
              },
              {
                name: "山西",
                value: 5510,
              },
              {
                name: "河北",
                value: 1810,
              },
              {
                name: "辽宁",
                value: 810,
              },
              {
                name: "吉林",
                value: 710,
              },
              {
                name: "安徽",
                value: 7810,
              },
              {
                name: "广东",
                value: 7810,
              },
              {
                name: "福建",
                value: 810,
              },
              {
                name: "江西",
                value: 910,
              },
              {
                name: "湖南",
                value: 310,
              },
              {
                name: "海南",
                value: 3610,
              },
              {
                name: "香港",
                value: 5510,
              },
              {
                name: "澳门",
                value: 110,
              },
              {
                name: "天津",
                value: 410,
              },
            ],
          },
        ],
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.box-card {
  margin: 18px;
  background-color: rgba(255, 255, 255, 0.9);
  .view-content {
    width: 100%;
    height: 100%;
    background-color: "rgba(223, 230, 233,0.2)" !important;
    display: flex;
    .left {
      flex: 1;
      display: flex;
      flex-direction: column;
      .k {
        flex: 1;
      }
      .c {
        flex: 4;
      }
    }
    #myChart2 {
      flex: 2;
    }
  }
}
</style>