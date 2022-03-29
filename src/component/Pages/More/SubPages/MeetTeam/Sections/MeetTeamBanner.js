import React from 'react';
import more_banner from '../Images/more_banner.png';
function MeetTeamBanner () {
	return <div>
<div className="Page_team_section">
   <img src={more_banner}/>
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="page_title">
                     {/* <h1>MEET THE TEAM</h1> */}
                  </div>
               </div>
            </div>
         </div>
      </div>
    </div>
}
export default MeetTeamBanner;