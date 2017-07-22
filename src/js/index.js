import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route } from 'react-router-dom';

import Layout from "./pages/layout";
import Login from "./pages/login";

const app = document.getElementById('app');

ReactDOM.render(
  <Router>
    <div>
        <Route exact path="/" component={Layout} />
        <Route exact path="/login" component={Login} />
    </div>
  </Router>,
app);
