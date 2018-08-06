import React, { Component } from 'react';
import PaddedDate from '../modules/PaddedDate';

const ClockStyle = {
  margin: 0,
};

class Clock extends Component {
  state = {
    date: new PaddedDate(),
  }

  componentDidMount() {
    this.tickTimer = setInterval(() => {
      this.setState({ date: new PaddedDate() });
    }, 1000);
  }

  componentWillUnmount() {
    if (this.tickTimer) {
      clearInterval(this.tickTimer);
    }
  }

  render() {
    const { date } = this.state;
    const timestring = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    return (
      <p style={ClockStyle}>
        { // eslint-disable-next-line react/jsx-one-expression-per-line
        }It&apos;s {timestring} ({Intl.DateTimeFormat().resolvedOptions().timeZone})
      </p>
    );
  }
}

export default Clock;
