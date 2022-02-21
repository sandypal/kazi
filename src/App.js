import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import About from './component/About';
import Contact from './component/Contact';
import Header from './component/Header';
import Home from './component/Home';
import Login from './component/Login';
import Signup from './component/Signup';
import Footer from './component/Footer';

class App extends Component {
  render() {
    return (
       <Router>
           <div className="App">
            <Header/>           
           </div>
           <Routes>          
            <Route exact path='/' element={ <Home/>}></Route>
            <Route exact path='/about' element={< About />}></Route>
            <Route exact path='/contact' element={< Contact />}></Route>
            <Route exact path='/login' element={< Login />}></Route>
            <Route exact path='/signup' element={< Signup />}></Route>
          </Routes>
          <Footer/>
       </Router>
   );
  }
}

export default App;
