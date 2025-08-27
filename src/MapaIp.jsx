import { useState } from "react";
import { consultaDatos } from "./funciones/funciones";
import { useQuery } from "@tanstack/react-query";
import Mapa from "./components/Mapa";
import Cargando from "./components/Cargando";
import Busqueda from "./components/Busqueda";
import Controles from "./components/Controles";
import Swal from "sweetalert2";

// Función para obtener la zona horaria basada en el código del país
const getZonaHoraria = (countryCode) => {
  const zonasHorarias = {
    VE: "America/Caracas", // Venezuela
    US: "America/New_York", // Estados Unidos
    MX: "America/Mexico_City", // México
    AR: "America/Argentina/Buenos_Aires", // Argentina
    BR: "America/Sao_Paulo", // Brasil
    CL: "America/Santiago", // Chile
    CO: "America/Bogota", // Colombia
    PE: "America/Lima", // Perú
    ES: "Europe/Madrid", // España
    FR: "Europe/Paris", // Francia
    DE: "Europe/Berlin", // Alemania
    IT: "Europe/Rome", // Italia
    GB: "Europe/London", // Reino Unido
    JP: "Asia/Tokyo", // Japón
    CN: "Asia/Shanghai", // China
    IN: "Asia/Kolkata", // India
    AU: "Australia/Sydney", // Australia
    NZ: "Pacific/Auckland", // Nueva Zelanda
  };
  
  return zonasHorarias[countryCode] || "UTC";
};

function MapaIp() {
  const [nocturno, setNocturno] = useState(false);
  const [busca, setBusca] = useState("");
  const [ip, setIp] = useState("");

  const query = useQuery({
    queryKey: ["miIP"],
    queryFn: () => consultaDatos(ip),
  });

  const buscar = () => {
    const regExIp = new RegExp(
      "^(\\b25[0-5]|\\b2[0-4][0-9]|\\b[01]?[0-9][0-9]?)(\\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$"
    );

    if (regExIp.test(busca)) {
      setIp(busca);
      query.remove();
    }else{
        Swal.fire("Error!", "IP invalida", "error");
    }
  };

  const miLocacion = () => {
    setIp("");
    query.remove();
  };

  if (query.status == "loading") return <Cargando />;
  if (query.status == "error") {
    miLocacion();
    return <div>Error</div>;
  }

  // Debug: ver qué datos estamos recibiendo
  console.log("Datos de la API:", query.data);
  console.log("Datos reales:", query.data.data);
  console.log("Location object:", query.data.data?.location);
  console.log("Latitude:", query.data.data?.location?.latitude);
  console.log("Longitude:", query.data.data?.location?.longitude);

  // Verificar que tenemos coordenadas válidas
  if (!query.data.data?.location?.latitude || !query.data.data?.location?.longitude) {
    console.log("Validación falló - coordenadas no encontradas");
    return (
      <>
        <Busqueda setBusca={setBusca} buscar={buscar} />
        <Controles
          miLocacion={miLocacion}
          nocturno={nocturno}
          setNocturno={setNocturno}
        />
        <div className="text-center p-4">
          <h3>No se pudieron obtener las coordenadas</h3>
          <p>Datos recibidos: {JSON.stringify(query.data.data, null, 2)}</p>
          <p>Location: {JSON.stringify(query.data.data?.location, null, 2)}</p>
        </div>
      </>
    );
  }

  console.log("Validación exitosa - coordenadas encontradas");

  const location = query.data.data;
  console.log("Location final:", location);
  console.log("Coordenadas para el mapa:", {
    lat: location.location.latitude,
    lng: location.location.longitude,
    ciudad: location.city.name,
    pais: location.country.name
  });

  return (
    <>
      <Busqueda setBusca={setBusca} buscar={buscar} />
              <Controles
          miLocacion={miLocacion}
          nocturno={nocturno}
          setNocturno={setNocturno}
        />
      <Mapa
        ip={ip || "Tu IP"}
        lat={location.location.latitude}
        lng={location.location.longitude}
        zonaHoraria={getZonaHoraria(location.country.iso_code)}
        ciudad={location.city.name}
        pais={location.country.name}
        nocturno={nocturno}
      />
    </>
  );
}

export default MapaIp;