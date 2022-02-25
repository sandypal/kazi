import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import About from './component/Pages/About/About';
import Contact from './component/Contact';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import SignIn from './component/UserPage/SignIn';
import Signup from './component/UserPage/Signup';
import ConnectWallet from './component/UserPage/ConnectWallet';
import Story from './component/Pages/Story/Story';
import AllChapters from './component/Pages/Chapters/AllChapters';
import PlotSummary from './component/Pages/PlotSummary/PlotSummary';
import Genesis from './component/Pages/Genesis/Genesis';
import Alice from './component/Pages/Alice/Alice';
import Blacknet from './component/Pages/Blacknet/Blacknet';
import Humanity from './component/Pages/Humanity/Humanity';
import Metaverse from './component/Pages/Metaverse/Metaverse';
import Guide from './component/Pages/Guide/Guide';
import Footer from './component/Footer/Footer';

class App extends Component {
  render() {
    return (
       <Router>
           <div className="App">
            <Header/>           
           </div>
           <Routes>          
            <Route exact path='/' element={ <Home/>}></Route>
            <Route exact path='/story' element={< Story />}></Route>
            <Route exact path='/allchapters' element={< AllChapters />}></Route>
            <Route exact path='/plotsummary' element={< PlotSummary />}></Route>
            <Route exact path='/genesis' element={< Genesis />}></Route>
            <Route exact path='/alice' element={< Alice />}></Route>
            <Route exact path='/blacknet' element={< Blacknet />}></Route>
            <Route exact path='/humanity' element={< Humanity />}></Route>
            <Route exact path='/metaverse' element={< Metaverse />}></Route>
            <Route exact path='/guide' element={< Guide />}></Route> 
            <Route exact path='/about' element={< About />}></Route>
            <Route exact path='/contact' element={< Contact />}></Route>
            <Route exact path='/signin' element={< SignIn />}></Route>
            <Route exact path='/signup' element={< Signup />}></Route>
            <Route exact path='/connect-wallet' element={< ConnectWallet />}></Route>
          </Routes>
          <Footer/>
       </Router>
   );
  }
}

export default App;
