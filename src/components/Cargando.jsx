import React from "react";

function Cargando() {
  return (
    <div className="w-100 vh-100">
      <div className="position-absolute top-50 start-50 translate-middle">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
      </div>
    </div>
  );
}

export default Cargando;
