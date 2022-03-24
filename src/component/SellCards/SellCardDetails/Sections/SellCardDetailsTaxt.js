import React from 'react';
import blacknet1 from "../Images/blacknet1.png";
function SellCardDetailsTaxt(){
 return <div>
<section className="sell_card_text">
   <div className="container">
      <div className="row">
         <div className="col-md-12">
            <div className="sell_card_heading">
               <h2>SELL CARD</h2>
            </div>
         </div>
      </div>
      <div className="row align-items-center">
         <div className="col-md-6">
            <div className="sell_card_succ_img">
               <img src={blacknet1}/>
            </div>
         </div>
         <div className="col-md-6">
            
               <div className="sell_card_succ_info">
                  <h4>CARD NAME</h4>
                  <h5>Human</h5>
                  <div class="sell_card_list_box">
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
                  <div className="sell_card_succ_text">
                  <h3>Sell card?</h3>
                  <div className="sell_price">
                  <div className="sell_btn fixed">
                     <a className="btn" href="/sell-confirmation">FIXED SALE</a>
                  </div>
                  <div className="sell_btn">
                     <a className="btn" href="/sell-auction">AUCTION SALE</a>
                  </div>
                  </div>
                  
               </div>
            </div>
         </div>
      </div>
   </div>
</section>
 </div>
 

}
export default SellCardDetailsTaxt;