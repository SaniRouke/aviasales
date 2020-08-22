import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import uniqid from 'uniqid';
import Ticket from './Ticket';
import Empty from './Empty';
import Error from './Error';

const TicketList = ({ error, data }) => {
  if (error) {
    return <Error />;
  }
  if (data.length === 0) {
    return <Empty />;
  }
  return data
    .filter((item, index) => index < 5)
    .map((item) => {
      return (
        <li key={uniqid()}>
          <Ticket item={item} />
        </li>
      );
    });
};

const mapStateToProps = (state) => {
  return {
    error: state.error,
  };
};

export default connect(mapStateToProps)(TicketList);

TicketList.defaultProps = {
  error: null,
};

TicketList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  error: PropTypes.instanceOf(Error),
};
