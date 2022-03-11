import React from 'react';
import CardTab from '../Sections/CardTab';
function BreedSelfTaxt(){
 return <div>
<section className="breeding_text">
         <div className="container">
            <div className="row">
               <div className="col-md-10 offset-md-1">
                  <div className="breeding_tab">
                  <h2>MY CARDS</h2>
                 <p><i class="fal fa-info-circle"></i><em>Drag and drop cards on desired side to join the War</em></p>
<CardTab/>
                  </div>
               </div>
            </div>
         </div>
      </section>
 </div>
 

}
export default BreedSelfTaxt;