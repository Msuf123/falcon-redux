import Fuelbar from "../FuelBar/FuelBar";
import FuelInjectionButton from "./FuelInjectionButton/fuelInjectionButton";

export default function Fuel({fuelStatus,setFuelStatus}){
    return(
        <div className="fuelOptions">
            <div className="fuelbarStatus">
                <span>Fuel</span>
                <Fuelbar fuelStatus={fuelStatus}></Fuelbar>
            </div>
            <FuelInjectionButton fuelStatus={fuelStatus} setFuelStatus={setFuelStatus}></FuelInjectionButton>
        </div>
    )
}