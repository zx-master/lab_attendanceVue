<template>
  <div class="wholebody wholebody-1" :style="{height:screenHeight}">
    <div class="scrollbar">
    <div>
        123
    </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      screenHeight: ""
    };
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
