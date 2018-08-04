import React from 'react';
import PropTypes from 'prop-types';
import { Textfit } from 'react-textfit';
import Theme from '../modules/Theme';

const Quote = ({ children, highlight }) => {
  const quoteChunks = children.split(highlight);

  return (
    <div style={{ margin: '100px', fontSize: '100px', color: Theme.color.secondary }}>
      <Textfit mode="multi">
        {quoteChunks[0]}
        <strong style={{ color: Theme.color.highlight }}>
          {highlight}
        </strong>
        {quoteChunks[1]}
      </Textfit>
    </div>
  );
};

Quote.propTypes = {
  children: PropTypes.string.isRequired,
  highlight: PropTypes.string.isRequired,
};

export default Quote;
