import React from 'react';
import collect_cards from '../Images/collect_cards.png';
function ConfirmationMsgText(){
 return <div>
     <section className="confirmation">
     <div className="container">
     
<div className="row">
   <div className="col-md-12">
   <div className="confirmation_heading">
   <h2>BREED SUCCESSFUL!</h2>
   </div>
   </div>
</div>
   <div className="row align-items-center ">
      
   <div className="col-md-6">
     <div className="card_img">
     <img src={collect_cards}/>
     </div>
</div>
<div className="col-md-6">
<div className="enlist_card">
              <h3>Congratulations!</h3>
              <p>Your card has<br></br>
              <span>Joined the war</span>
              </p>

            
          </div>
      <div className="card_info_text">
          <h4>CARD NAME</h4>
          <h5>Human</h5>
          <div className="card_list_box">
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
          <div className="enlist_card">
            <div className="form-floating">
              <label>Transaction hash (TxHash) <i class="fal fa-plus"></i></label>
  <textarea className="form-control" id="floatingTextarea2" ></textarea>
 
</div>
<a className="btn" href="/breeding">BREED SUCCESSFUL!</a>
          </div>
          </div>
</div>
   </div>

                </div>
         </section>


 </div>


}
export default ConfirmationMsgText;