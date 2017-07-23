import {EventEmitter} from "events";

class ChatsStore extends EventEmitter{

constructor(){
    super();
    this.messages = [
        {
            content: "this is a message",
        },
        {
            content: "this is a message",
        },
        {
            content: "this is a message",
        },
        {
            content: "this is a message",
        },
        {
            content: "this is a message",
        }
    ]
}

getAll(){
    return this.messages;
}

getMessages(id){
        console.log("Getting chats");
        fetch("https://a093b88f.ngrok.io/stats/representative_messages/" + id, {
          headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
          }
        }).then(function(response) {
            return response.json()
        }).then(function(body) {
            console.log(body);
            this.messages = body.data;
            this.emit("change");
        }.bind(this));
}


}


const chatsStore = new ChatsStore;
window.chatsStore = chatsStore;

export default chatsStore;
