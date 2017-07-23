import {EventEmitter} from "events";

class HottopicsStore extends EventEmitter{

constructor(){
    super();
    this.topic =[
       {
   	       text: "Topic 1."
       },
       {
   	       text: "Topic 2."
       },
       {
   	       text: "Topic 3."
       }
    ]
}

getAll(){
    return this.topic;
}

getHottopics(id){
    this.topic = [
       {
   	       text: "new Topic 1."
       },
       {
   	       text: "new Topic 2."
       },
       {
   	       text: "new Topic 3."
       }
    ]

    this.emit("change");
}

}

const hottopicsStore = new HottopicsStore;
window.hottopicsStore = hottopicsStore;

export default hottopicsStore;
