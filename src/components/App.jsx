import React, { useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import './App.scss';
import 'antd/es/spin/style/index.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Spin } from 'antd';
import * as actions from '../redux/actions';
import TicketList from './TicketList';
import Filter from './Filter';
import SortButtons from './SortButtons';
import Progress from './Progress';

const allFilters = ['Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки'];

const withFilters = (data, checkedList, filters) => (checkboxNumber) => {
  return !checkedList.includes(filters[checkboxNumber])
    ? []
    : data.filter((ticket) => {
        const stopsCount = ticket.segments[0].stops.length;
        return stopsCount === checkboxNumber;
      });
};

function App({ data, isLoading, filter, setData, stateSort }) {
  const { checkedList } = filter;
  const { sort } = stateSort;

  const oneOfTheFilters = withFilters(data, checkedList, allFilters);

  const filteredData = useMemo(() => {
    return allFilters.reduce((acc, filterName, checkboxNumber) => [...acc, ...oneOfTheFilters(checkboxNumber)], []);
  }, [oneOfTheFilters]);

  const sortedData =
    sort === 'fastest'
      ? filteredData.sort((prev, next) => (prev.segments[0].duration > next.segments[0].duration ? 1 : -1))
      : filteredData.sort((prev, next) => (prev.price > next.price ? 1 : -1));

  useEffect(() => {
    setData();
  }, [setData]);

  const skeleton = <div className="skeleton" />;

  return (
    <div className="App">
      <Progress />
      <header className="header">
        <div className="logo" />
      </header>
      <main className="content">
        <Filter />
        <section className="ticket-list-wrapper">
          <SortButtons />
          <Spin spinning={isLoading} size="large">
            <ul className="ticket-list">{isLoading ? skeleton : <TicketList data={sortedData} />}</ul>
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
  const { setData } = bindActionCreators(actions, dispatch);
  return {
    setData,
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
};
