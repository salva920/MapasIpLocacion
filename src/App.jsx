import { useState } from "react";
import { consultaDatos } from "./funciones/funciones";
import { useQuery } from "@tanstack/react-query";
import Mapa from "./components/Mapa";

function App() {
  // const [busca, setBusca] = useState("");
  // const [ip, setIp] = useState("")

  // const query = useQuery({
  //   queryKey: ["miIP"],
  //   queryFn: () => consultaDatos(ip),
  // });

  // if (query.isLoading) {
  //   console.log("cargando");
  // } else {
  //   console.log(query.data.data);
  // }

  return (
    <>
      <Mapa />
    </>
  );
}

export default App;