import {EventEmitter} from "events";

class UserStore extends EventEmitter{

constructor(){
    super();
    this.user = {name: "Swampneel"};
}

getAll(){
    return this.user;
}

getUser(id){
    this.user = {name: "Pierpaolo"};
    this.emit("change");
}


}


const userStore = new UserStore;
window.userStore = userStore;

export default userStore;
