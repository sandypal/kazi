import React from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import LOGO from "../assets/LOGO.png";
function Nav () {
	return <div>
		 <header class="header_section">          
         <div className="container">
            <div className="row">
               <nav className="navbar navbar-expand-lg navbar-light">
                  <div className="container-fluid">
                     <Link className="navbar-brand" to="#"><img src={LOGO}/></Link>
                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                     <span className="navbar-toggler-icon"></span>
                     </button>
                     <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                           <li className="nav-item dropdown">
                              <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                              Story
                              </Link>
                              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                 <li><Link className="dropdown-item" to="#">Plot summary</Link></li>
                                 <li><Link className="dropdown-item" to="#">All chapters</Link></li>
                                 <li><Link className="dropdown-item" to="#">The Genesis</Link></li>
                              </ul>
                           </li>
                           <li className="nav-item dropdown">
                              <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                              Metaverse
                              </Link>
                              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                 <li><Link className="dropdown-item" to="#">Blacknet</Link></li>
                                 <li><Link className="dropdown-item" to="#">Alice</Link></li>
                                 <li><Link className="dropdown-item" to="#">Humanity</Link></li>
                              </ul>
                           </li>
                           <li className="nav-item dropdown">
                              <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                              Card collection
                              </Link>
                              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                 <li><Link className="dropdown-item" to="/about">All cards</Link></li>
                                 <li><Link className="dropdown-item" to="#">Blacknet</Link></li>
                                 <li><Link className="dropdown-item" to="#">Alice</Link></li>
                                 <li><Link className="dropdown-item" to="#">Humanity</Link></li>
                              </ul>
                           </li>
                           <li className="nav-item dropdown">
                              <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                              Play
                              </Link>
                              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                 <li><Link className="dropdown-item" to="./login.html">Sign In</Link></li>
                                 <li><Link className="dropdown-item" to="./sign-up.html">Sign Up</Link></li>
                                 </ul>
                           </li>
                           <li className="nav-item dropdown">
                              <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                              Guide
                              </Link>
                              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                 <li><Link className="dropdown-item" to="./login.html">Getting started</Link></li>
                                 <li><Link className="dropdown-item" to="./sign-up.html">How to play</Link></li>
                                 <li><Link className="dropdown-item" to="#">Card Anatomy</Link></li>
                                 <li><Link className="dropdown-item" to="./sign-up.html">Marketplace</Link></li>
                                 <li><Link className="dropdown-item" to="#">Cost and fees</Link></li>
                                 <li><Link className="dropdown-item" to="#">FAQ</Link></li>
                              </ul>
                           </li>
                           <li className="nav-item dropdown">
                              <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                              More
                              </Link>
                              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                 <li><Link className="dropdown-item" to="./login.html">Leaderboard</Link></li>
                                 <li><Link className="dropdown-item" to="./sign-up.html">Weapons’ list</Link></li>
                                 <li><Link className="dropdown-item" to="#">Whitepaper</Link></li>
                                 <li><Link className="dropdown-item" to="./sign-up.html">Buy NFTs</Link></li>
                                 <li><Link className="dropdown-item" to="#">Meet the team</Link></li>
                              </ul>
                           </li>
                           <li className="nav-item dropdown">
                              <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                              Tesseract Ltd.
                              </Link>
                              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                 <li><Link className="dropdown-item" to="./login.html">About</Link></li>
                                 <li><Link className="dropdown-item" to="./sign-up.html">Visit</Link></li>
                              </ul>
                           </li>
                           <li className="nav-item">
                              <Link className="nav-link" to="#">Connect Wallet </Link>
                           </li>
                           <li className="nav-item login_btn">
                              <Link className="nav-link" to="./login.html">Sign In</Link>
                           </li>
                           <li className="nav-item signup_btn">
                              <Link className="nav-link" to="./sign-up.html">Sign Up</Link>
                           </li>
                        </ul>
                        <div className="search_box">
                           <div className="search-toggle">
                              <button className="search-icon icon-search"><i className="fal fa-search"></i></button>
                              <button className="search-icon icon-close"><i className="fal fa-times"></i></button>
                           </div>
                           <div className="search-container">
                              <form>
                                 <input type="text" name="q" id="search-terms" placeholder="Search terms..." />
                                 <button type="submit" name="submit" value="Go" className="search-icon"><i className="fal fa-search"></i></button>
                              </form>
                           </div>
                        </div>
                     </div>
                  </div>
               </nav>
            </div>
         </div>
         </header>  
	</div>
}
export default Nav;
