import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import App from "./pages/App";
import Login from "./pages/Login";

const Root = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </Router>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));
