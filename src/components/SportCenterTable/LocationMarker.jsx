import { Marker, useMapEvents } from "react-leaflet"
import MarkerIcon from "../SportCenter/Map/MarkerIcon";

const LocationMarker = ({latitude, setLatitude, longitude, setLongitude}) => {
    useMapEvents({
        click(e) {
            setLatitude(e.latlng.lat);
            setLongitude(e.latlng.lng);
        },
    });
    

    return !(latitude && longitude) ? null : (
        <Marker position={{lat: latitude, lng: longitude}} icon={MarkerIcon}>
        </Marker>
    )
}

export default LocationMarker;