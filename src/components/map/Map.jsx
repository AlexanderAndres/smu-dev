import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl'
import { createRoot } from 'react-dom/client';
import { getUserMarkers } from '../../services/getUserMarkers';
import { useNavigate } from 'react-router-dom';
import Loader from '../loader/Loader';
import Navbar from '../navbar/Navbar';

import './map.css'

import MarkerUnimarc from '../../Markers/MarkerUnimarc';
import MarkerAlvi from '../../Markers/MarkerAlvi';
import MarkerSuper10 from '../../Markers/MarkerSuper10';

mapboxgl.accessToken = 'pk.eyJ1IjoiYmFsYW54Y2UiLCJhIjoiY2xjbTZucGZ5M2tlYTNvcDR6amhwbTh1eCJ9.wFC-K6LRK1r__17CIt_ypw'

const Marker = ({ onClick, children, feature }) => {
    const _onClick = () => {
        onClick(feature.properties.description);
    };

    return (
        <button onClick={_onClick} className="marker">
            {children}
        </button>
    );
};

const Map = () => {
    const mapContainer = useRef(null);
    const [map, setMap] = useState(null);

    const [lng, setLng] = useState(-71.5433);
    const [lat, setLat] = useState(-33.0029);
    const [zoom, setZoom] = useState(6);

    const [locales, setLocales] = useState({})
    const [loading, setLoading] = useState(true)
    const [mapLoading, setMapLoading] = useState(true)
    const [popUpInfo, setPopupInfo] = useState(null)

    const [coordinates, setCoordinates] = useState(null);

    const navigate = useNavigate();

    var coord = [];

    useEffect(() => {
        // Here was the fetch
        setTimeout(() => {
            getUserMarkers().then((data) => {
                //console.log('Promesa:', data)

                const geoJson = {
                    'type': 'geojson',
                    'data': {
                        "type": "FeatureCollection",
                        "features": []
                    }
                }
                data.forEach((local) => {
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
                setLocales(geoJson)
                setLoading(false)

            })
        }, 1000);

    }, []);

    useEffect(() => {
        //console.log('Locales...:', locales)
        if (loading == false) {
            const jump = locales.data.features.find((elem) => elem)
            const map = new mapboxgl.Map({
                container: mapContainer.current,
                style: 'mapbox://styles/balanxce/clct3r28c000314n7kkbug9o9',
                center: jump.geometry.coordinates,
                //center: [-75.28976354489966, -35.30218725127498],
                zoom: 14
            })
            //console.log('Elem:', jump.geometry.coordinates)
            /*
            const jump = locales.data.features.find((elem) => elem)
            //console.log('Elem:', jump.geometry.coordinates)

            map.flyTo({
                center: jump.geometry.coordinates,
                zoom: 14,
                speed: 1.5,
                curve: 4,
                easing(t) {
                    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
                }
            });
            */
            map.addControl(new mapboxgl.NavigationControl(), 'bottom-right')

            map.on("load", () => {
                //console.log('Map loaded')
                // Render custom marker components
                locales.data.features.forEach((feature) => {
                    // Create a React ref
                    const ref = React.createRef();
                    // Create a new DOM node and save it to the React ref
                    ref.current = document.createElement("div");
                    // Render a Marker Component on our new DOM node
                    // Create a root.
                    //console.log('Local type:', feature.properties.localType)
                    const root = createRoot(ref.current);
                    switch (feature.properties.localType) {
                        case 'UNI':
                            root.render(
                                <Marker onClick={() => markerClicked(feature.properties.ceco)} feature={feature} >
                                    <MarkerUnimarc className={(feature.properties.alert == true) ? 'uniAlert' : ''} />
                                </Marker>
                            );
                            break;
                        case 'ALVI':
                            root.render(
                                <Marker onClick={() => markerClicked(feature.properties.ceco)} feature={feature} >
                                    <MarkerAlvi className={(feature.properties.alert == true) ? 'alviAlert' : ''} />
                                </Marker>
                            );
                            break;
                        case 'M10' || 'S10':
                            root.render(
                                <Marker onClick={() => markerClicked(feature.properties.ceco)} feature={feature} >
                                    <MarkerSuper10 className={(feature.properties.alert == true) ? 'S10Alert' : ''} />
                                </Marker>
                            );
                            break;

                    }

                    // Create a Mapbox Marker at our new DOM node
                    new mapboxgl.Marker(ref.current).setLngLat(feature.geometry.coordinates).addTo(map);
                })

                map.addSource('locations', locales);
                // Add a layer showing the places.
                map.addLayer({
                    'id': 'locations',
                    'type': 'circle',
                    'source': 'locations',
                    'paint': {
                        'circle-radius': 20,
                        'circle-stroke-width': 2,
                    }
                });

                // Create a popup, but don't add it to the map yet.
                const popup = new mapboxgl.Popup({
                    closeButton: false,
                    closeOnClick: false,

                });

                map.on('mouseenter', 'locations', (e) => {
                    // Change the cursor style as a UI indicator.
                    map.getCanvas().style.cursor = 'pointer';

                    // Copy coordinates array.
                    const coordinates = e.features[0].geometry.coordinates.slice();
                    const description = e.features[0].properties;
                    // Ensure that if the map is zoomed out such that multiple
                    // copies of the feature are visible, the popup appears
                    // over the copy being pointed to.
                    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
                    }

                    // Populate the popup and set its coordinates
                    // based on the feature found.
                    popup.setLngLat(coordinates).setHTML(`
                        <div>
                            <p><b>#${description.ceco}</b> ${description.name}</p>
                            <p> ${description.address} - ${description.city} </p>
                        <div/>
                    `).addTo(map);
                });

                map.on('mouseleave', 'locations', () => {
                    map.getCanvas().style.cursor = '';
                    popup.remove();
                })
            })

            map.on("idle", () => {
                //console.log('Map idle')
                setMapLoading(false)
            })

            // Clean up on unmount
            return () => map.remove();
        }
    }, [locales]);

    const markerClicked = (ceco) => {
        //console.log(`/local/${ceco}`)
        navigate(`/local/${ceco}`);
    };

    return (
        <div>
            {<Loader show={(mapLoading == true) ? true : false} />}
            <Navbar />
            <div ref={mapContainer} className="map-container" />
        </div>
    )
}

export default Map
