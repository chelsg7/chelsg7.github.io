import React, { Component } from 'react';
import './App.css';
import About from './components/aboutMe';
import Work from './components/work'
import Contact from './components/contact';
import Navvy from './components/Nav';
import Footer from './components/footer';
import 'bootstrap/dist/css/bootstrap.css';


class App extends Component {
  render() {
    return (
      <section className="App">
      <div className="Site-content">
      <Navvy/>
        <About/>
        <Work/>
        <Contact/>
      </div>
      <Footer/>
      </section>
    );
  }
}

export default App;
