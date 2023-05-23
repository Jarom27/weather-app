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
export async function getCurrent(){
    const API_KEY = process.env.API_KEY
    const  url  = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${features.city}`

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

