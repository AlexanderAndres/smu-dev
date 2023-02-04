import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
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

export const handleMarkers = (locals) => {
    console.log('Locals to set markers', locals)
}

export const fetchMarkers = createAsyncThunk('markers/fetchRut', async (user) => {
    //console.log('User rut to fetch:', user)
    const response = await axios.get(`https://smu-api.herokuapp.com/api/local/rut/${user}`)
        .then((resp) => {
            const geoJson = {
                'type': 'geojson',
                'data': {
                    "type": "FeatureCollection",
                    "features": []
                }
            }

            resp.data.data.forEach((local) => {
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
            //console.log('geoJson:', geoJson)
            return geoJson
        })
    return response

    /*
        resp.data.data.forEach((local) => {
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
    })
    */
    //console.log('Response from markers:', response.data.data)
    //const response = await axios.post('/api/login', credentials)
})

export default markersSlice.reducer;
