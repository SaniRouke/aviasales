import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import 'antd/es/progress/style/index.css';
import { Progress } from 'antd';

function MyProgress({ progress }) {
  const style = {
    position: 'fixed',
    top: 0,
    left: 0,
    maxWidth: '100wv',
    lineHeight: 0,
    zIndex: 1000,
  };
  return (
    <Progress
      style={style}
      percent={progress}
      showInfo={false}
      strokeColor={{
        '0%': '#108ee9',
        '100%': '#87d068',
      }}
    />
  );
}

const mapStateToProps = (state) => {
  return {
    progress: state.progress,
  };
};

export default connect(mapStateToProps)(MyProgress);

MyProgress.propTypes = {
  progress: PropTypes.number.isRequired,
};
