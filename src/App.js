import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import PageDeatil from "./components/PageDeatil";
import SecondPage from "./components/SecondPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/page" component={PageDeatil} />
        <Route exact path="/page2" component={SecondPage} />
      </Router>
    </div>
  );
}

export default App;
