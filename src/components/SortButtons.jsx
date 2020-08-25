import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';

function SortButtons({ stateSort, sortCheapest, sortFastest }) {
  const { sort } = stateSort;
  const cheapestClassNames = cn({
    sort__btn: true,
    'sort__btn--cheapest': true,
    'sort__btn--active': sort === 'cheapest',
  });

  const fastestClassNames = cn({
    sort__btn: true,
    'sort__btn--fastest': true,
    'sort__btn--active': sort === 'fastest',
  });

  return (
    <div className="sort">
      <button type="button" className={cheapestClassNames} onClick={sortCheapest}>
        Самый дешевый
      </button>
      <button type="button" className={fastestClassNames} onClick={sortFastest}>
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
