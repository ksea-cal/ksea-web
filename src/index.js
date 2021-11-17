import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import App from './App';
import { store } from './redux/reducer';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import Header from './components/generic/header';
import User from './pages/user';
import Members from './pages/members';

const routing = (
  <Router>
    <Switch>
      <div>
        <style jsx global>{`
          body {
            margin: 0px;
            padding: 0px;
          }
        `}
        </style>
        <Header />
        <Route exact path="/" component={App} />
        <Route path="/user" component={User} />
        <Route path="/members" component={Members} />
      </div>
    </Switch>
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
