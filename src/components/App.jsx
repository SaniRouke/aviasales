import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './App.scss';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import uniqid from 'uniqid';
import * as actions from './actions';
import Ticket from './Ticket';
import Filter from './Filter';

const withFilter = (data, checkedList, name) =>
  !checkedList.includes(name)
    ? []
    : data.filter((ticket) => {
        const stopsCount = ticket.segments[0].stops.length;
        return stopsCount === 0;
      });

function App({ searchId, data, filter, setData, stateSort, sortCheapest, sortFastest }) {
  const { checkedList } = filter;
  const { sort } = stateSort;

  const without = withFilter(data, checkedList, 'Без пересадок');
  const one = withFilter(data, checkedList, '1 пересадка');
  const two = withFilter(data, checkedList, '2 пересадки');
  const three = withFilter(data, checkedList, '3 пересадки');
  const filteredData = [...without, ...one, ...two, ...three];

  const sortedData =
    sort === 'fastest'
      ? filteredData.sort((prev, next) => (prev.segments[0].duration > next.segments[0].duration ? 1 : -1))
      : filteredData.sort((prev, next) => (prev.price > next.price ? 1 : -1));

  const ticketList = sortedData.map((item) => {
    return (
      <li key={uniqid()}>
        <Ticket item={item} />
      </li>
    );
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
    filter: state.filter,
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
  filter: PropTypes.shape({
    checkedList: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  setData: PropTypes.func.isRequired,
  stateSort: PropTypes.objectOf(PropTypes.string).isRequired,
  sortCheapest: PropTypes.func.isRequired,
  sortFastest: PropTypes.func.isRequired,
};
