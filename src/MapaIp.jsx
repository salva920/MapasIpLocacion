import { useState } from "react";
import { consultaDatos } from "./funciones/funciones";
import { useQuery } from "@tanstack/react-query";
import Mapa from "./components/Mapa";
import Cargando from "./components/Cargando";
import Busqueda from "./components/Busqueda";
import Controles from "./components/Controles";

function MapaIp() {
  const [nocturno, setNocturno] = useState(false);
  const [busca, setBusca] = useState("");
  const [ip, setIp] = useState("");
  const [datos, setDatos] = useState({});

  const query = useQuery({
    queryKey: ["miIP"],
    queryFn: () => consultaDatos(ip),
  });

  const buscar = () => {
    setIp(busca);
    query.remove();
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

  return (
    <>
      <Busqueda setBusca={setBusca} buscar={buscar} />
      <Controles
        miLocacion={miLocacion}
        nocturno={nocturno}
        setNocturno={setNocturno}
      />
      <Mapa
        ip={query.data.data.ip}
        lat={query.data.data.location.lat}
        lng={query.data.data.location.lng}
        zonaHoraria={query.data.data.location.timezone}
        ciudad={query.data.data.location.city}
        pais={query.data.data.location.country}
        nocturno={nocturno}
      />
    </>
  );
}

export default MapaIp;
