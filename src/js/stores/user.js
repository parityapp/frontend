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
    fetch("https://a093b88f.ngrok.io/stats/most_active/" + id, {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    }).then(function(response) {
        return response.json()
    }).then(function(body) {
        console.log(body);
        console.log( body.data.length);
        this.user = {name: body.data[body.data.length-1]};
        this.emit("change");
    }.bind(this));
}
}


const userStore = new UserStore;
window.userStore = userStore;

export default userStore;
