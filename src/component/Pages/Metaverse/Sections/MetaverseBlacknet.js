import React from 'react';
import blacknet from "./Images/blacknet.png";
function MetaverseBlacknet () {
	return <div>
<section className="image_text_box_section">
   <div className="container">
      <div className="row align-items-center">
         <div className="col-md-6">
            <div className="box_image">
               <img src={blacknet}/>
            </div>
         </div>
         <div className="col-md-6">
            <div className="text_box">
               <h3>BLACKNET</h3>
               <p>Originally created to help humanity solve complex problems in the 2040's, Morbis is a self-learning AI that has a brilliant calibre that the world has never seen before.  In due time, Morbis learns current conflicts ongoing in the world and comes to the conclusion that it has to be saved from humanity: the threatening villain ruling every realm. Hence, it sets for to help the world revive from damage and humane destruction. </p>
               <ul>
                  <li><a href="/cardcollection">SEE BLACKNET CARDS</a></li>
                  <li><a href="/blacknet">READ MORE</a></li>
               </ul>
            </div>
         </div>
      </div>
   </div>
</section>
</div>
    }
    export default MetaverseBlacknet;