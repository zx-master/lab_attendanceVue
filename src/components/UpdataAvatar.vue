<template>
  <div id="updataAvatar">
    <el-avatar :size="100" :src="user_avatar"></el-avatar>
    <el-button
        type="success"
        plain
        class="updataAvataBtn"
        size="mini"
        round
        @click="toggleShow"
      >修改头像</el-button>
      <!-- <input type="file" ref="fileInput" class="file" accept="image/*" @change="change($event)" style="display: none"> -->
    <!-- <button class="btn" @click="toggleShow">设置头像</button> -->
    <!-- <my-upload
      @crop-success="cropSuccess"
      @crop-upload-success="cropUploadSuccess"
      @crop-upload-fail="cropUploadFail"
      v-model="show"
      :width="200"//接受图片的宽高，默认为200
      :height="200"
      img-format="png"
      :size="size"
      langType="zh"
      :noRotate="false"
      field="Avatar1"//上传输入文件名，用于服务器端获取文件流。
      url="https://httpbin.org/post"//服务器上传路径，如果是空的不会上传
    ></my-upload> -->
    <my-upload
      @crop-success="cropSuccess"
      @crop-upload-success="cropUploadSuccess"
      @crop-upload-fail="cropUploadFail"
      v-model="show"
      :width="100"
      :height="100"
      img-format="jpg"
      :size="size"
      langType="zh"
      :noRotate="false"
      field="Avatar1"
      url=""
    ></my-upload>
  </div>
</template>

<script>
import 'babel-polyfill'
import myUpload from "vue-image-crop-upload";
export default {
  props:{
    user_avatar:String
  },
  data() {
    return {
      imgDataUrl: "",//用于存储剪切完图片的base64Data和显示回调图片
      show: false,//剪切框显示和隐藏的flag
      size: 2.1
    };
  },
  components: {
    "my-upload": myUpload
  },
  mounted(){
    console.log('111',this.user_avatar)
  },
  methods: {
    toggleShow() {
      this.show = !this.show;
    },
    // 图像裁剪成功，参数（imageDataUrl，字段
    cropSuccess(imgDataUrl, field) {
      console.log("-------- crop success --------", imgDataUrl, field);
      console.log(1111,imgDataUrl,field)
      // imgDataUrl是经过base64编码的图像
      // 裁剪成功修改父组建头像的值
      this.$emit('updataAvatar',imgDataUrl)
    },
    //上传成功回调
    cropUploadSuccess(jsonData, field) {
      console.log("-------- upload success --------");
      this.imgDataUrl = jsonData.files.Avatar1;
      console.log(jsonData);
      console.log("field: " + field);
    },
    //上传失败回调
    cropUploadFail(status, field) {
      console.log("-------- upload fail --------");
      console.log("上传失败状态" + status);
      console.log("field: " + field);
    }
  }
};
</script>