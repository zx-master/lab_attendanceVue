import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//创建Vuex实例
const store = new Vuex.Store({
    state:{
        isCollapse:false,              
        attendanceCkeckButton:0,
        CONNECT:1,
        CHAT:2,
        SIGNED:3,
        KEEPALIVE:4
    }
})

export default store   //导出store