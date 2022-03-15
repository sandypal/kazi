import React from 'react';

function BreedCard(){
 return <div>
<div className="battle_zone">
   <div className="container">
      <div className="row align-items-center">
         <div className="col-md-10 offset-md-1">
            <div className="battle_zone_box">
               <h2>BREED CARDS</h2>
               <ul>
                  <li>
                     <div className="breeding_lab">
                        <div className="upload_img">
                           <div class="image-upload"><label for="file-input"><i class="far fa-plus"></i><br></br>
                              Drag and drop card <br></br>to enter Battle</label><input id="file-input" type="file"/>
                           </div>
                        </div>
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
                     </div>
                  </li>
                  <li>
                     <div className="battle_vs">
                        <strong>VS</strong>
                     </div>
                  </li>
                  <li>
                     <div className="breeding_lab">
                        <div className="upload_img">
                           <div class="image-upload"><label for="file-input"><i class="far fa-plus"></i><br></br>
                              Drag and drop card <br></br>to enter Battle</label><input id="file-input" type="file"/>
                           </div>
                        </div>
                        <h4>CARD NAME</h4>
                        <h5>Human</h5>
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
                     </div>
                  </li>
               </ul>

               <div className="zone_btn">
                   <a className="btn" href="/breed-confirmation">INITIATE BREEDING</a>
                   </div>
            </div>
         </div>
      </div>
   </div>
</div>
 </div>

}
export default BreedCard;