import React from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
function LeaderboardList () {
	return <div>
<section className="more_menu_list">
   <div className="container">
      <div className="row">
         <div className="col-md-12">
            <div className="nav_menu">
            <ul>
                  <li className="nav-item">
                     <Link className="nav-link active" to="/leaderboard">
                     LEADERBOARD</Link>
                  </li>
                  <li className="nav-item">
                     <Link className="nav-link" to="/ranks">
                     RANKS</Link>
                  </li>
                  <li className="nav-item">
                     <Link className="nav-link" to="/weapons">
                     WEAPONS’ LIST</Link>
                  </li>
                  <li className="nav-item">
                     <Link className="nav-link" to="/whitepaper">
                     WHITEPAPER</Link>
                  </li>
                  <li className="nav-item">
                     <Link className="nav-link" to="/meet-team">
                     MEET THE TEAM</Link>
                  </li>
                  <li className="nav-item">
                     <Link className="nav-link" to="/buy-nft">
                     BUY NFTs</Link>
                  </li>
               </ul>
            </div>
         </div>
      </div>
   </div>
</section>
    </div>
}
export default LeaderboardList;