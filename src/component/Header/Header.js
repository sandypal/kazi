import React from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import LOGO from "../Header/LOGO.png";
import avatar from "../Header/avatar.png";

import '../Header/Header.css';

function Nav () {
	return <div>
		 <header className="header_section">           
               <nav className="navbar navbar-expand-xl navbar-light ">
                  <div className="container-fluid">
                     <Link className="navbar-brand" to="/"><img src={LOGO}/></Link>
                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                     <span className="navbar-toggler-icon"><i class="fal fa-bars"></i></span>
                     </button>
                     <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                           <li className="nav-item dropdown">
                              <Link className="nav-link dropdown-toggle" to="/story">
                              Story
                              </Link>
                              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                              <hr></hr>
                              <li><Link className="dropdown-item" to="/plotsummary">Plot summary</Link></li>
                                 <li><Link className="dropdown-item" to="/allchapters">All chapters</Link></li>
                                 {/* <li><Link className="dropdown-item" to="/genesis">The Genesis</Link></li> */}
                                 <hr></hr>
                              </ul>
                           </li>
                           <li className="nav-item dropdown">
                              <Link className="nav-link dropdown-toggle" to="/metaverse">
                              Metaverse
                              </Link>
                              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                              <hr></hr>
                                 <li><Link className="dropdown-item" to="/blacknet">Blacknet</Link></li>
                                 <li><Link className="dropdown-item" to="/alice">Alice</Link></li>
                                 <li><Link className="dropdown-item" to="/humanity">Humanity</Link></li>
                                 <hr></hr>
                              </ul>
                           </li>
                           <li className="nav-item dropdown">
                              <Link className="nav-link dropdown-toggle" to="/cardcollection">
                              Card collection
                              </Link>
                              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                              <hr></hr>
                                 <li><Link className="dropdown-item" to="#">All cards</Link></li>
                                 <li><Link className="dropdown-item" to="/blacknet">Blacknet</Link></li>
                                 <li><Link className="dropdown-item" to="/alice">Alice</Link></li>
                                 <li><Link className="dropdown-item" to="/humanity">Humanity</Link></li>
                                 <hr></hr>
                              </ul>
                           </li>
                           <li className="nav-item dropdown">
                              <Link className="nav-link dropdown-toggle" to="#">
                              Play
                              </Link>
                              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                 <hr></hr>
                                 <li><Link className="dropdown-item" to="#">Breeding Lab</Link></li>
                                 <li><Link className="dropdown-item" to="/battle-list">Battle list</Link></li>
                                 <li><Link className="dropdown-item" to="war-zone">War zone</Link></li>
                                 <li><Link className="dropdown-item" to="#">Promote cards</Link></li>
                                 <li><Link className="dropdown-item" to="#">Mutate cards</Link></li>
                                 <li><Link className="dropdown-item" to="#">Rename cards</Link></li>
                                 <hr></hr>
                                 </ul>
                           </li>
                           <li className="nav-item dropdown">
                              <Link className="nav-link dropdown-toggle" to="/guide" >
                              Guide
                              </Link>
                              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                              <hr></hr>
                                 <li><Link className="dropdown-item" to="/getting-started">Getting started</Link></li>
                                 <li><Link className="dropdown-item" to="/game-features">How to play</Link></li>
                                 <li><Link className="dropdown-item" to="/card-anatomy">Card Anatomy</Link></li>
                                 <li><Link className="dropdown-item" to="/market-place">Marketplace</Link></li>
                                 <li><Link className="dropdown-item" to="/cost-fees">Cost and fees</Link></li>
                                 <li><Link className="dropdown-item" to="/faq">FAQ</Link></li>
                                 <hr></hr>
                              </ul>
                           </li>
                           <li className="nav-item dropdown">
                              <Link className="nav-link dropdown-toggle" to="/More">
                              More
                              </Link>
                              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                              <hr></hr>
                                 <li><Link className="dropdown-item" to="/leaderboard">Leaderboard</Link></li>
                                 <li><Link className="dropdown-item" to="/weapons">Weapons’ list</Link></li>
                                 <li><Link className="dropdown-item" to="/whitepaper">Whitepaper</Link></li>
                                 <li><Link className="dropdown-item" to="/buy-nft">Buy NFTs</Link></li>
                                 <li><Link className="dropdown-item" to="/meet-team">Meet the team</Link></li>
                                 <hr></hr>
                              </ul>
                           </li>
                           <li className="nav-item">
                              <Link className="nav-link" to="/tesseract-ltd">Tesseract Ltd.</Link>
                           </li>
                           
                           <li className="nav-item">
                              <Link className="nav-link" to="/connect-wallet">Connect Wallet</Link>
                           </li>
                           <li className="nav-item">
                           <form className="form-inline md-form form-sm custom_search">
                               <i class="fal fa-search"></i>
                              <input className="form-control " type="text" placeholder="Search" aria-label="Search"/>
                            </form>
                           </li>
                           <li className="nav-item login_btn">
                              <Link className="nav-link" to="/signin">Sign In</Link>
                           </li>
                           <li className="nav-item signup_btn">
                              <Link className="nav-link" to="/signup">Sign Up</Link>
                           </li>
                           {/* <li className="nav-item dropdown profile_menu">
                              <Link className="nav-link dropdown-toggle" to="/profile">
                              <img className="rounded-circle header-profile-user" src={avatar} />
                              </Link>
                              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                 <li><Link className="dropdown-item" to="/profile-setting"> Account settings</Link></li>
                                 <li><Link className="dropdown-item" to="/signin">Logout</Link></li>
                              </ul>
                           </li> */}
                          
                           {/* <div className="search_box">
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
                        </div> */}
                        </ul>
                        

                     </div>
                  </div>
               </nav>
           
         </header>  
	</div>
}
export default Nav;
