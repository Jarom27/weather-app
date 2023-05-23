import { Raleway } from "next/font/google"
import { getCurrent } from "../Data"
import { Suspense } from "react";
const font = Raleway({subsets:["latin"]})

export default async function WindInfo() {
    const current_time = await getCurrent();

    return (
        <div className="mx-auto text-center py-4 bg-bg-indigo-principal w-4/5 max-w-xs ">
            <h3>Wind status</h3>
            <Suspense fallback={<div>Cargando...</div>}>
                <h1 className={"text-5xl font-bold text-white " + font.className}>{current_time.current.wind_mph} <span className="text-2xl font-extralight">mph</span></h1>
                <p>{current_time.current.wind_dir}</p>
            </Suspense> 
        </div>
    )
}
