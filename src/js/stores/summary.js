import {EventEmitter} from "events";

class SummaryStore extends EventEmitter{

constructor(){
    super();
    this.summary = {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        channel: "Town Square"
    };
}

getSummary(id){
    this.summary = {
        text: "a new summary",
        channel: "Town square"
    }
    this.emit("change");
}

getAll(){
    return this.summary;
}
}

const summaryStore = new SummaryStore;
window.summaryStore = summaryStore;

export default summaryStore;
