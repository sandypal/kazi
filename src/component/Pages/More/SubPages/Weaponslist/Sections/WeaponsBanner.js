import React from 'react';
import weaponry_banner from '../Images/weaponry_banner.png';
function WeaponsBanner () {
	return <div>
<div className="Page_weapon_section">
   <img src={weaponry_banner}/>
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="page_title">
                     {/* <h1>WEAPONS’ LIST</h1> */}
                  </div>
               </div>
            </div>
         </div>
      </div>
    </div>
}
export default WeaponsBanner;