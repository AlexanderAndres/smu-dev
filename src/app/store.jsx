import { configureStore } from "@reduxjs/toolkit"
import markersReducer from "./slicer/markersSlice"
import localsReducer from './slicer/localsSlice'
import authSlice from "./slicer/authSlice";


const store = configureStore({
    reducer: {
        markers: markersReducer,
        locals: localsReducer,
        auth: authSlice
    },
});

export default store;
