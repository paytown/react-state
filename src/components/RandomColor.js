import React, { PureComponent } from 'react';

export default class RandomColor extends PureComponent {
  state={
    color: '',
    trigger: new Date()
  };

  randomColor = () => {
    const colors = ['#CFF09E', '#A8DBA8', '#79BD9A', '#3B8686', '#0B486B'];
    const n = Math.floor(Math.random() * colors.length);
    return colors[n];
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({ color: this.randomColor(), trigger: new Date() });
    }, 2000);
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.color === this.state.color) {
      this.setState({ color: '#FF4E50' });
    }
  }

  componentWillUnmount() {
    this.intervalId && clearInterval(this.intervalId);
  }

  render() {
    const { color } = this.state;
    const styles = {
      background: color,
      width: '100%',
      height: '100vh',
      transition: 'background-color 2500ms linear'
    };
    return <div style={styles}></div>;
  }
}
