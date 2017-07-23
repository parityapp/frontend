import {EventEmitter} from "events";

class HottopicsStore extends EventEmitter{

constructor(){
    super();
    this.topic =[
       "123", "123", "123"
    ]
}

getAll(){
    return this.topic;
}

getHottopics(id){
    console.log("getting user");
    fetch("https://a093b88f.ngrok.io/stats/hot_topics/" + id, {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    }).then(function(response) {
        return response.json()
    }).then(function(body) {
        console.log(body);
        this.topic = body.data;
        this.emit("change");
    }.bind(this));
}

}

const hottopicsStore = new HottopicsStore;
window.hottopicsStore = hottopicsStore;

export default hottopicsStore;
