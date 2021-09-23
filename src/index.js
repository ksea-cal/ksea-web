import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import App from './App';
import { store } from './redux/reducer';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import Header from './components/generic/header';

const routing = (
  <Router>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={App} />
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {routing}
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
