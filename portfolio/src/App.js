import React from "react"
import Navbar from "./components/Navbar"
import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Project from "./components/Project"
import { BrowserRouter as Router, Route} from "react-router-dom"
import './App.css';

function App() {
  return (
    <Router>
    <div>
      <Header />
      <Navbar />
        <Route exact path="/" component={About} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/portfolio" component={Project} />
      <Footer />
    </div>
  </Router>
  );
}

export default App;
