<template>
  <div class="wholebody wholebody-1" :style="{height:screenHeight}">
    <div class="scrollbar">
      <div style="height:93%;width: 95%;margin: 1rem auto;">
        <el-table
          :data="tableData.filter(data => !search || data.username.toLowerCase().includes(search.toLowerCase()) || data.userNumber.toLowerCase().includes(search.toLowerCase())
          || data.majorName.toLowerCase().includes(search.toLowerCase()) || data.collective.toLowerCase().includes(search.toLowerCase()) )"
          style="width: 100%"
        >
          <el-table-column label="姓名" prop="username"></el-table-column>
          <el-table-column label="学号" prop="userNumber"></el-table-column>
          <el-table-column label="班级" prop="collective"></el-table-column>
          <el-table-column label="专业" prop="majorName"></el-table-column>
          <el-table-column label="邮箱" prop="email"></el-table-column>
          <el-table-column align="right">
            <template slot="header" slot-scope="scope">
              <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
            </template>
            <template slot-scope="scope">
              <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
              <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

  <script>
export default {
  data() {
    return {
      tableData: [],
      search: ""
    };
  },
  mounted() {
    this.getRequest("/user/getStudentUser").then(msg => {
      if (msg) {
        console.log(msg.data);
        this.tableData = msg.data;
      }
    });
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
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
}

.scrollbar {
  width: 100%;
  margin: 0 auto;
  margin: 40px 60px;
  background: white;
}

.wholebody-1::-webkit-scrollbar {
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