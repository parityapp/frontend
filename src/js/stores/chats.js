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
        }
    ];

    this.emit("change");
}


}


const chatsStore = new ChatsStore;
window.chatsStore = chatsStore;

export default chatsStore;
