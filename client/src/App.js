import React, { Component } from "react";
import "./App.css";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import Search from "./pages/Search"
import Saved from "./pages/Saved";

class App extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <Jumbotron/>
        <Switch>
            <Route exact path="/" component={Search}/>
            <Route path="/saved" component={Saved}/>
          </Switch>
      </Router>
    )
  }
}

export default App;
