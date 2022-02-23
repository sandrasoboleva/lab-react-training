import React from 'react';
import Visa from '../assets/images/visa.png';
import Mastercard from '../assets/images/master-card.svg';

function CreditCard(props) {
  let cardType = '';
  if (props.type === 'Visa') {
    cardType = Visa;
  } else {
    cardType = Mastercard;
  }
  return (
    <div
      style={{
        height: '250px',
        width: '450px',
        backgroundColor: props.bgColor,
        borderRadius: '20px',
        textAlign: 'left',
      }}
    >
      <img
        style={{
          textAlign: 'right',
          display: 'inline-block',
          height: '20px',
          padding: '20px',
        }}
        src={cardType}
        alt="card type"
      />
      <h2>**** **** **** {props.number.slice(12)}</h2>
      <div>
        <p>
          expires {props.expirationMonth}/{props.expirationYear}
        </p>
        <p>{props.bank}</p>
      </div>
      <p style={{}}>{props.owner}</p>
    </div>
  );
}

export default CreditCard;