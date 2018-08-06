import React, { Component } from 'react';
import PropTypes from 'prop-types';

import themeShape from '../shapes';

const ThemeSwitcherTheme = {
  margin: 0,
};

class ThemeSwitcher extends Component {
  themeList() {
    const { themes, switchThemeHandler } = this.props;
    return Object.keys(themes).map(themeName => (
      <span key={themeName} role="button" style={{ cursor: 'pointer' }} onClick={() => switchThemeHandler(themeName)}>
        [
        <span style={{ color: themes[themeName].color.secondary }}>
          {themeName}
        </span>
        ]
      </span>
    ));
  }

  render() {
    return (
      <p style={ThemeSwitcherTheme}>
        { this.themeList() }
      </p>
    );
  }
}

ThemeSwitcher.propTypes = {
  themes: PropTypes.objectOf(themeShape).isRequired,
  switchThemeHandler: PropTypes.func.isRequired,
};

export default ThemeSwitcher;
