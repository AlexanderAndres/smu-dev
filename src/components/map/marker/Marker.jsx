import React, { useState, useEffect } from 'react';
import MapboxGL from 'mapbox-gl/dist/mapbox-gl.js';

const Marker = ({ coordinates, onClick, popupContent }) => {
    const [marker, setMarker] = useState(null);
    useEffect(() => {
        if (!marker) {
            const newMarker = new MapboxGL.Marker()
                .setLngLat(coordinates)
                .addTo(map);
            if (onClick) {
                newMarker.on('click', onClick);
            }
            if (popupContent) {
                const popup = new MapboxGL.Popup({ closeOnClick: false })
                    .setHTML(popupContent);
                newMarker.setPopup(popup);
                newMarker.on('mouseenter', () => popup.addTo(map));
                newMarker.on('mouseleave', () => popup.remove());
            }
            setMarker(newMarker);
            console.log('[Marker.jsx] - Marcador creado:', coordinates)
        }
    }, [coordinates, marker, onClick, popupContent]);

    return null;
};

export default Marker;