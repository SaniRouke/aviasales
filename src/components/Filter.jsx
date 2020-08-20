import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Checkbox } from 'antd';
import * as actions from './actions';

const CheckboxGroup = Checkbox.Group;
const filters = ['Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки'];

function Filter({ filter, setCheckedList, setCheckedAll }) {
  const { checkedList, checkAll } = filter;

  useEffect(() => {
    setCheckedList(filters);
  }, [setCheckedList]);

  const onChange = (currentCheckedList) => {
    setCheckedList(currentCheckedList);
    setCheckedAll(currentCheckedList.length === filters.length);
  };

  const onCheckAllChange = (event) => {
    const isChecked = event.target.checked;
    setCheckedList(isChecked ? filters : []);
    setCheckedAll(isChecked);
  };

  return (
    <aside className="sidebar">
      <h4 className="sidebar__header">Количество пересадок</h4>
      <Checkbox className="sidebar__Checkbox-all" onChange={onCheckAllChange} checked={checkAll}>
        Все
      </Checkbox>
      <CheckboxGroup className="sidebar__CheckboxGroup" options={filters} value={checkedList} onChange={onChange} />
    </aside>
  );
}

const mapStateToProps = (state) => {
  return {
    filter: state.filter,
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
  filter: PropTypes.shape({
    checkedList: PropTypes.arrayOf(PropTypes.string),
    checkAll: PropTypes.bool,
  }).isRequired,
  setCheckedList: PropTypes.func.isRequired,
  setCheckedAll: PropTypes.func.isRequired,
};
