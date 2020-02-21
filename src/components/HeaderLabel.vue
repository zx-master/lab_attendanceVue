<template>
  <div class="headboay">

    <div style="width:100%;">
    <div class="label" @click="shownavigation">
      <img src="../assets/more.png" style="width:41px;height:41px;margin:10px 10px 10px 15px;" />
    </div>
    <div class="headsource">
      <img src="../assets/source.png" style="width:21px;height:21px;margin:20px 20px 20px 30px;" />
    </div>
    <div class="headsourceinput">
      <mu-col >
        <mu-auto-complete v-model="value1"></mu-auto-complete>
      </mu-col>
    </div>
    </div>


    <div class="headsource"  style="border-right: 0.01rem solid #afb3bb;border-left: 0.01rem solid #afb3bb;">
      <el-badge :value="12" class="item" type="primary">
        <img src="../assets/notice.png" style="width:23px;height:23px;margin:10px 20px 20px 25px;margin-left:25px;" />
        </el-badge>
    </div>
    <div class="myself">
       <div class="block" style="margin:5px 12px 0 15px;"><el-avatar shape="square" :size="39" :src="squareUrl"></el-avatar></div>
    </div>
    <div class="myself">
      <strong><p>未登录</p></strong>
    </div>
    <div class="myself">
       <el-popover
    placement="bottom"
    title="标题"
    width="200"
    trigger="click"
    content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
    <el-button slot="reference" style="border: none;background-color: transparent;outline: none;padding:0px;">
      <img src="../assets/down.png" style="width:12px;height:12px;margin:25px 20px 20px 10px;"/>
    </el-button>
  </el-popover>
      
    </div>
    
  </div>
</template>

<script>
export default {
  name: "headerlabel",
  data() {
    return {
      squareUrl: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
      isCollapse: true,
      value1:""
    };
  },
  methods: {
    shownavigation() {
      this.$store.state.isCollapse = !this.$store.state.isCollapse;
    }
  }
};
</script>

<style scoped>
.headboay {
  width: 100%;
  height: 4.7rem;
  background: white;
  display: flex;
   justify-content:space-between;
}

.label {
  width: 73px;
  height: 100%;
  float: left;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-right: 0.01rem solid #afb3bb;
}

.headsource {
  width: 73px;
  height: 100%;
  float: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.headsourceinput{
    width: 50%;
    height: 100%;
    margin-top: 17px;
}

.col{
position: static ;
}

.item {
  margin-top: 0.8rem;
  margin-right: 1.5rem;
}

.myself {
  /* width: 10rem; */
  display: flex;
  flex-direction: column;
  justify-content: center;

}

p{
  /* width:100px; */
  word-break:keep-all;
  white-space:nowrap;     
}
</style>