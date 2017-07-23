import {EventEmitter} from "events";

class SummaryStore extends EventEmitter{

constructor(){
    super();
    this.summary = {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    };

    this.name = ""
}

getSummary(id){
    console.log("getting summary");
    fetch("https://a093b88f.ngrok.io/stats/summary/" + id, {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    }).then(function(response) {
        return response.json()
    }).then(function(body) {
        console.log(body);
        this.summary.text = body.data.summary;
        this.emit("change");
    }.bind(this));
}


getAll(){
    return this.summary;
}

setName(id){
    var obj = JSON.parse(localStorage.getItem('channels'));
    for (var i = 0; i < obj.length; i++){
        if (obj[i].id == id){
            this.name = obj[i].name;
        }
    }
    this.emit("nameChange");
}

getName(){
    return this.name;
}

}

const summaryStore = new SummaryStore;
window.summaryStore = summaryStore;

export default summaryStore;
