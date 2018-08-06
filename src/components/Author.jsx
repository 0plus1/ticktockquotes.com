import React from 'react';
import PropTypes from 'prop-types';

import themeShape from '../shapes';

const authorComponentStyle = {
  fontSize: '2rem',
  height: '40px',
  marginTop: '10px',
  width: 'auto',
};

const Author = ({ theme, author, publication }) => (
  <div style={{ ...authorComponentStyle, ...{ color: theme.color.author } }}>
    <p>
      {// eslint-disable-next-line react/jsx-one-expression-per-line
      }― {author} in <i>{publication}</i>
    </p>
  </div>
);


Author.propTypes = {
  theme: themeShape.isRequired,
  author: PropTypes.string.isRequired,
  publication: PropTypes.string.isRequired,
};

export default Author;
