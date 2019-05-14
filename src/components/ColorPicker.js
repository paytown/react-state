import React, { PureComponent } from 'react';
import style from './ColorPicker.css';

export default class ColorPicker extends PureComponent {
  state = {
    color: ''
  };

  selectColor = color => {
    this.setState({ color });
  }

  render() {
    const { color } = this.state;

    return (
      <section className={style.ColorPicker}>
        <button className={style.red} onClick={this.selectColor.bind(null, 'red')}>RedBIND</button>
        <button className={style.red} onClick={() => this.selectColor('red')}>Red</button>
        <button className={style.green} onClick={() => this.selectColor('green')}>Green</button>
        <button className={style.blue} onClick={() => this.selectColor('blue')}>Blue</button>
        <div className={style[color]}></div>
      </section>
    );
  }
}
