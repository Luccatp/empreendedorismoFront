import { MEASUREMENTS_ACTION_TYPES } from "./measurements.types";



export const measurementsReducer = (state = {}, action: { type: any; payload: any; }):any => {
    const {type, payload } = action

    switch(type) {
        case MEASUREMENTS_ACTION_TYPES.SET_MEASUREMENTS:
            return { ...state, state:payload}
        default:
            return state
    }
}