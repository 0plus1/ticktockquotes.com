import React from 'react';
import ReactDOM from 'react-dom';
import Home from './views/home';
import registerServiceWorker from './registerServiceWorker';

// eslint-disable-next-line react/jsx-filename-extension
ReactDOM.render(<Home />, document.getElementById('root'));
registerServiceWorker();
