import AirPressureInfo from "./AirPressureInfo";
import HumidityInfo from "./HumidityInfo";
import VisibilityInfo from "./VisibilityInfo";
import WindInfo from "./WindInfo";

export default function HighLights({city}) {
  return (
    <div className="flex flex-col justify-start w-full mx-auto gap-3">
        <h2 className=" text-3xl">Today's Highlights</h2>
        <div className="flex flex-col md:grid md:grid-cols-2 w-full lg:w-3/4 justify-center align-middle md:gap-2 gap-3 ">
          <WindInfo city={city}></WindInfo>
          <HumidityInfo city={city}></HumidityInfo>
          <VisibilityInfo city={city}></VisibilityInfo>
          <AirPressureInfo city={city}></AirPressureInfo>
        </div>
    </div>
    
  )
}
