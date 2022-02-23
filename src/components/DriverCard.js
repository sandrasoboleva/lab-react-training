import React from 'react';
import Rating from './Rating';
function DriverCard(props) {
  return (
    <div className="driverCard">
      <img style={{ height: '30px' }} src={props.img} alt={props.name} />
      <div className="bodyContent">
        <h3>{props.name}</h3>
        <Rating>{props.rating}</Rating>
        <p>
          {props.car.model} - {props.car.licensePlate}
        </p>
      </div>
    </div>
  );
}

export default DriverCard;