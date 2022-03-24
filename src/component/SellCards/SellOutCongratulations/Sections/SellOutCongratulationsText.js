import React from 'react';
import collect_cards from '../Images/collect_cards.png';
function CongratulationsText(){
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
       <div className="row align-items-center ">
          <div className="col-md-6">
             <div className="sell_card_succ_img">
                <img src={collect_cards}/>
             </div>
          </div>
          <div className="col-md-6">
             <div className="sell_card_succ_info">
                <h4>CARD NAME</h4>
                <h5>Human</h5>
                <div className="sell_card_list_box">
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
                   <h3>Congratulations!</h3>
                   
                  <p>Your card is now auctioned   <br></br><strong>For sale</strong></p>
                  
                 
               <div className="price_table">
                  <ul>
                     <li className="border-end">
                     Fixed price<br></br><strong>50 MATIC</strong>
                     </li>
                     <li>
                     Sale time<br></br><strong className="text-danger">01:60:50</strong>
                     </li>
                  </ul>
                  
               </div>
               <div className="purchase_btn">
                     <a className="btn" href="/sell-auction">WITHDRAW AUCTION</a>
                  </div>
                  
                  
                </div>
             </div>
          </div>
       </div>
    </div>
 </section>
</div>


}
export default CongratulationsText;