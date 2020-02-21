<template>
  <div class="wholebody wholebody-1" :style="{height:screenHeight}">
    <div class="scrollbar">
      <div style="height:93%;width: 60%;margin: 3rem auto;">
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="请假原因" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="请假类型" prop="region">
            <el-select v-model="ruleForm.region" placeholder="请选择请假类型">
              <el-option label="事假" value="shanghai"></el-option>
              <el-option label="病假" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="请假日期" required>
            <el-col :span="11">
              <el-form-item prop="date1">
                <el-date-picker
                  type="date"
                  placeholder="选择开始日期"
                  v-model="ruleForm.date1"
                  style="width: 100%;"
                ></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col class="line" :span="1" style="display: flex;justify-content: center;">-</el-col>
            <el-col :span="11">
              <el-form-item prop="date2">
                <el-date-picker
                  type="date"
                  placeholder="选择结束日期"
                  v-model="ruleForm.date2"
                  style="width: 100%;"
                ></el-date-picker>
              </el-form-item>
            </el-col>
          </el-form-item>

          <el-form-item label="请假材料" prop="desc">
            <el-upload
              class="upload-demo"
              drag
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :before-remove="beforeRemove"
              multiple
              :limit="3"
              :on-exceed="handleExceed"
              :file-list="fileList"
            >
              <i class="el-icon-upload"></i>
              <div class="el-upload__text">
                将图片拖到此处，或
                <em>点击上传</em>
              </div>
            </el-upload>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      screenHeight: "",
      ruleForm: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "将文件名放到这个位置",
        fileList: [
        ]
      },
      rules: {
        name: [
          { required: true, message: "请输入请假原因", trigger: "blur" },
          { min: 5, max: 50, message: "长度在 5 到 50 个字符", trigger: "blur" }
        ],
        region: [
          { required: true, message: "请选择请假类型", trigger: "change" }
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择请假开始日期",
            trigger: "change"
          }
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "请选择请假结束日期",
            trigger: "change"
          }
        ],
        desc: [{ required: true, message: "请上传请假材料", trigger: "blur" }]
      }
    };
  },
  created() {
    this.screenHeight = window.screen.availHeight - 149 + "px";
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${
          files.length
        } 个文件，共选择了 ${files.length + fileList.length} 个文件`
      );
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    }
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
