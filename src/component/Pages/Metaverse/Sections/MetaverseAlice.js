import React from 'react';
import alice from "./Images/alice.png";
function MetaverseAlice () {
	return <div>
<section className="image_text_box_section">
   <div className="container">
      <div className="row align-items-center">
      <div className="col-md-6">
            <div className="text_box">
               <h3>ALICE</h3>
               <p>As humanity suddenly faces threats to the unbelievably powerful and violent Blacknet, The Doctor creates Alice: another AI system that holds information and tools to decode Blacknets objectives. Together with Alice, humanity strives to earn victory and keep the world to themselves. </p>
               <ul>
                  <li><a href="/cardcollection">SEE ALICE CARDS</a></li>
                  <li><a href="/alice">READ MORE</a></li>
               </ul>
            </div>
         </div>
         <div className="col-md-6">
            <div className="box_image">
               <img src={alice}/>
            </div>
         </div>
        
      </div>
   </div>
</section>
</div>
    }
    export default MetaverseAlice;