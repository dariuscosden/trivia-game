import React from "react";

// External dependencies
//
import { BrowserRouter as Router } from "react-router-dom";

// Internal dependencies
//
import Layout from "./containers/layout";

const App = () => {
  return (
    <Router>
      <Layout />
    </Router>
  );
};

export default App;
