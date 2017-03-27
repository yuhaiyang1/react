import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './reducers';
import App from './components/App';

const store = createStore(todoApp);
//Provider干的事：接收store，并将store传到子组件中，当store发生变化时，更新store；所以子组件具有store的dispatch方法
console.log(store)
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
