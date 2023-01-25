import axios from 'axios';

export const getUserMarkers = () => {
    const url = "https://smu-api.herokuapp.com/api/local";

    return fetch(url).then(resp => resp.json()).then(data => {
        return data.data
    })

}