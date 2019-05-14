import React, { PureComponent } from 'react';


export default class Incrementer extends PureComponent {
  state = {
    count: 0
  };

  counter = () => {
    this.setState(state => {
      return { count: state.count + 1 };
    });
  }

  reset = () => {
    this.setState(() => {
      return { count: 0 };
    });
  }

  render() {
    const { count } = this.state;
    return (
      <>
        <p>You pushed that button {count} times!</p>
        <button onClick={this.counter} style={{ cursor: 'pointer' }}>Poke!</button>
        <button id="reset" onClick={this.reset} style={{ cursor: 'pointer' }}>Reset</button>
      </>
    );
  }
}
