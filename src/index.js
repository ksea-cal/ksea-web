import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import App from "./App";
import { store } from "./redux/reducer";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import Header from "./components/generic/header";
// import Home from "./pages/home";
// import Events from "./pages/events";
// import Focusgroup from "./pages/focusgroup";
// import Alumni from "./pages/alumni";

import Members from "./pages/members";

import User from "./pages/user";

const routing = (
  <Router>
    <Switch>
      <div>
        <style jsx global>
          {`
            body {
              margin: 0px;
              padding: 0px;
            }
          `}
        </style>
        <Header />
        {/* <Route path="/home" component={Home} />
        <Route path="/events" component={Events} />
        <Route path="/focusgroup" component={Focusgroup} /> */}
        <Route path="/members" component={Members} />
        {/* <Route path="/alumni" component={Alumni} /> */}
        <Route path="/user" component={User} />
      </div>
    </Switch>
  </Router>
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>{routing}</Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
