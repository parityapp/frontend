import {EventEmitter} from "events";

class SummaryStore extends EventEmitter{

constructor(){
    super();
    this.summary = {summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."};
}

getSummary(){
    this.summary = {
        summary: "a new summary"
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
