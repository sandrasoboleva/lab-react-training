import React from 'react';

function BoxColor(props) {
  return (
    <h5
      style={{
        height: '50px',
        width: '200px',
        backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`,
      }}
    >
      rgb({props.r},{props.g},{props.b})
    </h5>
  );
}

export default BoxColor;