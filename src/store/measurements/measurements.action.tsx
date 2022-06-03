import createAction from "../../utils/reducer/reducer.utils"
import { MEASUREMENTS_ACTION_TYPES } from "./measurements.types"

export const adjustMeasurements = (measurements:any) => {
    console.log(measurements)
   return createAction(MEASUREMENTS_ACTION_TYPES.SET_MEASUREMENTS, measurements)
    
}