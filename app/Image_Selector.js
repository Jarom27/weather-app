
export function getImageByWeatherKind(weather){
    console.log(weather)
    let image = ""
    switch(weather){
        case "Clear":
            image = "clear"
            break;
        case "Sunny":
            image = "clear"
            break;
        case "Light rain":
            image = "clear"
            break;
        case "Partly cloudy":
            image = "light_cloud"
            break;
        case "Snow":
            image = "snow"
            break;
        case "Shower":
            image = "shower"
            break;
        case "Hail":
            image = "hail"
            break;
        case "Thunderstorm":
            image = "thunderstorm"
            break;
        case "Sleet":
            image = "sleet"
            break;
        case "Light cloud":
            image = "light_cloud"
            break;
        case "Heavy rain":
            image = "heavy_rain"
            break;
        case "Heavy cloud":
            image = "heavy_cloud"
            break;
    }
    return `/images/${image}.png`
}