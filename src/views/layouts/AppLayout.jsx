import React, { Component } from 'react';
import Footer from '../../components/Footer';
import Clock from '../../components/Clock';
import ThemeSwitcher from '../../components/ThemeSwitcher';
import Themes from '../../modules/Themes';

import 'sanitize.css';
import 'typeface-inconsolata';

const TopBarTheme = {
  position: 'fixed',
  top: '10px',
  right: '10px',
  width: '100%',
  textAlign: 'right',
  fontSize: '1rem',
};

export default function AppLayout(WrappedComponent) {
  class AppLayoutComponent extends Component {
    state = {
      theme: Themes.london,
    };

    componentDidMount() {
      document.body.style.fontFamily = '\'Inconsolata\', monospace';
      document.body.style.fontSize = 'calc( 16px + (24 - 16) * (100vw - 400px) / (800 - 400) )';
    }

    render() {
      const { theme } = this.state;
      document.body.style.backgroundColor = theme.color.primary;

      return (
        <div>
          <div style={TopBarTheme}>
            <Clock />
            <ThemeSwitcher
              themes={Themes}
              switchThemeHandler={(themeName) => {
                this.setState({ theme: Themes[themeName] });
              }}
            />
          </div>
          <WrappedComponent {...this.state} {...this.props} />
          <Footer />
        </div>
      );
    }
  }

  return AppLayoutComponent;
}
