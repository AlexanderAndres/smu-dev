import React, { useState, useEffect } from 'react';
import MapboxGL from 'mapbox-gl/dist/mapbox-gl.js';
import Marker from './marker/Marker';
import { getUserMarkers } from '../../services/getUserMarkers';

const NewMap = ({ accessToken = 'pk.eyJ1IjoiYmFsYW54Y2UiLCJhIjoiY2xjbTZucGZ5M2tlYTNvcDR6amhwbTh1eCJ9.wFC-K6LRK1r__17CIt_ypw', mapStyle, markersList }) => {
    const mapDesign = {
        height: '100vh',
        width: '100vw'
    }

    const [map, setMap] = useState(null);
    const [markers, setmarkers] = useState([])
    const markersAux = []

    useEffect(() => {
        if (!map) {
            MapboxGL.accessToken = accessToken;
            const newMap = new MapboxGL.Map({
                container: 'map',
                style: mapStyle,
                center: [-71.602222, -33.045556],
                zoom: 12
            });
            newMap.on('load', () => {
                setMap(newMap);
            });
        }

    }, [accessToken, map, mapStyle]);

    useEffect(() => {

    }, [markers]);

    useEffect(() => {
        if (map) {
            getUserMarkers().then((data) => {
                //console.log('Promise data:', data)
                data.forEach((dato) => {
                    markersAux.push({ ...dato, coordinates: [dato.longitude, dato.latitude] })
                })
                console.log('[NewMap.jsx] - Markers:', markersAux)
                setmarkers(markersAux);
            })
        }
    }, [map]);


    return (
        <div id="map" style={mapDesign}>
            {markers && markers.map(marker => (
                <Marker
                    key={marker.ceco}
                    coordinates={marker.coordinates}
                    onClick={marker.onClick}
                    popupContent={marker.popupContent}
                />
            ))}
        </div>
    );
};

export default NewMap;