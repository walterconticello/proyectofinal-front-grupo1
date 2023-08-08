import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import MarkerIcon from "./MarkerIcon";

const MapView = ({latitude, longitude}) => {
    return (
        <>
            <MapContainer center={{lat: latitude, lng: longitude}} zoom={14}>
                <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={{lat: latitude, lng: longitude}} icon={MarkerIcon}/>
            </MapContainer>
        </>
    );
}

export default MapView;