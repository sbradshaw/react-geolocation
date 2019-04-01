import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import App from "./pages/App";

const Root = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
      </Switch>
    </Router>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));
