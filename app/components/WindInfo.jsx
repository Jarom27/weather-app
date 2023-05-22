import { Raleway } from "next/font/google"

const font = Raleway({subsets:["latin"]})
export default function WindInfo() {
  return (
    <div className="mx-auto text-center py-4 bg-bg-indigo-principal w-4/5 max-w-xs ">
        <h3>Wind status</h3>
        <h1 className={"text-5xl font-bold " + font.className}>7 <span className="text-2xl font-extralight">mph</span></h1>
        <p>WSW</p>
    </div>
  )
}
