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

getHottopics(){
    return this.topic;
}

}

const hottopicsStore = new HottopicsStore;
window.hottopicsStore = hottopicsStore;

export default hottopicsStore;
