import { Lato, Raleway } from "next/font/google"
import Image from "next/image"
import { Suspense } from "react"
import { DateFormat } from "../date_format"
import { getCurrent } from "../Data"

const font_for_numbers = Raleway({subsets:["latin"]})
const font_for_degrees = Lato({subsets:["latin"],weight:"300"})

export default async function PreviewInfo({city}) {
    const current_weather = await getCurrent(city);
    const current_time = new DateFormat(current_weather.location.localtime)
    return (
        <div className="flex flex-col w-full">
            <Suspense fallback={<div>Cargando...</div>}>
            <div className="text-center text-9xl">
                <h1 className={font_for_numbers.className}>{current_weather.current.temp_c}<span className={font_for_degrees.className + " text-4xl"}>°C</span></h1>
                <h2 className={"mt-7 text-3xl "+font_for_numbers.className}>{current_weather.current.condition.text}</h2>
            </div>
            <div className="mt-8 text-white text-center leading-10">
                <p>Today  <span className="text-sm">&#9679;</span> <span>{current_time.getFormat()}</span></p>
                <p className="flex justify-center align-middle gap-1"><span className="flex align-middle"><Image src="/location_pin.svg" width={15} height={15} alt="Location pin"></Image></span>{current_weather.location.name}</p>
            </div>
            </Suspense>
        </div>
    )
}
