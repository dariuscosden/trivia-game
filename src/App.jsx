import React from "react";

// External dependencies
//
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

// Internal dependencies
//
import Layout from "./containers/layout";
import { store } from "./state";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Layout />
      </Router>
    </Provider>
  );
};

export default App;
