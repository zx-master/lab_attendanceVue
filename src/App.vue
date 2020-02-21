<template>
  <div id="app" :style="{height:screenHeight}">
    <navigation></navigation>
    <div
      v-bind:class="[this.$store.state.isCollapse == true?'rightsizeclose':'rightsize']"
      style="width:96%;"
    >
      <headerlabel></headerlabel>
      <router-view />
    </div>
  </div>
</template>

<script>
import navigation from "../src/components/NavigationMenu";
import headerlabel from "../src/components/HeaderLabel";
import WSocket from "../src/api/WebSocketMethod";
export default {
  name: "App",
  data() {
    return {
      screenHeight: "",
      messageList: []
    };
  },
  components: {
    navigation,
    headerlabel
  },
  created() {
    this.screenHeight = window.screen.availHeight - 71 + "px";
    WSocket.init(
      //收到消息后，将消息存储到数据中
      message => {
        console.log(message.msg)
      },
      error => {
        console.log(error)
      }
    );
    WSocket.send("123123")
  },

  methods: {

  }
};
</script>

<style>
#app {
  width: 100%;
  display: flex;
  background: RGB(245, 246, 250);
}

.rightsize {
  width: 81%;
}

.rightsizeclose {
  width: 96%;
}
</style>
