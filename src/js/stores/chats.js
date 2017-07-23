import {EventEmitter} from "events";

class ChatsStore extends EventEmitter{

constructor(){
    super();
    this.messages = [
        {
            text: "this is a message"
        },
        {
            text: "this is a message also"
        },
        {
            text: "this is a message also"
        },
        {
            text: "this is a message also"
        },
        {
            text: "this is a message also"
        }
    ]
}

getAll(){
    return this.messages;
}

getMessages(id){
    this.messages = [
        {
            text: "this is a new message"
        },
        {
            text: "this is a new message"
        },
        {
            text: "this is a new message"
        },
        {
            text: "this is a new message"
        },
        {
            text: "this is a new message"
        }];
        // console.log("Getting chats");
        // fetch("https://a093b88f.ngrok.io/stats/representative_messages/" + id, {
        //   headers: {
        //     'Authorization': 'Bearer ' + localStorage.getItem('token')
        //   }
        // }).then(function(response) {
        //     return response.json()
        // }).then(function(body) {
        //     console.log(body);
        //
        //     this.emit("change");
        // }.bind(this));

    this.emit("change");
}


}


const chatsStore = new ChatsStore;
window.chatsStore = chatsStore;

export default chatsStore;
