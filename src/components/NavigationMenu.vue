<template>
  <div
    class="leftbody-1"
    v-bind:class="[this.$store.state.isCollapse == true?'leftbodyclose':'leftbody']"
    :style="{height:screenHeight}"
  >
   
    <div class="scrollbar">
     <div>
        <img src="../assets/logo.png" style="height:4.7rem;width:16rem" />
      </div>
      <el-menu
        default-active="/"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        router
        background-color="RGB(33,42,57)"
        text-color="#fff"
        :collapse="this.$store.state.isCollapse"
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-s-claim" style="font-size:25px;"></i>
            <span slot="title">考勤管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/">考勤统计</el-menu-item>
            <el-menu-item index="/AttendanceCheck">查看考勤</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-edit-outline" style="font-size:25px;"></i>
            <span slot="title">信息管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="StudentInfo">学生信息管理</el-menu-item>
            <el-menu-item index="TeacherInfo">教师信息管理</el-menu-item>
            <el-menu-item index="CollectiveInfo">班级信息管理</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-tickets" style="font-size:25px;"></i>
            <span slot="title">申请审核</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="ApplyLeave">请假申请</el-menu-item>
            <el-menu-item index="LeaveStatus">审核查看</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">
            <i class="el-icon-s-custom" style="font-size:25px;"></i>
            <span slot="title">个人信息</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="ChangeSelf">个人信息修改</el-menu-item>
            <el-menu-item index="4-2">个人密码修改</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
         <el-submenu index="5">
          <template slot="title">
            <i class="el-icon-s-custom" style="font-size:25px;"></i>
            <span slot="title">课程信息</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="Curriculum">查看课程信息</el-menu-item>
            <el-menu-item index="4-2">查看考勤记录</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="6">
          <i class="el-icon-coin" style="font-size:25px;"></i>
          <span slot="title">数据导入</span>
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script>
export default {
  name: "navigation",
  data() {
    return {
      screenHeight: ""
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
  created() {
    this.screenHeight = window.screen.availHeight - 71 + "px";
    var nowDate = new Date("2020-02-02");//获取当前时间
    var datenew = new Date(nowDate.getTime()-48*60*60*1000)
    console.log(datenew +"," +nowDate)
  }
};
</script>

<style scoped>
.leftbody {
  width: 19%;
  background: RGB(33, 42, 57);
  overflow: auto;
  float: left;
  border: none;
}

.leftbodyclose {
  width: 4%;
  background: RGB(33, 42, 57);
  overflow: auto;
  float: left;
  border: none;
}

.scrollbar {
  width: 100%;
  margin: 0 auto;
}

.leftbody-1::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 5px; /*高宽分别对应横竖滚动条的尺寸*/
  height: 1px;
}
.leftbody-1::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: #535353;
}
.leftbody-1::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  background: #ededed;
}

.el-menu {
  border-right: 0px;
}
</style>