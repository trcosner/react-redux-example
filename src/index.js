import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from 'components/app/App';
import store from './store';
import registerServiceWorker from './registerServiceWorker';
import installDevTools from 'immutable-devtools';
import Immutable from 'immutable';

installDevTools(Immutable);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
