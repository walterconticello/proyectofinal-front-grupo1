import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import LocationMarker from "./LocationMarker";


const MapComponent = ({latitude, setLatitude, longitude, setLongitude}) => {

    return (
        <MapContainer
            center={{lat: -26.82765003673067, lng: -65.19539212238044}}
            zoom={14}
            style={{ height: "400px", width: "100%" }}
        >
        <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <LocationMarker latitude={latitude} longitude={longitude} setLatitude={setLatitude} setLongitude={setLongitude}></LocationMarker>
        </MapContainer>
    );
}

export default MapComponent;