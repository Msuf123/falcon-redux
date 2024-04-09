export default function Fuelbar({fuelStatus}){
    return(
        <div className='fuelBar'>
            <div className="fuelHydrogen"  style={{width:`${fuelStatus.hydrogen}%`}}></div>
            <div className="fuelOxygen" style={{width:`${fuelStatus.oxygen}%`}}></div>
        </div>
    )
}