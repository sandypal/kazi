import React from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
function CardanatomyList () {
	return <div>
<section className="guide_menu_list">
   <div className="container">
      <div className="row">
         <div className="col-md-12">
            <div className="nav_menu">
            <ul>
                  <li className="nav-item">
                     <Link className="nav-link" to="/guide">
                     OVERVIEW</Link>
                  </li>
                  <li className="nav-item">
                     <Link className="nav-link" to="/getting-started">
                     GETTING STARTED</Link>
                  </li>
                  <li className="nav-item">
                     <Link className="nav-link" to="/game-features">
                     GAME FEATURES</Link>
                  </li>
                  <li className="nav-item">
                     <Link className="nav-link active" to="/card-anatomy">
                     CARD ANATOMY</Link>
                  </li>
                  <li className="nav-item">
                     <Link className="nav-link" to="/weaponry">
                     WEAPONRY</Link>
                  </li>
                  <li className="nav-item">
                     <Link className="nav-link" to="/market-place">
                     MARKETPLACE</Link>
                  </li>
                  <li className="nav-item">
                     <Link className="nav-link" to="/cost-fees">
                     COST AND FEES</Link>
                  </li>
                  <li className="nav-item">
                     <Link className="nav-link" to="/faq">
                     FAQ</Link>
                  </li>
                  
               </ul>
            </div>
         </div>
      </div>
   </div>
</section>
    </div>
}
export default CardanatomyList;