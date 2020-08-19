import React from 'react';
import PropTypes from 'prop-types';
import format from 'date-format';
import addSubtractDate from 'add-subtract-date';

const getStopsCountLabel = ({ length }) => {
  if (length === 0) {
    return 'без пересадок';
  }
  if (length === 1) {
    return '1 пересадка';
  }
  return `${length} пересадки`;
};

const getPriceLabel = (cost) => {
  return `${cost.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ')} Р`;
};

const Flight = ({ direction }) => {
  const { origin, destination, date, stops, duration } = direction;
  const durationTime = format.asString('hhч mmм', new Date(0, 0, 1, 0, duration));
  const dateStart = format.asString('hh:mm', new Date(date));
  const dateEnd = format.asString('hh:mm', addSubtractDate.add(new Date(date), duration, 'minutes'));
  const stopsList = stops.join(', ');
  const stopsCountLabel = getStopsCountLabel(stops);

  return (
    <div className="ticket__flight">
      <div className="ticket__info">
        <p className="font--grey-title">{`${origin} - ${destination}`}</p>
        <p>{`${dateStart} – ${dateEnd}`}</p>
      </div>
      <div className="ticket__info">
        <p className="font--grey-title">В пути</p>
        <p>{durationTime}</p>
      </div>
      <div className="ticket__info">
        <p className="font--grey-title">{stopsCountLabel}</p>
        <p>{stopsList}</p>
      </div>
    </div>
  );
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
Flight.propTypes = {
  direction: PropTypes.shape({
    origin: PropTypes.string,
    destination: PropTypes.string,
    date: PropTypes.string,
    stops: PropTypes.arrayOf(PropTypes.string),
    duration: PropTypes.number,
  }).isRequired,
};
