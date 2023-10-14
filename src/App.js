import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
// import ScrollToTopButton from "./components/ScrollToTopButton";
import "./App.css"; // Make sure you have this line to import the CSS file

const App = () => {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <About />
      <Projects />
      <Contact />
      {/* <ScrollToTopButton /> */}
    </div>
  );
};

export default App;
