import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import About from './component/Pages/About/About';
import Contact from './component/Pages/Contact/Contact';
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
import Cardanatomy from './component/Pages/Guide/Cardanatomy';
import Costfees from './component/Pages/Guide/Costfees';
import Faq from './component/Pages/Guide/Faq';
import Gamefeatures from './component/Pages/Guide/Gamefeatures';
import Gettingstarted from './component/Pages/Guide/Gettingstarted';
import Marketplace from './component/Pages/Guide/Marketplace';
import Weaponry from './component/Pages/Guide/Weaponry';
import CardCollection from './component/Pages/Cardcollection/CardCollection';
import More from './component/Pages/More/More';
import Leaderboard from './component/Pages/More/Leaderboard';
import Weapons from './component/Pages/More/Weapons';
import Whitepaper from './component/Pages/More/Whitepaper';
import Meetteam from './component/Pages/More/Meetteam';
import Buynft from './component/Pages/More/Buynft';
import TesseractLtd from './component/Pages/TesseractLtd/TesseractLtd';
import Visit from './component/Pages/Visit/Visit';
import Profile from './component/Profile/Profile';
import IndividualCard from './component/Profile/Pages/IndividualCard/IndividualCard';
import ProfileSetting from './component/Profile/Sections/ProfileSetting/ProfileSetting';
import BattleList from './component/Profile/Pages/BattleList/BattleList';
import RestingCard from './component/Profile/Pages/RestingCard/RestingCard';
import Warzone from './component/Profile/Pages/Warzone/Warzone';
import WarBattlefield from './component/Profile/Pages/Warzone/Sections/WarBattlefield/WarBattlefield';
import WarConfirmation from './component/Profile/Pages/Warzone/Sections/WarConfirmation/WarConfirmation';
import ConfirmationMessage from './component/Profile/Pages/Warzone/Sections/ConfirmationMessage/ConfirmationMessage';
import Breeding from './component/Profile/Pages/Breeding/Breeding';
import BreedSelf from './component/Profile/Pages/Breeding/BreedSelf/BreedSelf';
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
            <Route exact path='/card-anatomy' element={< Cardanatomy />}></Route> 
            <Route exact path='/cost-fees' element={< Costfees />}></Route> 
            <Route exact path='/faq' element={< Faq />}></Route> 
            <Route exact path='/game-features' element={< Gamefeatures />}></Route> 
            <Route exact path='/getting-started' element={< Gettingstarted />}></Route> 
            <Route exact path='/market-place' element={< Marketplace />}></Route> 
            <Route exact path='/weaponry' element={< Weaponry />}></Route>  
            <Route exact path='/cardcollection' element={< CardCollection />}></Route> 
            <Route exact path='/More' element={< More />}></Route> 
            <Route exact path='/leaderboard' element={< Leaderboard />}></Route>
            <Route exact path='/weapons' element={< Weapons />}></Route>
            <Route exact path='/whitepaper' element={< Whitepaper />}></Route>
            <Route exact path='/meet-team' element={< Meetteam />}></Route>
            <Route exact path='/buy-nft' element={< Buynft />}></Route>
            <Route exact path='/tesseract-ltd' element={< TesseractLtd />}></Route>
            <Route exact path='/about' element={< About />}></Route>
            <Route exact path='/visit' element={< Visit />}></Route>
            <Route exact path='/contact-us' element={< Contact />}></Route>
            <Route exact path='/signin' element={< SignIn />}></Route>
            <Route exact path='/signup' element={< Signup />}></Route>
            <Route exact path='/profile' element={< Profile />}></Route>
            <Route exact path='/individual-card' element={< IndividualCard />}></Route>
            <Route exact path='/profile-setting' element={< ProfileSetting />}></Route>
            <Route exact path='/battle-list' element={< BattleList />}></Route>
            <Route exact path='/resting-card' element={< RestingCard />}></Route>
            <Route exact path='/war-zone' element={< Warzone />}></Route>
            <Route exact path='/battle-field' element={< WarBattlefield />}></Route>
            <Route exact path='/confirmation' element={< WarConfirmation />}></Route>
            <Route exact path='/confirmation-message' element={< ConfirmationMessage />}></Route>
            <Route exact path='/breeding' element={< Breeding />}></Route>
            <Route exact path='/breed-self' element={< BreedSelf />}></Route>
            <Route exact path='/connect-wallet' element={< ConnectWallet />}></Route>
          </Routes>
          <Footer/>
       </Router>
   );
  }
}

export default App;
