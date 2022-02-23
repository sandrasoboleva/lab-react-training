import React from 'react';

function Rating(props) {
  let roundedRating = Math.round(props.children);
  if (roundedRating === 0) {
    return <h1>☆☆☆☆☆</h1>;
  }
  if (roundedRating === 1) {
    return <h1>★☆☆☆☆</h1>;
  }
  if (roundedRating === 2) {
    return <h1>★★☆☆☆</h1>;
  }
  if (roundedRating === 3) {
    return <h1>★★★☆☆</h1>;
  }
  if (roundedRating === 4) {
    return <h1>★★★★☆</h1>;
  }
  if (roundedRating === 5) {
    return <h1>★★★★★</h1>;
  }
}

export default Rating;