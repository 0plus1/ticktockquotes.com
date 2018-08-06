import React from 'react';
import PropTypes from 'prop-types';

import themeShape from '../shapes';

const QuoteStyle = {
  fontSize: '3rem',
  height: '50%',
  marginTop: '10px',
  width: 'auto',
  lineHeight: '125%',
}

const Quote = ({ theme, children, highlight }) => {
  const quoteChunks = children.split(highlight);
  return (
    <div style={{ ...QuoteStyle, ...{ color: theme.color.secondary } }}>
      <p>
        {quoteChunks[0]}
        <strong style={{ color: theme.color.highlight }}>
          {highlight}
        </strong>
        {quoteChunks[1]}
      </p>
    </div>
  );
};

Quote.propTypes = {
  theme: themeShape.isRequired,
  children: PropTypes.string.isRequired,
  highlight: PropTypes.string.isRequired,
};

export default Quote;
