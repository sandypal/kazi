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
               <p>At the onset of a sudden war declared by Blacknet, humanity faces the threat of a powerful AI opponent. To fight them off, Alice, another AI being, is created. Alice is programmed to act as allies holding information and tools to decode and nullify Blacknet's objectives. Together with Alice, humanity can defeat Blacknet and be victorious. But Alice has the freedom to choose either side.</p>
               <ul>
                  <li><a href="/alice-card">SEE ALICE CARDS</a></li>
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