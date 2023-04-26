import { useState } from "react";
import { consultaDatos } from "./funciones/funciones";
import { useQuery } from "@tanstack/react-query";
import Mapa from "./components/Mapa";
import Cargando from "./components/Cargando";
import Busqueda from "./components/Busqueda";
import Controles from "./components/Controles";

function App() {
  const [busca, setBusca] = useState("");
  const [ip, setIp] = useState("");

  const query = useQuery({
    queryKey: ["miIP"],
    queryFn: () => consultaDatos(ip),
  });

  if (query.status == "loading") return <Cargando />;
  if (query.status == "error") return <div>Error</div>;

  return (
    <>
      <Busqueda />
      <Controles />
      <Mapa />
    </>
  );
}

export default App;
