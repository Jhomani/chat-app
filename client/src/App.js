import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Join from "./components/Join/Join";
import Login from "./components/Login/Login";
import Chat from "./components/Chat/Chat";

const App = () => (
  <Router>
    <Route path="/" exact component={Join} ></Route>
    <Route path="/chat" component={Chat} ></Route>
    <Route path="/login" exact component={Login} ></Route>
  </Router>
);

export default App;