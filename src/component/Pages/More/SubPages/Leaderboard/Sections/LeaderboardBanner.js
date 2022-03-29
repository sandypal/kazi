import React from 'react';
import leader_banner from '../Images/leader_banner.png';
function LeaderboardBanner () {
	return <div>
<div className="Leader_section">
   <img src={leader_banner}/>
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="page_title">
                     {/* <h1>Leaderboar</h1> */}
                  </div>
               </div>
            </div>
         </div>
      </div>
    </div>
}
export default LeaderboardBanner;