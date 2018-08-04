import React from 'react';
import PropTypes from 'prop-types';
import { Textfit } from 'react-textfit';
import Theme from '../modules/Theme';

const Author = ({ author, publication }) => (
  <div style={{ margin: '100px', height: '500px', color: Theme.color.author }}>
    <Textfit mode="single">
      {author}
      -
      {publication}
    </Textfit>
  </div>
);


Author.propTypes = {
  author: PropTypes.string.isRequired,
  publication: PropTypes.string.isRequired,
};

export default Author;
