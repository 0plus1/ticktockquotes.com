import React, { Component } from 'react';
import Footer from '../../components/Footer';
import Clock from '../../components/Clock';
import Theme from '../../modules/Theme';

import 'sanitize.css';
import 'typeface-inconsolata';

export default function AppLayout(WrappedComponent) {
  class AppLayoutComponent extends Component {
    componentDidMount() {
      document.body.style.backgroundColor = Theme.color.primary;
      document.body.style.fontFamily = '\'Inconsolata\', monospace';
      document.body.style.fontSize = 'calc( 16px + (24 - 16) * (100vw - 400px) / (800 - 400) )';
    }

    render() {
      return (
        <div>
          <Clock />
          <WrappedComponent {...this.state} {...this.props} />
          <Footer />
        </div>
      );
    }
  }

  return AppLayoutComponent;
}
