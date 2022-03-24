import React from 'react';
import collect_cards from '../Images/collect_cards.png';
function CongratulationsText(){
 return <div>
 <section className="purchase_text">
    <div className="container">
       <div className="row">
          <div className="col-md-12">
             <div className="purchase_heading">
                <h2>Purchase card</h2>
             </div>
          </div>
       </div>
       <div className="row align-items-center ">
          <div className="col-md-6">
             <div className="purchase_succ_img">
                <img src={collect_cards}/>
             </div>
          </div>
          <div className="col-md-6">
             <div className="purchase_succ_info">
                <h4>CARD NAME</h4>
                <h5>Human</h5>
                <div className="purchase_list_box">
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
                   <h3>Congratulations!</h3>
                   <p>You purchased a<br></br>
                      <span>New card</span>
                   </p>
                   <div className="purchase form-floating">
                      <label>Transaction hash (TxHash) <i class="fal fa-plus"></i></label>
                      <textarea className="form-control" id="floatingTextarea2" ></textarea>
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