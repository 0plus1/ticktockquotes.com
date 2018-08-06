import React from 'react';
import PropTypes from 'prop-types';
import Theme from '../modules/Theme';

const QuoteStyle = {
  fontSize: '3rem',
  color: Theme.color.secondary,
  height: '50%',
  marginTop: '10px',
  width: 'auto',
  lineHeight: '125%'
}

const Quote = ({ children, highlight }) => {
  const quoteChunks = children.split(highlight);
  return (
    <div style={QuoteStyle}>
      <p>
        {quoteChunks[0]}
        <strong style={{ color: Theme.color.highlight }}>
          {highlight}
        </strong>
        {quoteChunks[1]}
      </p>
    </div>
  );
};

Quote.propTypes = {
  children: PropTypes.string.isRequired,
  highlight: PropTypes.string.isRequired,
};

export default Quote;
