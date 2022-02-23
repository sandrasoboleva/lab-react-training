import React from 'react';

function IdCard(props) {
  return (
    <div style={{ display: 'flex' }}>
      <div>
        <img style={{ height: '200px' }} src={props.picture} alt="profilepic" />
      </div>
      <div style={{ height: '200px', textAlign: 'left', paddingLeft: '20px' }}>
        <p>First name: {props.firstName}</p>
        <p>Last name: {props.lastName}</p>
        <p>Gender: {props.gender}</p>
        <p>Height: {props.height}</p>
        <p>Birth: {props.birth.toDateString()} </p>
      </div>
    </div>
  );
}

export default IdCard;

