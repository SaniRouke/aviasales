import React from 'react';

export default function Ticket() {
  return (
    <div className="ticket">
      <div className="ticket__header">
        <h4 className="ticket__title font--blue">13 400 Р </h4>
        <div className="ticket__logo">
          <img src="" alt="" className="src" />
        </div>
      </div>
      <div className="ticket__flight">
        <div className="ticket__info">
          <p className="font--grey">MOW – HKT</p>
          <p>10:45 – 08:00</p>
        </div>
        <div className="ticket__info">
          <p className="font--grey">В пути</p>
          <p>21ч 15м</p>
        </div>
        <div className="ticket__info">
          <p className="font--grey">2 пересадки</p>
          <p>HKG, JNB</p>
        </div>
      </div>
      <div className="ticket__flight">
        <div className="ticket__info">
          <p className="font--grey">MOW – HKT</p>
          <p>10:45 – 08:00</p>
        </div>
        <div className="ticket__info">
          <p className="font--grey">В пути</p>
          <p>21ч 15м</p>
        </div>
        <div className="ticket__info">
          <p className="font--grey">2 пересадки</p>
          <p>HKG, JNB</p>
        </div>
      </div>
    </div>
  );
}
