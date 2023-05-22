import { Lato, Raleway } from "next/font/google"
import Image from "next/image"

const font_for_numbers = Raleway({subsets:["latin"]})
const font_for_degrees = Lato({subsets:["latin"],weight:"300"})

export default function PreviewInfo() {
    return (
        <div className="flex flex-col w-full">
            <div className="text-center text-9xl">
                <h1 className={font_for_numbers.className}>15<span className={font_for_degrees.className + " text-4xl"}>°C</span></h1>
                <h2 className={"mt-7 text-3xl "+font_for_numbers.className}>Shower</h2>
            </div>
            <div className="mt-8 text-white text-center leading-10">
                <p>Today  <span className="text-sm">&#9679;</span> <span>Fri, 5 jun</span></p>
                <p className="flex justify-center align-middle gap-1"><span className="flex align-middle"><Image src="/location_pin.svg" width={15} height={15} alt="Location pin"></Image></span>Helsinki</p>
            </div>
        </div>
    )
}
