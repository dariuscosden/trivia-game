import React from "react";

// External dependencies
//
import { Route, Switch, withRouter } from "react-router-dom";

// Internal dependencies
//
import Homepage from "../homepage";
import Quiz from "../quiz";

const Layout = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <Homepage />} />
      <Route path="/quiz" render={() => <Quiz />} />
    </Switch>
  );
};

export default withRouter(Layout);
