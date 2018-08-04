import React from 'react';
import PropTypes from 'prop-types';

const Quote = ({ quoteArray }) => {
  const [highlight, quote, publication, author] = quoteArray;
  return (
    <p>
      {highlight}
      |
      {quote}
      |
      {publication}
      |
      {author}
    </p>
  );
};

Quote.propTypes = {
  quoteArray: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Quote;
