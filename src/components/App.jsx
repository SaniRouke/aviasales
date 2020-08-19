import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './App.scss';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import uniqid from 'uniqid';
import * as actions from './actions';
import Ticket from './Ticket';
import Filter from './Filter';

function App({ searchId, data, setData, stateSort, sortCheapest, sortFastest }) {
  const { sort } = stateSort;

  const ticketList = data.map((item, index) => {
    if (index < 5) {
      return (
        <li key={uniqid()}>
          <Ticket item={item} />
        </li>
      );
    }
    return false;
  });

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

  useEffect(() => {
    setData(searchId);
  }, [searchId, setData]);

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
    searchId: state.searchId,
    data: state.data,
    stateSort: state.sort,
  };
};

const mapDispatchToProps = (dispatch) => {
  const { setData, sortCheapest, sortFastest } = bindActionCreators(actions, dispatch);
  return {
    setData,
    sortCheapest,
    sortFastest,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

App.propTypes = {
  searchId: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  setData: PropTypes.func.isRequired,
  stateSort: PropTypes.objectOf(PropTypes.string).isRequired,
  sortCheapest: PropTypes.func.isRequired,
  sortFastest: PropTypes.func.isRequired,
};
