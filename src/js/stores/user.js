import {EventEmitter} from "events";

class UserStore extends EventEmitter{

constructor(){
    super();
    this.user = {name: "Swampneel"};
}

getAll(){
    return this.user;
}

getUser(){
    this.user = {name: "Pierpaolo"};
    this.emit("change");
}


}


const userStore = new UserStore;
window.userStore = userStore;

export default userStore;
