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
               <p>Created to help humans solve complex problems in the 2040s, Morbius is a self-learning AI having a brilliant calibre that the world has never seen before. Over time, it evolves into a conscious being. Morbius learns mimic human consciousness and programs itself to change as it sees fit. It deems humans a threat to the planet and pledges to eradicate human civilization. The army of Blacknet is thus born.</p>
               <ul>
                  <li><a href="/blacknet-card">SEE BLACKNET CARDS</a></li>
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