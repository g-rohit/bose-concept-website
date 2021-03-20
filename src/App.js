import React, { Component } from "react";
// import "./App.css";
import "./index.css";
import Home from "./components/pages";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";
import About from "./components/pages/about";
import Contact from "./components/pages/contact";
import PageNotFound from "./components/pages/404";
import Prouducts from "./components/pages/products";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/products" component={Prouducts} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/404" component={ PageNotFound } />
          <Redirect to="/404" />
        </Switch>
      </Router>
    );
  }
}

export default App;
