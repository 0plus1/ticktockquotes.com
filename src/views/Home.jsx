import React, { Component } from 'react';

import AppLayout from './layouts/AppLayout';
import Quote from '../components/Quote';
import Author from '../components/Author';
import Clock from '../components/Clock';

import quotesJson from '../quotes.json';
import PaddedDate from '../modules/PaddedDate';

const homeComponentStyle = {
  margin: '10%',
};

class HomeView extends Component {
  static hasMinuteStarted(date) {
    return (date.getSeconds() === '00');
  }

  static readQuoteForCurrentTime(date) {
    const index = `${date.getHours()}:${date.getMinutes()}`;

    const quotesForCurrentTime = quotesJson[index];
    // Sadly not all hours have a quote, in case it's undefined we refer to a default one
    if (quotesForCurrentTime === undefined) {
      return [`It's ${index}`, `How did it get so late so soon? (It's ${index})`, 'Poem', 'Dr. Seuss'];
    }
    // We get a random quote for that specific time
    // Note: most times have a single quote in them
    return quotesForCurrentTime[Math.floor(Math.random() * quotesForCurrentTime.length)];
  }

  state = {
    quoteArray: ['', '', '', ''],
    date: new PaddedDate(),
  }

  componentDidMount() {
    this.tickTimer = setInterval(() => {
      const date = new PaddedDate();
      this.setState({ date });
      if (HomeView.hasMinuteStarted(date)) {
        this.setState({ quoteArray: HomeView.readQuoteForCurrentTime(date) });
      }
    }, 1000);
    this.setState({ quoteArray: HomeView.readQuoteForCurrentTime(new PaddedDate()) });
  }

  componentWillUnmount() {
    if (this.tickTimer) {
      clearInterval(this.tickTimer);
    }
  }

  render() {
    const { quoteArray, date } = this.state;
    const [highlight, quote, publication, author] = quoteArray;
    return (
      <div>
        <Clock date={date} />
        <div style={homeComponentStyle}>
          <Quote highlight={highlight}>
            {quote}
          </Quote>
          <Author author={author} publication={publication} />
        </div>
      </div>
    );
  }
}

const Home = AppLayout(HomeView);

export default Home;
