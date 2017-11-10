import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import App from "./app";
import Store from "./store";

const MOUNT_NODE = document.getElementById('app');
const store = new Store();


ReactDOM.render(
  <Provider>
    <App store={store} />
  </Provider>,
  MOUNT_NODE
);

if (module.hot) {
  module.hot.accept(err => {
    if (err) {
      console.error("Cannot apply hot update", err);
    }
  });
}
  
