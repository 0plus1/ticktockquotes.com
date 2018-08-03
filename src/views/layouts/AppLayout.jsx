import React, { Component } from 'react';

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
