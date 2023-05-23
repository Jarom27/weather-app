export function getImageByWeatherKind(weather){
    let arreglo = weather.split(" ");
    let image_src = "";
    if(arreglo.lenght != 1){
        image_src = arreglo[0] +"_"+ arreglo[1]
    }
    else{
        image_src = arreglo[0];
    }
    return `/images/${image_src.toLowerCase()}.png`
}