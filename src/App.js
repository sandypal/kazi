import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Home from './component/home';
import About from './component/About';
import Contact from './component/Contact';
import Nav from './component/Nav';

class App extends Component {
  render() {
    return (
       <Router>
           <div className="App">
            <Nav/>
           </div>
           <Routes>
                 <Route exact path='/' element={< Home />}></Route>
                 <Route exact path='/about' element={< About />}></Route>
                 <Route exact path='/contact' element={< Contact />}></Route>
          </Routes>
       </Router>
   );
  }
}

export default App;
