import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { BiCurrentLocation } from "react-icons/bi";

function Controles() {
  return (
    <div className="controles">
      <button type="button" className="border border-dark  btn btn-primary rounded-circle me-3">
        <BiCurrentLocation />
      </button>
      <button type="button" className="border border-dark  btn btn-primary rounded-circle">
        <BsFillMoonStarsFill />
      </button>
    </div>
  );
}

export default Controles;
