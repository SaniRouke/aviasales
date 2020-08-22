import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './actions';

function SortButtons({ stateSort, sortCheapest, sortFastest }) {
  const { sort } = stateSort;
  return (
    <div className="sort">
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
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    stateSort: state.sort,
  };
};

const mapDispatchToProps = (dispatch) => {
  const { sortCheapest, sortFastest } = bindActionCreators(actions, dispatch);
  return {
    sortCheapest,
    sortFastest,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SortButtons);

SortButtons.propTypes = {
  stateSort: PropTypes.objectOf(PropTypes.string).isRequired,
  sortCheapest: PropTypes.func.isRequired,
  sortFastest: PropTypes.func.isRequired,
};
