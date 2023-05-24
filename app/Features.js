class Features{
    constructor(city){
        this.city = city;
        
        if(typeof Features.instance === "object")
            return Features.instance

        Features.instance = this
        return this;
    }
    setCity(city_name){
        this.city = city_name;
        console.log(this.city)
    }
}

export const features = new Features("London")
