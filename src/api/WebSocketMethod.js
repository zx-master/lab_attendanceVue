import DataModel from "./DataModel"
export default {
    //保证整个项目只有一个socket实例
    ws:null,  //Websocket实例
    init(onMessage,onError) {
        if(this.ws) this.ws.close();

        //实例化socket对象
        this.ws = new WebSocket("ws://localhost:8088/ws");

        //客户端接受消息
        this.ws.onmessage = event => {
            let message = JSON.parse(event.data);
            onMessage && onMessage(message);     //接受到消息回调
        };

        //出错
        this.ws.onerror = error => {
            onError && onError(error);
        };

        //关闭
        this.ws.onclose = () => {
            this.ws = null;
            console.log("websocket关闭!")
        };

        //连接成功
        this.ws.onopen = () =>{
            console.log("websocket连接");
            // var chatmsg =new this.$store.actions.ChatMsg("123456",null,null,null);
            // var dataContent =new this.$store.actions.DataContent(this.$store.state.CONNECT,chatmsg,null);
            var chatmsg = DataModel.ChatMsg("123",null,null,null);
            var dataContent = DataModel.DataContent(1,chatmsg,null);
            console.log(dataContent)
            this.ws.send(JSON.stringify(dataContent))
        }

    },
    send(msgObj) {
        //发送消息的时候触发
        console.log(msgObj);
        this.ws.send(JSON.stringify(msgObj));
    }
}