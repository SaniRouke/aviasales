import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';

function SortButtons({ sort, sortCheapest, sortFastest }) {
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
    sort: state.sort,
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
  sort: PropTypes.string.isRequired,
  sortCheapest: PropTypes.func.isRequired,
  sortFastest: PropTypes.func.isRequired,
};
