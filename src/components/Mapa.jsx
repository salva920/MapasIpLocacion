import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

function Mapa(props) {
  const position = [props.lat, props.lng];
  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      <Marker position={position}>
        <Popup>
            <p><strong>lat: </strong>{props.lat}</p>
            <p><strong>lon: </strong>{props.lng}</p>
            <p><strong>País: </strong>{props.pais}</p>
            <p><strong>Ciudad: </strong>{props.ciudad}</p>
            <p><strong>Zona Horaria: </strong>{props.zonaHoraria}</p>
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Mapa;
