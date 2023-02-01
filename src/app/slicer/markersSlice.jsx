import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {}

const markersSlice = createSlice({
    name: "markers",
    initialState,
    reducers: {
        setMarkers: (state, action) => {
            return { ...state, fetch: action.payload }
        },
    },
});

export const { setMarkers } = markersSlice.actions;

export const fetchMarkers = () => async (dispatch) => {
    try {
        await axios.get("https://smu-api.herokuapp.com/api/local").then((data) => {
            //console.log('Promesa:', data.data.data)

            const geoJson = {
                'type': 'geojson',
                'data': {
                    "type": "FeatureCollection",
                    "features": []
                }
            }

            data.data.data.forEach((local) => {
                geoJson.data.features.push({
                    "type": "Feature",
                    "properties": local,
                    "geometry": {
                        "coordinates": [
                            `${local.longitude}`,
                            `${local.latitude}`
                        ],
                        "type": "Point"
                    }
                });
            });
            //console.log('GeoJson:', geoJson)
            dispatch(setMarkers(geoJson));
        });

        //dispatch(setMarkers(response.data.data));
    } catch (error) {
        console.log(error);
    }
};

export default markersSlice.reducer;
