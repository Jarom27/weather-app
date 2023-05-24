import AirPressureInfo from "./AirPressureInfo";
import HumidityInfo from "./HumidityInfo";
import VisibilityInfo from "./VisibilityInfo";
import WindInfo from "./WindInfo";

export default function HighLights({city}) {
  return (
    <div className="flex flex-col">
        
        <div className="flex flex-col md:grid md:grid-cols-2 w-3/4 justify-center align-middle md:gap-2 gap-4 mx-auto">
          <WindInfo city={city}></WindInfo>
          <HumidityInfo city={city}></HumidityInfo>
          <VisibilityInfo city={city}></VisibilityInfo>
          <AirPressureInfo city={city}></AirPressureInfo>
        </div>
    </div>
    
  )
}
