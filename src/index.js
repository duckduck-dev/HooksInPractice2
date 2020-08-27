import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import App from './components/App';
import reducers from './reducers';

const store = createStore(reducers, applyMiddleware(reduxThunk));

render( 
      <Provider store={store}>
            <App />
      </Provider>,
      document.querySelector('#root'));