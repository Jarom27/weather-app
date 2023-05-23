export async function getCurrent(){
    const API_KEY = process.env.API_KEY
    console.log(API_KEY)
    const  url  = 'https://api.weatherapi.com/v1/current.json?key='+API_KEY+'&q='+"helsinki"

    try{
        const response = await fetch(url)
        const current_weather = await response.json()
        console.log(current_weather)
        return current_weather;
    }
    catch{
        console.log("No se localizo la informacion")
    }
}