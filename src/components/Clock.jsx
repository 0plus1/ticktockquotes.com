import React, { Component } from 'react';
import PaddedDate from '../modules/PaddedDate';

const ClockStyle = {
  position: 'fixed',
  top: 0,
  right: '10px',
  width: '100%',
  textAlign: 'right',
  fontSize: '1rem',
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
      <div style={ClockStyle}>
        <p>
          { // eslint-disable-next-line react/jsx-one-expression-per-line
          }It&apos;s {timestring} ({Intl.DateTimeFormat().resolvedOptions().timeZone})
        </p>
      </div>
    );
  }
}

export default Clock;
