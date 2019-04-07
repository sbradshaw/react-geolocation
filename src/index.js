import React, { useContext, useReducer } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import App from "./pages/App";
import Start from "./pages/Start";
import Context from "./context";
import reducer from "./reducer";

require("dotenv").config();

const Root = () => {
  const initialState = useContext(Context);
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log({ state });

  return (
    <Router>
      <Context.Provider value={{ state, dispatch }}>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/login" component={Start} />
        </Switch>
      </Context.Provider>
    </Router>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));
