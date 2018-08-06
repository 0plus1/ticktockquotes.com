import React from 'react';

const FooterStyle = {
  width: '100%',
  textAlign: 'right',
  fontSize: '1rem',
  paddingTop: '10px',
  paddingRight: '10px',
};

const Footer = () => (
  <div style={FooterStyle}>
    <p style={{ margin: 0 }}>
      { // eslint-disable-next-line react/jsx-one-expression-per-line
      } Made with <span role="img" aria-label="Heart">♥</span> in <a href="https://www.0plus1.com" target="_blank" rel="noopener noreferrer">Melbourne</a> - <a href="https://github.com/0plus1/ticktockquotes.com" target="_blank" rel="noopener noreferrer">Open source!</a>
    </p>
  </div>
);

export default Footer;
