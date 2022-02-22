import React from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
function WorkWith () {
	return <div>
<section className="work_section">
         <div className="container">
            <div className="row">
               
               <div className="col-md-10 offset-md-1">
                  <div className="work_text_box text-center">
                     <p>Overlapping the feature image will be the title of this section (as shown above) and below
                        the above feature image and title will be this description section that will contain a small
                        introduction on how users can learn to play this game.
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