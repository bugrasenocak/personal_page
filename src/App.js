import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Social from "./pages/Social";
import Projects from "./pages/Projects";
import Twitter from "./pages/Twitter";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/social" component={Social} />
          <Route path="/projects" component={Projects} />
          <Route path="/twitter" component={Twitter} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
