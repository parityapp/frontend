import {EventEmitter} from "events";

class SummaryStore extends EventEmitter{

constructor(){
    super();
    this.summary = {summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."};
}

getSummary(){
    return this.summary;
}

}

const summaryStore = new SummaryStore;
window.summary = summaryStore;

export default summaryStore;
