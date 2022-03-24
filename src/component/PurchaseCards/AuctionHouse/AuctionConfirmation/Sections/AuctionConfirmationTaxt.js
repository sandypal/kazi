import React from 'react';
import blacknet1 from "../Images/blacknet1.png";
function AuctionConfirmationTaxt(){
 return <div>
<section className="purchase_text">
   <div className="container">
      <div className="row">
         <div className="col-md-12">
            <div className="purchase_heading">
               <h2>NEW BID</h2>
            </div>
         </div>
      </div>
      <div className="row align-items-center">
         <div className="col-md-6">
            <div className="purchase_succ_img">
               <img src={blacknet1}/>
            </div>
         </div>
         <div className="col-md-6">
            
               <div className="purchase_succ_info">
                  <h4>CARD NAME</h4>
                  <h5>Human</h5>
                  <div class="purchase_list_box">
                     <ul>
                        <li><span>Rank:</span> Private</li>
                        <li><span>Type:</span> Gen 1</li>
                        <li><span>IQ:</span> 101</li>
                        <li><span>Potential:</span> 101</li>
                        <li><span>EQ:</span> 101</li>
                        <li><span>Wisdom:</span> 101</li>
                        <li><span>Melee:</span> 101</li>
                        <li><span>Leadership:</span> 101</li>
                        <li><span>Weapon:</span> 101</li>
                        <li><span>Feature 9:</span> 101</li>
                     </ul>
                  </div>
                  <div className="purchase_succ_text">
                  <h3>New bid</h3>
                  <div className="bid_price">
                  <div className="float-left">
                  <span>Reserved price<br></br><strong>50 MATIC</strong></span>
                  </div>
                  <div className="float-right">
                     <span>Max bid price<br></br><strong>50 MATIC</strong></span>
                     </div>
                     <div className="float-left">
                  <span>Offered price<br></br>
                     <div class="form-floating mb-3">
                        <input type="text" class="form-control" placeholder="MATIC"/>
                     </div>
                  </span>
                  </div>
                  <div className="float-right">
                     <span>Time left:<br></br><strong className="text-danger">01:60:50</strong></span>
                     </div>
                  </div>
                  <div className="purchase_btn">
                     <a className="btn" href="/auction-congratulations">CONFIRM</a>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</section>
 </div>
 

}
export default AuctionConfirmationTaxt;