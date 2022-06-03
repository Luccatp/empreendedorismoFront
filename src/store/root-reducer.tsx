import { combineReducers } from "@reduxjs/toolkit";
import { measurementsReducer } from "./measurements/measurements.reducer";


export const rootReducer = combineReducers({
    measurements: measurementsReducer
})