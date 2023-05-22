import AirPressureInfo from "./AirPressureInfo";
import HumidityInfo from "./HumidityInfo";
import VisibilityInfo from "./VisibilityInfo";
import WindInfo from "./WindInfo";

export default function HighLights() {
  return (
    <div className="flex flex-col justify-center align-middle gap-4">
        <WindInfo></WindInfo>
        <HumidityInfo></HumidityInfo>
        <VisibilityInfo></VisibilityInfo>
        <AirPressureInfo></AirPressureInfo>
    </div>
  )
}
