const features = {
    city : "London",
    current_position : {
        latitude : "",
        longitude : ""
    },
    isChooseCurrentLocation : false
}
export function setCity(city_name){
    if(city_name !== undefined && city_name !== ""){
        features.city = city_name;
    }
}
export async function getCurrent(city){
    const API_KEY = process.env.API_KEY
    const  url  = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`

    try{
        const response = await fetch(url,{next:{revalidate: 60}})
        const current_weather = await response.json()
        console.log(current_weather)
        return current_weather;
    }
    catch{
        console.log("No se localizo la informacion")
    }
}
export async function getFutureForecast(city){
    const API_KEY = process.env.API_KEY;
    const url = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=3&aqi=no&alerts=no`
    const response = await fetch(url,{next:{
        revalidate: 60
    }})
    return response.json();
}
