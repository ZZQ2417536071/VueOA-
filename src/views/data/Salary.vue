<template>
  <el-card class="box-card">
    <!-- 图表部分 -->
    <div class="view-content">
      <div id="myChart2" :style="{ width: '1000px', height: '700px' }"></div>
      <div class="right">
        <div id="myChart" :style="{ width: '320px', height: '340px' }"></div>
        <div id="myChart3" :style="{ width: '320px', height: '360px' }"></div>
      </div>
    </div>
  </el-card>
</template>

<script>
import * as echarts from "echarts";

export default {
  data() {
    return {};
  },
  mounted() {
    this.drawLine();
    this.drawLine2();
    this.drawLine3();
  },
  methods: {
    drawLine() {
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      var option;

      option = {
        backgroundColor: "rgba(223, 230, 233,0.2)",
        title: {
          text: "员工平均月工资分布",
          left: "center",
          top: 20,
          textStyle: {
            color: "#aaa",
          },
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "55%",
            data: [
              { value: 1, name: "9k以上" },
              { value: 2, name: "6k-7k" },
              { value: 4, name: "5k-6k" },
              { value: 4, name: "8k-9k" },
              { value: 8, name: "7k-8k" },
            ],
          },
        ],
      };

      option && myChart.setOption(option);
    },
    drawLine2() {
      let myChart = this.$echarts.init(document.getElementById("myChart2"));
      var option;

      option = {
        backgroundColor: "rgba(223, 230, 233,0.2)",
        legend: {},
        tooltip: {
          trigger: "axis",
          showContent: false,
        },
        title: {
          text: "各部门月平均工资（/元）",
          left: "center",
          top: 30,
          textStyle: {
            color: "#aaa",
          },
        },
        dataset: {
          source: [
            [
              "month",
              "一月",
              "二月",
              "三月",
              "四月",
              "五月",
              "六月",
              "七月",
              "八月",
              "九月",
              "十月",
              "十一月",
              "十二月",
              "一年",
            ],
            [
              "项目部",
              5600,
              5600,
              5800,
              5800,
              5800,
              6400,
              6400,
              6400,
              6400,
              6600,
              6600,
              7100,
              6208.3,
            ],
            [
              "董事会",
              6500,
              6500,
              6700,
              6700,
              6700,
              7300,
              7300,
              7300,
              7300,
              7500,
              7500,
              8000,
              7108.3,
            ],
            [
              "财务部",
              6666.7,
              6666.7,
              6866.7,
              6866.7,
              6866.7,
              7466.7,
              7466.7,
              7466.7,
              7666.7,
              7666.7,
              8166.7,
              7275,
              7881.3,
            ],
            [
              "企划部",
              7500,
              7500,
              7700,
              7700,
              7700,
              8300,
              8300,
              8300,
              8300,
              8000,
              8000,
              8500,
              7983.3,
            ],
            [
              "办公室",
              8000,
              8000,
              8200,
              8200,
              8200,
              8800,
              8800,
              8800,
              8800,
              8000,
              8000,
              8500,
              8358.3,
            ],
            [
              "产品部",
              8000,
              8000,
              8200,
              8200,
              8200,
              8800,
              8800,
              8800,
              8800,
              8250,
              8250,
              8750,
              8420.8,
            ],
            [
              "人事部",
              6000,
              6000,
              6200,
              6200,
              6200,
              6800,
              6800,
              6800,
              6800,
              7000,
              7000,
              7500,
              6608.3,
            ],
          ],
        },
        xAxis: { type: "category" },
        yAxis: { gridIndex: 0 },
        grid: { top: "50%" },
        series: [
          {
            type: "line",
            smooth: true,
            seriesLayoutBy: "row",
            emphasis: { focus: "series" },
          },
          {
            type: "line",
            smooth: true,
            seriesLayoutBy: "row",
            emphasis: { focus: "series" },
          },
          {
            type: "line",
            smooth: true,
            seriesLayoutBy: "row",
            emphasis: { focus: "series" },
          },
          {
            type: "line",
            smooth: true,
            seriesLayoutBy: "row",
            emphasis: { focus: "series" },
          },
          {
            type: "line",
            smooth: true,
            seriesLayoutBy: "row",
            emphasis: { focus: "series" },
          },
          {
            type: "line",
            smooth: true,
            seriesLayoutBy: "row",
            emphasis: { focus: "series" },
          },
          {
            type: "line",
            smooth: true,
            seriesLayoutBy: "row",
            emphasis: { focus: "series" },
          },
          {
            type: "pie",
            id: "pie",
            radius: "30%",
            center: ["50%", "25%"],
            emphasis: { focus: "data" },
            label: {
              formatter: "{b}: {@一月} ({d}%)",
            },
            encode: {
              itemName: "month",
              value: "一月",
              tooltip: "一月",
            },
          },
        ],
      };

      myChart.on("updateAxisPointer", function (event) {
        var xAxisInfo = event.axesInfo[0];
        if (xAxisInfo) {
          var dimension = xAxisInfo.value + 1;
          myChart.setOption({
            series: {
              id: "pie",
              label: {
                formatter: "{b}: {@[" + dimension + "]} ({d}%)",
              },
              encode: {
                value: dimension,
                tooltip: dimension,
              },
            },
          });
        }
      });

      myChart.setOption(option);

      option && myChart.setOption(option);
    },
    drawLine3() {
      let myChart = this.$echarts.init(document.getElementById("myChart3"));
      var option;

      option = {
        backgroundColor: "rgba(223, 230, 233,0.2)",
        tooltip: {
          trigger: "item",
        },
        legend: {
          top: "5%",
          left: "center",
        },
        series: [
          {
            name: "一年平均工资(/元)",
            type: "pie",
            radius: ["40%", "70%"],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: "#fff",
              borderWidth: 2,
            },
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "40",
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 6208.3, name: "项目部" },
              { value: 7108.3, name: "董事会" },
              { value: 7881.3, name: "财务部" },
              { value: 7983.3, name: "企划部" },
              { value: 8358.3, name: "办公室" },
              { value: 8420.8, name: "产品部" },
              { value: 6608.3, name: "人事部" },
            ],
          },
        ],
      };
      option && myChart.setOption(option);
    },
  },
};
</script>


<style lang="scss" scoped>
.box-card {
  margin: 20px;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.9);
  .view-content {
    display: flex;
    #mychart2 {
      flex: 4;
    }
    .right {
      flex: 1;
      display: flex;
      flex-direction: column;
      margin-left: 90px;
      #mychart {
        flex: 1;
      }
      #mychart3 {
        flex: 1;
        margin-top: 40px;
      }
    }
  }
}
</style>