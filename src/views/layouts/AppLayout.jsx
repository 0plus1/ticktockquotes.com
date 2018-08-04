import React, { Component } from 'react';

import 'sanitize.css';

export default function AppLayout(WrappedComponent) {
  class AppLayoutComponent extends Component {
    render() {
      return (
        <div>
          <WrappedComponent {...this.state} {...this.props} />
        </div>
      );
    }
  }

  return AppLayoutComponent;
}
