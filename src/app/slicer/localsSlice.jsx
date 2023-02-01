import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {}

const localsSlice = createSlice({
    name: "locals",
    initialState,
    reducers: {
        setLocalHeader: (state, action) => {
            return { ...state, fetch: action.payload }
        },
    },
});

export const { setLocalHeader } = localsSlice.actions;

export const fetchLocalHeaders = () => async (dispatch) => {
    try {
        await axios.get("https://smu-api.herokuapp.com/api/local").then((data) => {
            //dispatch(setMarkers(data));
            console.log('Consulta locales:', data)
        });
    } catch (error) {
        console.log(error);
    }
};

export default localsSlice.reducer;
