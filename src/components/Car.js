// we can destructure inside components /props

import "./car.css";

function Car({ carName, colour }) {
  return (
    <div className="car">
      This is a <span style={{ color: colour }}> {colour} </span>
      {carName}
    </div>
  );
}

export default Car;
