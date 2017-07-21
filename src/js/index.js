import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route } from 'react-router-dom';

import Layout from "./pages/layout";

const app = document.getElementById('app');

ReactDOM.render(
  <Router>
    <Route exact path="/" component={Layout} />
  </Router>,
app);
