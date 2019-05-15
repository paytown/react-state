import React from 'react';
import PropTypes from 'prop-types';
import style from './ColorDisplay.css';

function ColorDisplay({ color }) {
  return <div className={style.ColorDisplay} style={{ backgroundColor: color }}></div>;
}

ColorDisplay.propTypes = {
  color: PropTypes.string.isRequired
};

export default ColorDisplay;
