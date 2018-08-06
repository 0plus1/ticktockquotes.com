import { shape, string } from 'prop-types';

const themeShape = shape({
  color: shape({
    primary: string.isRequired,
    secondary: string.isRequired,
    highlight: string.isRequired,
    author: string.isRequired,
  }).isRequired,
});

export default themeShape;
