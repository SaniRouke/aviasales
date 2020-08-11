import React from 'react';
import './App.scss';

export default function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="logo" />
      </header>
      <main className="content">
        <aside className="sidebar">
          <h4 className="sidebar__header">Количество пересадок</h4>
          <input id="checkbox-all" type="checkbox" className="sidebar__checkbox" />
          <label htmlFor="checkbox-all" className="sidebar__label">
            Все
          </label>
          <input id="checkbox-without" type="checkbox" className="sidebar__checkbox" checked />
          <label htmlFor="checkbox-without" className="sidebar__label">
            Без пересадок
          </label>
          <input id="checkbox-one" type="checkbox" className="sidebar__checkbox" />
          <label htmlFor="checkbox-one" className="sidebar__label">
            1 пересадка
          </label>
        </aside>
        <section className="ticket-list-wrapper">
          <form action="" className="sort" onSubmit={(event) => event.preventDefault()}>
            <button type="submit" className="sort__btn btn-cheapest">
              Самый дешевый
            </button>
            <button type="submit" className="sort__btn btn-fastest">
              Самый быстрый
            </button>
          </form>
          <ul className="ticket-list">
            <li className="ticket">
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
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
