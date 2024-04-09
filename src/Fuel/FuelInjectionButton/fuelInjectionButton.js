export default function FuelInjectionButton({fuelStatus,setFuelStatus}){
    return(
        <div>
            <button onClick={()=>{fuelStatus.hydrogen+fuelStatus.oxygen+10>100?console.log('Overflow'):setFuelStatus((e)=>{return {hydrogen:e.hydrogen+10,oxygen:e.oxygen}})}}>Fill Hydrogen</button>
            <button onClick={()=>{fuelStatus.hydrogen+fuelStatus.oxygen+10>100?console.log('Overflow'):setFuelStatus((e)=>{return {hydrogen:e.hydrogen,oxygen:e.oxygen+10}})}}>Fill Oxygen</button>
        </div>
    )
}