import React, { Component } from 'react';
import Footer from '../../components/Footer';
import Theme from '../../modules/Theme';

import 'sanitize.css';
import 'typeface-inconsolata';

export default function AppLayout(WrappedComponent) {
  class AppLayoutComponent extends Component {
    componentDidMount() {
      document.body.style.backgroundColor = Theme.color.primary;
      document.body.style.fontFamily = '\'Inconsolata\', monospace';
      document.body.style.fontSizee = '62.5%';
    }

    render() {
      return (
        <div>
          <WrappedComponent {...this.state} {...this.props} />
          <Footer />
        </div>
      );
    }
  }

  return AppLayoutComponent;
}
