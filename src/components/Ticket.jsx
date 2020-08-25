import React from 'react';
import PropTypes from 'prop-types';
import Flight from './Flight';

const getPriceLabel = (cost) => {
  return `${cost.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ')} Р`;
};

export default function Ticket({ item }) {
  const { price, carrier, segments } = item;
  const [to, back] = segments;

  const priceLabel = getPriceLabel(price);
  const baseUrlImage = '//pics.avs.io/99/36/';

  return (
    <div className="ticket">
      <div className="ticket__header">
        <h4 className="ticket__title font--blue">{priceLabel}</h4>
        <div className="ticket__logo">
          <img src={`${baseUrlImage}${carrier}.png`} alt={`logo ${carrier}`} className="src" />
        </div>
      </div>
      <Flight direction={to} />
      <Flight direction={back} />
    </div>
  );
}

Ticket.propTypes = {
  item: PropTypes.shape({
    price: PropTypes.number.isRequired,
    carrier: PropTypes.string.isRequired,
    segments: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};
