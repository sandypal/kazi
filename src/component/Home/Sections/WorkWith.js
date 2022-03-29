import React from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
function WorkWith () {
	return <div>
<section className="work_section">
         <div className="container">
            <div className="row">
               
               <div className="col-md-10 offset-md-1">
                  <div className="work_text_box text-center">
                     <p>EXTREMIS enthuses players to strategize and form tactical alliances with others. Discover allies and make strategic partnerships through the EXTREMIS community platforms on Discord, Twitter, Facebook, Instagram and Youtube. Follow our pages to get story updates and game tips. Keep updated on your fellow EXTREMIS players by connecting with them through our communities.
                     </p>
                     <ul>
                   <li><Link to="#"><i className="fab fa-twitter"></i></Link></li>
                   <li><Link to="#"><i className="fab fa-youtube"></i></Link></li>
                   <li><Link to="#"><i className="fab fa-facebook"></i></Link></li>
                   <li><Link to="#"><i className="fab fa-discord"></i></Link></li>
                   <li><Link to="#"><i className="fab fa-instagram"></i></Link></li>
                  </ul>
                     <a className="work_byn btn" href="#">WORK WITH US</a>
                  </div>
               </div>
              
            </div>
         </div>
      </section>
    </div>
    }
    export default WorkWith;