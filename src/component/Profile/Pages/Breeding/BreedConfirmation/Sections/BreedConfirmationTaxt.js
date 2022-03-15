import React from 'react';
import blacknet1 from "../Images/blacknet1.png";
function BreedConfirmationTaxt(){
 return <div>
<section className="breeding_text">
         <div className="container">
         <div className="row">
               <div className="col-md-12">
                  <div className="breedcon_heading">
                  <h2>BREED SUCCESSFUL !</h2>
                  </div>
                  
               </div>
               
            </div>
            <div className="row align-items-center">
               <div className="col-md-6">
                 <div className="breed_succ_img">
                    <img src={blacknet1}/>
               </div>
               </div>
               <div className="col-md-6">
               <div className="breed_succ_text">
            <h3>Congratulations!</h3>
               <p>You have successfully made a <br></br><strong>New card</strong></p>
               <div className="breed_succ_info">
                  <h4>CARD NAME</h4>
                  <h5>BLACKNET</h5>
               <div class="list_box">
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
<div className="breed_back">
   <a className="btn" href="/breeding">BACK TO BREEDING LAB</a>
</div>
</div>
               </div>
               </div>
               
            </div>
         </div>
      </section>
 </div>
 

}
export default BreedConfirmationTaxt;