import {EventEmitter} from "events";

class ActivityStore extends EventEmitter{

constructor(){
    super();
    this.activity = [
            {name: '09:00', uv: 4000},
            {name: '09:30', uv: 3000},
            {name: '10:00', uv: 2000},
            {name: '10:30', uv: 2780},
            {name: '11:00', uv: 1890},
            {name: '11:30', uv: 2390},
            {name: '12:00', uv: 9000},
    ]
}

getAll(){
    return this.activity;
}

getActivityFromApi(){
    this.activity.push(
        {name: '09:00', uv: 1234},
        {name: '09:00', uv: 2345},
        {name: '09:00', uv: 3454},
        {name: '09:00', uv: 2344},
        {name: '09:00', uv: 2344},
    );

    this.emit("change");
}


}


const activityStore = new ActivityStore;
window.activityStore = activityStore;

export default activityStore;
