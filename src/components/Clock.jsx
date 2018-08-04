import React from 'react';
import PropTypes from 'prop-types';
import PaddedDate from '../modules/PaddedDate';

const ClockStyle = {
  position: 'fixed',
  top: 0,
  right: '10px',
  width: '100%',
  textAlign: 'right',
  fontSize: '1rem',
};

const Footer = ({ date }) => {
  const timestring = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  return (
    <div style={ClockStyle}>
      <p>
        { // eslint-disable-next-line react/jsx-one-expression-per-line
        }It&apos;s {timestring} ({Intl.DateTimeFormat().resolvedOptions().timeZone})
      </p>
    </div>
  );
};

Footer.propTypes = {
  date: PropTypes.instanceOf(PaddedDate).isRequired,
};

export default Footer;
