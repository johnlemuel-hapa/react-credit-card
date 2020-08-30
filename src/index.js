import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PropTypes from 'prop-types';

var creditCardInfo = {
  name: "JOHN LEMUEL G HAPA",
  expiration_date: "08 / 19",
  card_number: "1234 5678 8765 4321",
  bank_name: "Big Bank, Inc."
};

function CreditCard({ cardInfo }) {
  const { name, expiration_date, card_number, bank_name } = cardInfo;

  return (
    <div className="card">
      <div className="bank-name item">
        { bank_name }
      </div>
      <div className="item">
        <div className="card-number">
          { card_number }
        </div>
        <div className="card-text">
          1234
        </div>
      </div>
      <div className="expiration item">
        <div className="valid-thru">
          VALID THRU
        </div>
        <div className="expiration-date">
          { expiration_date }
        </div>
      </div>
      <div className="name item">
        { name }
      </div>
    </div>
  );
};

CreditCard.proptype = {
  cardInfo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    expiration_date: PropTypes.string.isRequired,
    card_number: PropTypes.string.isRequired,
    bank_name: PropTypes.string.isRequired
  }).isRequired
};

ReactDOM.render(
  <CreditCard cardInfo={ creditCardInfo } />,
  document.getElementById('root')
);
