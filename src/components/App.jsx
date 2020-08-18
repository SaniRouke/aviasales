import React from 'react';
import PropTypes from 'prop-types';
import './App.scss';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './actions';
import Ticket from './Ticket';
import Filter from './Filter';

const myData = [1, 2, 3];

function App({ reduxState, sortCheapest, sortFastest }) {
  const data = myData;
  const { sort } = reduxState;

  const ticketList = data.map((item) => (
    <li key={item}>
      <Ticket />
    </li>
  ));

  const sortButtons = (
    <>
      <button
        type="button"
        className={`sort__btn btn-cheapest${sort === 'cheapest' ? ' sort__btn--active' : ''}`}
        onClick={sortCheapest}
      >
        Самый дешевый
      </button>
      <button
        type="button"
        className={`sort__btn btn-fastest${sort === 'fastest' ? ' sort__btn--active' : ''}`}
        onClick={sortFastest}
      >
        Самый быстрый
      </button>
    </>
  );

  return (
    <div className="App">
      <header className="header">
        <div className="logo" />
      </header>
      <main className="content">
        <Filter />
        <section className="ticket-list-wrapper">
          <div className="sort">{sortButtons}</div>
          <ul className="ticket-list">{ticketList}</ul>
        </section>
      </main>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    reduxState: state.sort,
  };
};

const mapDispatchToProps = (dispatch) => {
  const { sortCheapest, sortFastest } = bindActionCreators(actions, dispatch);
  return {
    sortCheapest,
    sortFastest,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

App.propTypes = {
  reduxState: PropTypes.objectOf(PropTypes.object).isRequired,
  sortCheapest: PropTypes.func.isRequired,
  sortFastest: PropTypes.func.isRequired,
};
