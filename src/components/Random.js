import React from 'react';

function Random(props) {
  return (
    <h5>
      {Math.floor(Math.random() * (props.max + 1 - props.min) + props.min)}
    </h5>
  );
}

export default Random;