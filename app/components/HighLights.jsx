import AirPressureInfo from "./AirPressureInfo";
import HumidityInfo from "./HumidityInfo";
import VisibilityInfo from "./VisibilityInfo";
import WindInfo from "./WindInfo";

export default function HighLights() {
  return (
    <div className="flex flex-col">
        <h2>Today's Highlights</h2>
        <div className="flex flex-col md:grid md:grid-cols-2 w-3/4 justify-center align-middle md:gap-2 gap-4 mx-auto">
          <WindInfo></WindInfo>
          <HumidityInfo></HumidityInfo>
          <VisibilityInfo></VisibilityInfo>
          <AirPressureInfo></AirPressureInfo>
        </div>
    </div>
    
  )
}
