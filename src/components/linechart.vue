<template>
  <!--为echarts准备一个具备大小的容器dom-->
  <div id="main" style="width:100%;height:400px;background:white;"></div>
</template>
<script>
require("echarts/lib/chart/pie");
import echarts from "echarts";
export default {
  name: "zhexiantu",
  data() {
    return {
      charts: "",
      opinionDataone: [],
      opinionData1: [],
      isChone:""
    };
  },
  created() { 
    this.postRequest("/attendance/selectOutputPercentage",null).then(msg=>{
      if(msg) {
        console.log(msg)
        var newarr = []
        var thisarr = []
        for(var i = 0;i<7;i++){
          var x = Math.round(msg.data[i]*100)/100 *100
          this.opinionDataone.unshift(x.toString())
        }
        // this.opinionDataone = newarr
        for(var i = 7;i<msg.data.length;i++){
          var x = Math.round(msg.data[i]*100)/100 *100
          this.opinionData1.unshift(x.toString())
        }
        this.$nextTick(function() {
      this.drawLine("main");
    });
      }
    })
  },
 
  methods: {
    drawLine(id) {
      this.charts = echarts.init(document.getElementById(id));
      this.charts.setOption({
        title: {
          text: "两周的出勤对比",
          padding: [20,30,20,20],
          textStyle: {
            //文字颜色
            // color:'#ccc',
            //字体风格,'normal','italic','oblique'
            fontStyle: "normal",
            //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
            fontWeight: "bold",
            //字体系列
            fontFamily: "sans-serif",
            //字体大小
            fontSize: 16
          }
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          color: ["#4472C5"],
          data: ["本周", "上周"],
          padding: [20,30,20,30],
          textStyle: {
            //图例文字的样式
            color: "#5284FF",
            fontSize: 16
          }
        },
        grid: {
          top:"20%",
          left: "2%",
          right: "5%",
          bottom: "3%",
          containLabel: true
        },

        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          name: "(星期)",
          type: "category",
          boundaryGap: false,
          data: [
            "星期一",
            "星期二",
            "星期三",
            "星期四",
            "星期五",
            "星期六",
            "星期日"
          ],
          axisLine: {
            lineStyle: {
              // color:'#F5F5F5',//x轴的颜色
              width: 2 //轴线的宽度
            }
          }
        },
        yAxis: {
          name: "出勤率(%)",
          type: "value"
        },

        series: [
          {
            name: "上周",
            type: "line",
            // stack: "总借款",
            data: this.opinionDataone,
            smooth: true,
            symbolSize: 12, //折线点的大小
            itemStyle: {
              normal: {
                color: "#FDC60C",
                borderColor: "#FDC60C",
                borderWidth: 1, //折线点内圈大小
                lineStyle: {
                  width: 3, //调整 线条的宽度  5已经很宽啦
                  color: "#FDC60C" //线条颜色
                }
              }
            }
          },
          {
            name: "本周",
            smooth: true,
            type: "line",
            symbolSize: 12, //折线点的大小
            // stack: "总还款",
            data: this.opinionData1,
            itemStyle: {
              normal: {
                color: "#5284FF",
                borderColor: "#5284FF",
                borderWidth: 1, //内圈大小
                lineStyle: {
                  width: 3, //调整 线条的宽度
                  color: "#5284FF" //线条颜色
                }
              }
            }
          }
        ]
      });
    }
  },
  //调用
  mounted() {
    
  }
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>