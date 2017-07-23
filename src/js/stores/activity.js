import {EventEmitter} from "events";

class ActivityStore extends EventEmitter{

constructor(){
    super();
    this.activity = [
        {time: '09:00', rate: 4000},
        {time: '09:30', rate: 3000},
        {time: '10:00', rate: 2000},
        {time: '10:30', rate: 2780},
        {time: '11:00', rate: 1890},
        {time: '11:30', rate: 2390},
        {time: '12:00', rate: 9000},
    ]
}

getAll(){
    return this.activity;
}

getActivityFromApi(id){
    console.log("getting activity");
    fetch("https://a093b88f.ngrok.io/stats/pulse/" + id, {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    }).then(function(response) {
        return response.json()
    }).then(function(body) {
        console.log("Activity received");
        console.log(body);
        this.activity = body.data
        this.emit("change");
    }.bind(this));
}


}


const activityStore = new ActivityStore;
window.activityStore = activityStore;

export default activityStore;
