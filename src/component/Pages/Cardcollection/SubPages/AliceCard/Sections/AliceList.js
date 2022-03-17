import React from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
function AliceList () {
	return <div>
<section className="cards_menu_list">
   <div className="container">
      <div className="row">
         <div className="col-md-12">
            <div className="nav_menu">
            <ul>
                  <li className="nav-item">
                     <Link className="nav-link" to="/cardcollection">
                     ALL CARDS</Link>
                  </li>
                  <li className="nav-item">
                     <Link className="nav-link" to="/blacknet-card">
                     BLACKNET</Link>
                  </li>
                  <li className="nav-item">
                     <Link className="nav-link active" to="/alice-card">
                     ALICE</Link>
                  </li>
                  <li className="nav-item">
                     <Link className="nav-link" to="/humanity-card">
                     HUMANITY</Link>
                  </li>
                  <li className="nav-item">
                     <Link className="nav-link" to="/genesis-card">
                     GENESIS</Link>
                  </li>
                  </ul>
            </div>
         </div>
      </div>
   </div>
</section>
    </div>
}
export default AliceList;