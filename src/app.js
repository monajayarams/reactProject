import React from "react";
import { HashRouter as Router, Route, NavLink } from "react-router-dom";

import Home from "./home";
import Summary from "./summary";
import Form from "./form";
import Details from "./details";

import "./styles.scss";

const App = () => (
  <Router>
    <div className="container">
      <div className="nav">
        <div className="logo">MJ</div>
        <div className="nav-content">
          <ul className="horizontal">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/summary">Summary</NavLink>
            </li>
            <li>
              <NavLink to="/form">Form</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/summary" component={Summary} />
        <Route path="/form" component={Form} />
        <Route path="/details" component={Details} />
      </div>
    </div>
  </Router>
);

export default App;
