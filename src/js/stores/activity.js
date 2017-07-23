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

getActivityFromApi(id){
    this.activity = [
        {name: '09:00', uv: 1231},
        {name: '09:30', uv: 2342},
        {name: '10:00', uv: 4563},
        {name: '10:30', uv: 3456},
        {name: '11:00', uv: 4564},
        {name: '11:30', uv: 4643},
        {name: '12:00', uv: 4565},
    ]

    this.emit("change");
}


}


const activityStore = new ActivityStore;
window.activityStore = activityStore;

export default activityStore;
