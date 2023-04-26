import { useState } from "react";
import { consultaDatos } from "./funciones/funciones";
import { useQuery } from "@tanstack/react-query";

function App() {
  const [busca, setBusca] = useState("");
  const [ip, setIp] = useState("")

  const query = useQuery({
    queryKey: ["miIP"],
    queryFn: () => consultaDatos(ip),
  });

  if (query.isLoading) {
    console.log("cargando");
  } else {
    console.log(query.data.data);
  }

  return (
    <>
      <input
        type="email"
        className="form-control"
        placeholder="Ip a buscar"
        onChange={(e) => setBusca(e.target.value)}
      />
      <button className="btn btn-primary" onClick={() => {
        setIp(busca);
        query.remove();
      }}>
        buscar
      </button>
    </>
  );
}

export default App;