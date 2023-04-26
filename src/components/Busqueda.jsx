import {BsSearch} from "react-icons/bs"

function Busqueda() {
  return (
    <div className="busqueda">
      <div className="input-group mb-3 p-1 bg-dark rounded">
        <input type="text" className="form-control" placeholder="Buscar" />
        <button className="btn btn-primary" type="button" id="button-addon2">
          <BsSearch />
        </button>
      </div>
    </div>
  );
}

export default Busqueda;
