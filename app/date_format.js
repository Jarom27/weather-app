export class DateFormat{
    constructor(current_time){
        this.date = new Date(current_time);
        this.weekdays = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
        this.months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
    }
    getFormat(){
        return `${this.weekdays[this.date.getDay()]}, ${this.months[this.date.getMonth()]} ${this.date.getDate()}`
    }
}

