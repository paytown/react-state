import React from 'react';
import PropTypes from 'prop-types';
import style from './ColorPicker.css';

function ColorPicker({ selectColorHandler }) {
  return (
    <section className={style.ColorPicker}>
      <button className={style.red} onClick={() => selectColorHandler('red')}>red</button>
      <button className={style.green} onClick={() => selectColorHandler('green')}>green</button>
      <button className={style.blue} onClick={() => selectColorHandler('blue')}>blue</button>
    </section>
  );
}

ColorPicker.propTypes = {
  selectColorHandler: PropTypes.func.isRequired
};

export default ColorPicker;
