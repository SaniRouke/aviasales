import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './App.scss';
import 'antd/es/spin/style/index.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import uniqid from 'uniqid';
import { Spin } from 'antd';
import * as actions from './actions';
import Ticket from './Ticket';
import Filter from './Filter';

const allFilters = ['Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки'];

const withFilters = (data, checkedList, filters) => (checkboxNumber) => {
  return !checkedList.includes(filters[checkboxNumber])
    ? []
    : data.filter((ticket) => {
        const stopsCount = ticket.segments[0].stops.length;
        return stopsCount === checkboxNumber;
      });
};

function App({ data, isLoading, filter, setData, stateSort, sortCheapest, sortFastest }) {
  const { checkedList } = filter;
  const { sort } = stateSort;

  const func = withFilters(data, checkedList, allFilters);

  const without = func(0);
  const one = func(1);
  const two = func(2);
  const three = func(3);
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
    setData();
  }, [setData]);

  const skeleton = <div className="skeleton" />;

  return (
    <div className="App">
      <header className="header">
        <div className="logo" />
      </header>
      <main className="content">
        <Filter />
        <section className="ticket-list-wrapper">
          <div className="sort">{sortButtons}</div>
          <Spin spinning={isLoading} size="large">
            <ul className="ticket-list">{isLoading ? skeleton : ticketList}</ul>
          </Spin>
        </section>
      </main>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    searchId: state.searchId,
    isLoading: state.isLoading,
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
  isLoading: PropTypes.bool.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  filter: PropTypes.shape({
    checkedList: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  setData: PropTypes.func.isRequired,
  stateSort: PropTypes.objectOf(PropTypes.string).isRequired,
  sortCheapest: PropTypes.func.isRequired,
  sortFastest: PropTypes.func.isRequired,
};
