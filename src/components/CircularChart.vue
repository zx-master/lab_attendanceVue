<template>
  
      <div id="pie1" style="border: 0.01rem solid #afb3bb;">
        <!-- 为 ECharts 准备一个具备大小（宽高）的 DOM -->
        <div id="main1" style="float:left;width:100%;height:400px;background:white;"></div>
      </div>
    
</template>
<script>
// 引入基本模板
let echarts = require("echarts/lib/echarts");
// 引入饼状图组件
require("echarts/lib/chart/pie");
// 引入提示框和title组件
require("echarts/lib/component/tooltip");
require("echarts/lib/component/title");

export default {
  data() {
    return {
      opinionData1: [
        { name: "16级", value: "5" },
        { name: "17级", value: "5" },
        { name: "18级", value: "6" },
        { name: "19级", value: "7" },
      ],
      datePeriod:{
        starttime:"2020-02-09",
        endtime:"2020-02-14"
      },
      directory:[]
    };
  },
  created() {  
    this.postRequest("/attendance/selectAbsenteeism",this.datePeriod).then(msg=>{
      if(msg) {
        this.opinionData1 = msg.data;
        for(var i = 0;i<this.opinionData1.length;i++){
          this.directory.push(this.opinionData1[i].name)
        }
        this.initData();
      }
    })
  },
 
  methods: {
    //初始化数据
    initData() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById("main1"));
      // 绘制图表
      myChart.setOption({
        title: {
          text: "各年级缺勤占比", //主标题
          x: "left", //x轴方向对齐方式
          padding: [20,30,20,30]
        },
        tooltip: {
          show:true,
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        grid:{
          left: "2%",
          right: "8%",
          bottom: "3%",
          containLabel: true
        },
        legend: [{
          selectedMode:true, 
          // top: '100%',
           data: this.directory,
          // orient: "vertical",
          bottom: "bottom",
          // data: this.opinion
        }],
        series: [
          {
            name: "数据来源",
            type: "pie",
            radius: ["55%", "70%"],
            center: ["50%", "50%"],
            data: this.opinionData1,
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      });
    }
  }
};
</script>
