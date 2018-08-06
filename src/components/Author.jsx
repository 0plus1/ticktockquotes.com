import React from 'react';
import PropTypes from 'prop-types';
import Theme from '../modules/Theme';

const authorComponentStyle = {
  fontSize: '2rem',
  height: '40px',
  marginTop: '10px',
  width: 'auto',
  color: Theme.color.author,
};

const Author = ({ author, publication }) => (
  <div style={authorComponentStyle}>
    <p>
      {// eslint-disable-next-line react/jsx-one-expression-per-line
      }― {author} in <i>{publication}</i>
    </p>
  </div>
);


Author.propTypes = {
  author: PropTypes.string.isRequired,
  publication: PropTypes.string.isRequired,
};

export default Author;
