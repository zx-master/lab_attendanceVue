<template>
  <div class="wholebody wholebody-1" :style="{height:screenHeight}">
    <div class="scrollbar">
      <el-tabs v-model="activeName" style="margin:16px;">
        <el-tab-pane label="课程考勤查看" name="first">
          <div style="width:100%;padding:1rem;border-bottom: 0.01rem solid #F5F6FA;">
            <el-input
              placeholder="请输入课程"
              v-model="courseValue"
              style="width:12rem;margin:0 0.3rem;"
              clearable
            ></el-input>

            <el-date-picker
              style="width:12rem;"
              v-model="courseStarttime"
              type="date"
              placeholder="选择日期"
              value-format="yyyy-MM-dd"
            ></el-date-picker>-
            <el-date-picker
              style="width:12rem;"
              v-model="courseEndtime"
              type="date"
              placeholder="选择日期"
              value-format="yyyy-MM-dd"
            ></el-date-picker>

            <el-button
              type="primary"
              style="margin:0 0.3rem;"
              icon="el-icon-search"
              @click="lookingforAttendanceByCourse"
            >查找</el-button>
          </div>
          <div style="padding:16px;">
            <el-table ref="filterTable" :data="tableData" style="width: 100%">
              <el-table-column
                prop="courseDate"
                label="日期"
                width="160"
                sortable
                column-key="courseDate"
              ></el-table-column>
              <el-table-column prop="courseNum" label="课程编号"></el-table-column>
              <el-table-column prop="courseName" label="课程名" width="190"></el-table-column>
              <el-table-column prop="courseClass" label="课程班级"></el-table-column>
              <el-table-column prop="courseManNum" label="课堂人数"></el-table-column>
              <el-table-column prop="lateNum" label="迟到人数"></el-table-column>
              <el-table-column prop="sickNum" label="病假人数"></el-table-column>
              <el-table-column prop="affairLeaveNum" label="事假人数"></el-table-column>
              <el-table-column prop="absenteeism" label="缺勤人数"></el-table-column>
            </el-table>
          </div>
        </el-tab-pane>
        <!-- <el-tab-pane label="班级考勤查看" name="second">
          <div style="width:100%;padding:1rem;border-bottom: 0.01rem solid #F5F6FA;">
            <el-input
              placeholder="请输入班级"
              v-model="collectiveValue"
              style="width:12rem;margin:0 0.3rem;"
              clearable
            ></el-input>

            <el-date-picker
              style="width:12rem;"
              v-model="collectiveStarttime"
              type="date"
              placeholder="选择日期"
              value-format="yyyy-MM-dd"
            ></el-date-picker>-
            <el-date-picker
              style="width:12rem;"
              v-model="collectiveEndtime"
              type="date"
              placeholder="选择日期"
              value-format="yyyy-MM-dd"
            ></el-date-picker>

            <el-button
              type="primary"
              style="margin:0 0.3rem;"
              icon="el-icon-search"
              @click="lookingforAttendanceByCollective"
            >查找</el-button>
          </div>
          <div style="padding:16px;">
            
          </div>
        </el-tab-pane> -->
        <el-tab-pane label="学生考勤查看" name="second">
          <div style="width:100%;padding:1rem;border-bottom: 0.01rem solid #F5F6FA;">
            <el-input
              placeholder="请输入学号"
              v-model="userNumber"
              style="width:12rem;margin:0 0.3rem;"
              clearable
            ></el-input>

            <el-date-picker
              style="width:12rem;"
              v-model="userIDStarttime"
              type="date"
              placeholder="选择日期"
              value-format="yyyy-MM-dd"
            ></el-date-picker>-
            <el-date-picker
              style="width:12rem;"
              v-model="userIDEndtime"
              type="date"
              placeholder="选择日期"
              value-format="yyyy-MM-dd"
            ></el-date-picker>

            <el-button
              type="primary"
              style="margin:0 0.3rem;"
              icon="el-icon-search"
              @click="lookingforAttendanceByUserID"
            >查找</el-button>
          </div>
          <div style="padding:16px;">
            <el-table :data="StudenttableData" style="width: 100%">
              <el-table-column label="日期">
                <template slot-scope="scope">
                  <i class="el-icon-time"></i>
                  <span style="margin-left: 10px">{{ scope.row.attendancetime }}</span>
                </template>
              </el-table-column>
              <el-table-column prop="name" label="姓名"></el-table-column>
              <el-table-column prop="majorName" label="专业"></el-table-column>
              <el-table-column label="课程">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top">
                    <p>课程名: {{ scope.row.courseList.courseName }}</p>
                    <p>课程编号: {{ scope.row.courseList.courseCode }}</p>
                    <div slot="reference" class="name-wrapper">
                      <el-tag size="medium">{{ scope.row.courseList.courseName }}</el-tag>
                    </div>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column prop="attendanceState" label="考勤情况" :formatter="formAttendance"></el-table-column>
            </el-table>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      screenHeight: "",
      courseStarttime: "",
      courseEndtime: "",
      collectiveStarttime: "",
      collectiveEndtime: "",
      userIDStarttime: "",
      userIDEndtime: "",
      courseValue: "",
      userNumber: "",
      collectiveValue: "",
      activeName: "second",
      tableData: [],
      StudenttableData: [],
      courseDatePeriod: {
        courseCode: "",
        starttime: "",
        endtime: ""
      },
      collectiveDatePeriod: {
        collectiveid: "",
        starttime: "",
        endtime: ""
      },
      userDatePeriod: {
        studentNum: "",
        starttime: "",
        endtime: ""
      }
    };
  },
  methods: {
    formAttendance(row, column, cellValue) {
      if (cellValue === 1) {
        return "正常";
      } else if (cellValue === 2) {
        return "迟到";
      }else if (cellValue === 3) {
        return "病假";
      }else if (cellValue === 4) {
        return "事假";
      }else if (cellValue === 5) {
        return "缺勤";
      }
    },
    filterTag(value, row) {
      return row.tag === value;
    },
    filterHandler(value, row, column) {
      const property = column["property"];
      return row[property] === value.substr(0, 10);
    },

    lookingforAttendanceByCourse() {
      this.courseDatePeriod.courseCode = this.courseValue;
      this.courseDatePeriod.starttime = this.courseStarttime;
      this.courseDatePeriod.endtime = this.courseEndtime;
      this.postRequest(
        "/attendance/getAttendanceFromCourse",
        this.courseDatePeriod
      ).then(msg => {
        if (msg) {
          console.log(msg);
          this.tableData = msg.data;
        }
      });
    },

    lookingforAttendanceByCollective() {
      console.log("班级");
      this.collectiveDatePeriod.collectiveid = this.collectiveValue;
      this.collectiveDatePeriod.starttime = this.collectiveStarttime;
      this.collectiveDatePeriod.endtime = this.collectiveEndtime;
      this.postRequest(
        "/attendance/getAttendanceFromClass",
        this.collectiveDatePeriod
      ).then(msg => {
        if (msg) {
          console.log(msg);
        }
      });
    },

    lookingforAttendanceByUserID() {
      console.log("userid");
      this.userDatePeriod.studentNum = this.userNumber;
      this.userDatePeriod.starttime = this.userIDStarttime;
      this.userDatePeriod.endtime = this.userIDEndtime;
      this.postRequest(
        "/attendance/getAttendanceFromUser",
        this.userDatePeriod
      ).then(msg => {
        if (msg) {
          console.log(msg);
          this.StudenttableData = msg.data;
        }
      });
    }
  },
  created() {
    this.screenHeight = window.screen.availHeight - 149 + "px";
  }
};
</script>

<style scoped>
.wholebody {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  overflow: auto;
  border: none;

  /* margin: 26px; */
  /* background:white; */
}

.scrollbar {
  width: 100%;
  margin: 0 auto;
  /* display: flex; */
  /* flex-wrap: wrap; */
  margin: 40px 60px;
  background: white;
  /* justify-content: center; */
  /* align-items: center; */
  /* align-content: center; */
}

.wholebody-1::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 5px; /*高宽分别对应横竖滚动条的尺寸*/
  height: 1px;
}
.wholebody-1::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: #535353;
}
.wholebody-1::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  background: #ededed;
}
</style>
