import React from 'react';
import humanity_metaverse from "./Images/humanity_metaverse.png";
function MetaverseHumanity () {
	return <div>
<section className="image_text_box_section">
   <div className="container">
      <div className="row align-items-center">
         <div className="col-md-6">
            <div className="box_image">
               <img src={humanity_metaverse}/>
            </div>
         </div>
         <div className="col-md-6">
            <div className="text_box">
               <h3>HUMANITY</h3>
               <p>The most powerful species on Earth have experimented on developments that make life easier. Call it greed or an unexpected turn of fate, humans learn about consciousness and try to create an artificial conscious being. The result of the experiment would have been revolutionary. But the experiment backfires. And in the process, their own creation now sought to destroy them. The humans soon have to come up with solutions to save themselves from the AI that has gone rampant.</p>
               <ul>
                  <li><a href="/humanity-card">SEE HUMANITY CARDS</a></li>
                  <li><a href="/humanity">READ MORE</a></li>
               </ul>
            </div>
         </div>
      </div>
   </div>
</section>
</div>
    }
    export default MetaverseHumanity;