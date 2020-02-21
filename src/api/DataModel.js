class DataModel {

    ChatMsg(senderId, receiverId, msg, msgId) {
        this.senderId = senderId;
        this.receiverId = receiverId;
        this.msg = msg;
        this.msgId = msgId;
    }

    DataContent(action,ChatMsg,extend) {
        this.action = action;
        this.ChatMsg = ChatMsg;
        this.extend = extend;
    }

}

export default DataModel;


// export default {
    // ChatMsg (senderId,receiverId,msg,msgId) {
    // this.senderId = senderId;
    // this.receiverId = receiverId;
    // this.msg = msg;
    // this.msgId = msgId; 
    // },
    // DataContent(action,ChatMsg,extend) {
    //     this.action = action;
    //     this.ChatMsg = ChatMsg;
    //     this.extend = extend;
    // }
// }