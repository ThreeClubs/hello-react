// we can destructure inside components /props

import "./car.css";

function Car({ carName, colour }) {
  return (
    <div className="car">
      This is a <span style={{ color: { colour } }}>{carName}</span>
    </div>
  );
}

export default Car;
