import React, { Component } from 'react';

import AppLayout from './layouts/AppLayout';
import quotesJson from '../quotes.json';
import Theme from '../modules/Theme';
import Quote from '../components/Quote';
import Author from '../components/Author';

const homeComponentStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  height: '100%',
  width: '100%',
  backgroundColor: Theme.color.primary,
};

class HomeView extends Component {
  static hasMinuteStarted(date) {
    return (date.getSeconds() === 0);
  }

  static readQuoteForCurrentTime(date) {
    // Our json indexes are 0 padded, we need to normalise getMinutes and getHours
    let minutes = date.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    let hours = date.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    const index = `${hours}:${minutes}`;

    const quotesForCurrentTime = quotesJson[index];
    // Sadly not all hours have a quote, in case it's undefined we refer to a default one
    if (quotesForCurrentTime === undefined) {
      return [`It's ${index}`, `How did it get so late so soon? (It's ${index})`, '', 'Dr. Seuss'];
    }
    // We get a random quote for that specific time
    // Note: most times have a single quote in them
    return quotesForCurrentTime[Math.floor(Math.random() * quotesForCurrentTime.length)];
  }

  state = {
    quoteArray: ['', '', '', ''],
  }

  componentDidMount() {
    this.tickTimer = setInterval(() => {
      const date = new Date();
      if (HomeView.hasMinuteStarted(date)) {
        this.setState({ quoteArray: HomeView.readQuoteForCurrentTime(date) });
      }
    }, 1000);
    this.setState({ quoteArray: HomeView.readQuoteForCurrentTime(new Date()) });
  }

  componentWillUnmount() {
    if (this.tickTimer) {
      clearInterval(this.tickTimer);
    }
  }

  render() {
    const { quoteArray } = this.state;
    const [highlight, quote, publication, author] = quoteArray;
    return (
      <div style={homeComponentStyle}>
        <Quote highlight={highlight} quote={quote} />
        <Author author={author} publication={publication} />
      </div>
    );
  }
}

const Home = AppLayout(HomeView);

export default Home;
