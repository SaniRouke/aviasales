import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './components/reducer';
import App from './components/App';

const myMiddleWare = () => (next) => (action) => {
  const result = next(action);
  // console.log(store.getState());
  return result;
};

const store = createStore(reducer, applyMiddleware(myMiddleWare, thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
