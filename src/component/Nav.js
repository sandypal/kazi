import React from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
function Nav () {
	return <div>
		 <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
	</div>
}
export default Nav;
