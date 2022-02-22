import React from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import LOGO from "../Footer/LOGO.png";
import '../Footer/Footer.css';
function Footer () {
   
	return <div>
<footer>
   <div className="container">
      <div className="row align-items-center">
         <div className="col-md-4 col-xl-3">
            <div className="footer_logo">
			<img src={LOGO}/>
            </div>
         </div>
         <div className="col-md-4 col-xl-2">
            <div className="footer_menu">
            <ul>
               <li><Link to="#">My Profile</Link></li>
               <li><Link to="#">Search</Link></li>
               <li><Link to="#">Blog</Link></li>
               <li><Link to="#">Gameplay Guide</Link></li>
               <li><Link to="#">FAQS</Link></li>
               <li><Link to="#">Terms and Conditions</Link></li>
            </ul>
         </div>
         </div>
         <div className="col-md-4 col-xl-2">
            <div className="footer_menu">
               <ul>
                  <li><Link to="#">About</Link></li>
                  <li><Link to="#">Meet the Teem</Link></li>
                  <li><Link to="#">Newsletter</Link></li>
                  <li><Link to="#">Email  us</Link></li>
                  <li><Link to="#">Game Credits</Link></li>
                  <li><Link to="#">Terms and Conditions</Link></li>
               </ul>
            </div>
         </div>
         <div className="col-md-4 col-xl-2">
            <div className="footer_menu">
              
               <ul>
                  <li><Link to="#">@name_01</Link></li>
                  <li><Link to="#">Name</Link></li>
                  <li><Link to="#">Name</Link></li>
                  <li><Link to="#">Name#4512</Link></li>
                  <li><Link to="#">#name_0021</Link></li>
                  <li><Link to="#">#name_0022</Link></li>
               </ul>
            </div>
         </div>
         <div className="col-md-4 col-xl-3">
            <div className="footer_search">
               <form className="navbar-form" role="search">
                  <div className="input-group add-on">
                    <input className="form-control" placeholder="search heare..." name="srch-term" id="srch-term" type="text" />
                    <div className="input-group-btn">
                      <button className="btn btn-default" type="submit"><i className="fal fa-search"></i></button>
                    </div>
                  </div>
                </form>
                <Link to="#">BUY NFTS</Link>
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
         <div className="row align-items-center"><div className="col-md-12">
            <div className="copy_right"><p>@copyright {new Date().getFullYear()}</p></div>
         </div></div>
         </div>
</footer>
</div>
}
export default Footer;