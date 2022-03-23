import React from 'react';
import collect_cards from "../BetteBox/Images/collect_cards.png";
function Winner(){
 return <div>
<section id="winner" className="winner_section">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                   <div className="winner_heading text-center">
                       <h2>WINNER!</h2>
                       </div>
                   </div>
                  
                   </div>
                   <div className="row">
               <div className="col-md-6">
               <img src={collect_cards}/>
                   </div>
                   <div className="col-md-6">
                   <div className="battle_ready">
                   <h4>CARD NAME</h4>
      <h5>BLACKNET</h5>
      <div className="list_box">
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
          <div className="add_battle_btn">
<a href="/battle-list">ADD TO BATTLE LIST</a>
          </div>
                   </div>
                   </div>
                   </div>
                   </div>
                   </section>
 </div>
 }
 export default Winner;