import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './actions';

function Filter({ filters, setAll, setWithout, setOne, setTwo }) {
  const { all, without, one, two } = filters;

  const setlectedAll = without && one && two;

  return (
    <aside className="sidebar">
      <h4 className="sidebar__header">Количество пересадок</h4>
      <input
        id="checkbox-all"
        type="checkbox"
        className="sidebar__checkbox"
        checked={all}
        onChange={() => {
          setAll();
          setWithout(!all);
          setOne(!all);
          setTwo(!all);
        }}
      />
      <label htmlFor="checkbox-all" className="sidebar__label">
        Все
      </label>
      <input
        id="checkbox-without"
        type="checkbox"
        className="sidebar__checkbox"
        checked={without}
        onChange={() => {
          if (setlectedAll) {
            setAll(false);
          }
          if (one && two && without === false) {
            setAll(true);
          }
          setWithout();
        }}
      />
      <label htmlFor="checkbox-without" className="sidebar__label">
        Без пересадок
      </label>
      <input
        id="checkbox-one"
        type="checkbox"
        className="sidebar__checkbox"
        checked={one}
        onChange={() => {
          if (setlectedAll) {
            setAll(false);
          }
          if (without && two && one === false) {
            setAll(true);
          }
          setOne();
        }}
      />
      <label htmlFor="checkbox-one" className="sidebar__label">
        С одной пересадкой
      </label>
      <input
        id="checkbox-two"
        type="checkbox"
        className="sidebar__checkbox"
        checked={two}
        onChange={() => {
          if (setlectedAll) {
            setAll(false);
          }
          if (one && without && two === false) {
            setAll(true);
          }
          setTwo();
        }}
      />
      <label htmlFor="checkbox-two" className="sidebar__label">
        С двумя пересадками
      </label>
    </aside>
  );
}

const mapStateToProps = (state) => {
  return {
    filters: state.filters,
  };
};
const mapDispatchToProps = (dispatch) => {
  const { setAll, setWithout, setOne, setTwo } = bindActionCreators(actions, dispatch);
  return {
    setAll,
    setWithout,
    setOne,
    setTwo,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Filter);

Filter.propTypes = {
  filters: PropTypes.objectOf(PropTypes.bool).isRequired,
  setAll: PropTypes.func.isRequired,
  setWithout: PropTypes.func.isRequired,
  setOne: PropTypes.func.isRequired,
  setTwo: PropTypes.func.isRequired,
};
