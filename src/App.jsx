import { Route, Routes } from "react-router-dom";
import MapaIp from "./MapaIp";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MapaIp />} />
        <Route
          path="/*"
          element={
            <div className="w-100 vh-100 d-flex flex-column justify-content-center">
              <h1 className="text-center">Error 404</h1>
            </div>
          }
        />
      </Routes>
    </>
  );
}

export default App;
