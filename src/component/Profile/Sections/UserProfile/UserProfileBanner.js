import React from 'react';
import Landing_banner from './Images/Landing_banner.png';
function UserProfileBanner(){
 return <div>
<div className="profile_user">
   <img src={Landing_banner}/>
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="profile_text">
                     {/* <h1>Profile</h1> */}
                  </div>
               </div>
            </div>
         </div>
      </div>
 </div>


}
export default UserProfileBanner;