import React from 'react';
import PropTypes from 'prop-types';
import format from 'date-format';
import addSubtractDate from 'add-subtract-date';
import { formatToTimeZone } from 'date-fns-timezone';

const getStopsCountLabel = (length) => {
  if (length === 0) {
    return 'без пересадок';
  }
  if (length === 1) {
    return '1 пересадка';
  }
  return `${length} пересадки`;
};

export default function Flight({ direction }) {
  const { origin, destination, date, stops, duration } = direction;

  const durationTime = format.asString('hhч mmм', new Date(0, 0, 1, 0, duration));
  const dateStart = formatToTimeZone(new Date(date), 'hh:mm', { timeZone: 'Europe/Moscow' });
  const dateEnd = formatToTimeZone(addSubtractDate.add(new Date(date), duration, 'minutes'), 'hh:mm', {
    timeZone: 'Europe/Moscow',
  });

  const stopsList = stops.join(', ');
  const stopsCountLabel = getStopsCountLabel(stops.length);

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
}
Flight.propTypes = {
  direction: PropTypes.shape({
    origin: PropTypes.string,
    destination: PropTypes.string,
    date: PropTypes.string,
    stops: PropTypes.arrayOf(PropTypes.string),
    duration: PropTypes.number,
  }).isRequired,
};
