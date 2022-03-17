import React from 'react';
import blacknet_logo from "../Images/blacknet_logo.png";
import alice_logo from "../Images/alice_logo.png";
import humanity_logo from "../Images/humanity_logo.png";
function Genesisbanner () {
	return <div>
<div className="Page_card_section">
   <div className="container">
      <div className="row">
         <div className="col-md-4">
            <div className="battle_box">
               <ul>
                  <li><img src={blacknet_logo}/></li>
                  <li><img src={humanity_logo}/></li>
               </ul>
               <div className="battle_proess">
                  <h3>Blacknet & Humanity</h3>
                  <h4>9%</h4>
                  <div className="progress">
                     <div className="progress-bar" role="progressbar" style={{width: "9%"}} aria-valuenow="9" aria-valuemin="0" aria-valuemax="100">
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div className="col-md-4">
            <div className="battle_box">
            <ul>
                  <li><img src={alice_logo}/></li>
                  <li><img src={humanity_logo}/></li>
               </ul>
               <div className="battle_proess">
                  <h3>Humanity & Alice</h3>
                  <h4>48%</h4>
                  <div className="progress">
                     <div className="progress-bar" role="progressbar" style={{width: "48%"}} aria-valuenow="48" aria-valuemin="0" aria-valuemax="100">
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div className="col-md-4">
            <div className="battle_box">
            <ul>
                  <li><img src={alice_logo}/></li>
                  <li><img src={blacknet_logo}/></li>
               </ul>
               <div className="battle_proess">
                  <h3>Alice & Blacknet</h3>
                  <h4>17%</h4>
                  <div className="progress">
                     <div className="progress-bar" role="progressbar" style={{width: "17%"}} aria-valuenow="17" aria-valuemin="0" aria-valuemax="100">
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>
</div>
    </div>
}
export default Genesisbanner;