import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router,Routes, Route, Link,useLocation } from 'react-router-dom';
import LOGO from "../Footer/LOGO.png";
import '../Footer/Footer.css';



function Footer () {

   const location = useLocation();
   console.log('loca',location)
   const pathString = location.pathname;
   const exludePath =['/cardcollection','/alice-card','/blacknet-card','/humanity-card','/genesis-card','/breeding','/breed-self','/breed-others','/battle-list','/individual-card','/promote','/mutate','/rename','/marketplace' ];
  
  let footer;

  if(exludePath.includes(pathString)){
   footer = '';
  }else{
   footer =<div>
   <footer>
   <div className="container">
      <div className="row align-items-center">
         <div className="col-md-4 col-xl-3">
            <div className="footer_logo">
			<img className="align-top" src={LOGO}/>
         <div className="copy_right align-bottom"><p>© {new Date().getFullYear()} EXTREMIS All rights reserved.</p></div>
            </div>
         </div>
         <div className="col-md-4 col-xl-2">
            <div className="footer_menu">
            <ul>
               <li><Link to="/profile">My Profile</Link></li>
               <li><Link to="#">Blog</Link></li>
               <li><Link to="#">Gameplay Guide</Link></li>
               <li><Link to="/faq">FAQS</Link></li>
               <li><Link to="#">Subscribe</Link></li>
            </ul>
         </div>
         </div>
         <div className="col-md-4 col-xl-2">
            <div className="footer_menu">
               <ul>
                  <li><Link to="/about">About EXTREMIS</Link></li>
                  <li><Link to="/meet-team">Meet the Teem</Link></li>
                  <li><Link to="#">Credits</Link></li>
                  <li><Link className="text-danger" to="#">Terms of use</Link></li>
                  <li><Link className="text-danger" to="/contact-us">Contact us</Link></li>
               </ul>
            </div>
         </div>
         <div className="col-md-4 col-xl-2">
            <div className="footer_menu">
              
               <ul>
                  <li><Link to="#">Discord</Link></li>
                  <li><Link to="#">Twitter</Link></li>
                  <li><Link to="#">Facebook</Link></li>
                  <li><Link to="#">Instagram</Link></li>
                  <li><Link to="#">Youtube</Link></li>
               </ul>
            </div>
         </div>
         <div className="col-md-4 col-xl-3">
            <div className="footer_search">
               <form className="navbar-form" role="search">
                  <div className="input-group add-on">
                    <input className="form-control" placeholder="Search" name="srch-term" id="srch-term" type="text" />
                    <div className="input-group-btn">
                      <button className="btn btn-default" type="submit"><i className="fal fa-search"></i></button>
                    </div>
                  </div>
                </form>
                <Link to="/buy-nft">BUY NFTS</Link>
                <ul>
                   <li><Link to="#"><i className="fab fa-twitter"></i></Link></li>
                   <li><Link to="#"><i className="fab fa-youtube"></i></Link></li>
                   <li><Link to="#"><i className="fab fa-facebook"></i></Link></li>
                   <li><Link to="#"><i className="fab fa-discord"></i></Link></li>
                   <li><Link to="#"><i className="fab fa-instagram"></i></Link></li>
                  </ul>
            </div>
         </div>
         </div>
         </div>
</footer>
</div>;
  }
	return <div>
   
   {footer}
   </div>
}
export default Footer;