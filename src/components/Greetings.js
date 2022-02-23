import React from 'react';

function Greetings(props) {
  if (props.lang === 'de') {
    return <h3>Hallo {props.children}</h3>;
  }
  if (props.lang === 'fr') {
    return <h3>Bonjour {props.children}</h3>;
  }
  if (props.lang === 'en') {
    return <h3>Hi {props.children}</h3>;
  }
  if (props.lang === 'es') {
    return <h3>Hola {props.children}</h3>;
  }
}

export default Greetings;