import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Checkbox } from 'antd';
import * as actions from '../redux/actions';

const CheckboxGroup = Checkbox.Group;
const allFilters = ['Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки'];
const defaultFilters = ['Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки'];

function Filter({ stateFilter, setCheckedList, setCheckedAll }) {
  const { checkedList, checkAll } = stateFilter;

  useEffect(() => {
    setCheckedList(defaultFilters);
  }, [setCheckedList]);

  const onChange = (checkList) => {
    setCheckedAll(checkList.length === allFilters.length);
    setCheckedList(checkList);
  };

  const onCheckAllChange = (event) => {
    const isChecked = event.target.checked;
    setCheckedAll(isChecked);
    setCheckedList(isChecked ? allFilters : []);
  };

  return (
    <aside className="sidebar">
      <h4 className="sidebar__header">Количество пересадок</h4>
      <Checkbox className="sidebar__Checkbox-all" onChange={onCheckAllChange} checked={checkAll}>
        Все
      </Checkbox>
      <CheckboxGroup className="sidebar__CheckboxGroup" options={allFilters} value={checkedList} onChange={onChange} />
    </aside>
  );
}

const mapStateToProps = (state) => {
  return {
    stateFilter: state.filter,
  };
};
const mapDispatchToProps = (dispatch) => {
  const { setCheckedList, setCheckedAll } = bindActionCreators(actions, dispatch);
  return {
    setCheckedList,
    setCheckedAll,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

Filter.propTypes = {
  stateFilter: PropTypes.shape({
    checkedList: PropTypes.arrayOf(PropTypes.string),
    checkAll: PropTypes.bool,
  }).isRequired,
  setCheckedList: PropTypes.func.isRequired,
  setCheckedAll: PropTypes.func.isRequired,
};
