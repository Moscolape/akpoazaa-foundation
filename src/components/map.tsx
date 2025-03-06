import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { LatLngExpression } from "leaflet";

interface MapComponentProps {
  latitude: number;
  longitude: number;
  locationName: string;
}

const MapComponent: React.FC<MapComponentProps> = ({ latitude, longitude, locationName }) => {
  const position: LatLngExpression = [latitude, longitude];

  return (
    <MapContainer
      center={position as [number, number]}
      zoom={13}
      style={{width: "100%", position: "relative", zIndex: 10 }}
      className="sm:h-[35rem] h-[15rem]"
    >
      <TileLayer
        key="osm-standard"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>{locationName}</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
