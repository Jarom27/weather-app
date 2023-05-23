import AirPressureInfo from "./AirPressureInfo";
import HumidityInfo from "./HumidityInfo";
import VisibilityInfo from "./VisibilityInfo";
import WindInfo from "./WindInfo";

export default function HighLights() {
  return (
    <div className="flex flex-col justify-center align-middle gap-4">
        <h2>Highlights</h2>
        <WindInfo></WindInfo>
        <HumidityInfo></HumidityInfo>
        <VisibilityInfo></VisibilityInfo>
        <AirPressureInfo></AirPressureInfo>
    </div>
  )
}
