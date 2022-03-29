import React from 'react';
import Battlefield from '../Sections/WarContentBox/Battlefield';
import CreateBattlefield from '../Sections/WarContentBox/CreateBattlefield';
import CreatePopup from '../Sections/WarContentBox/CreatePopup';

function WarzoneContent(){
 return <div>
<section className="warzone_content">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                   <div className="warzone_field">
                  <Battlefield/>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <section className="create_field">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                   <div className="create_battlefield">
                       <h2>CREATE A NEW BATTLEFIELD</h2>
                       <p><i class="fal fa-info-circle"></i><em>Select any one option. Only one battlefield can be created at a time</em></p>
                  <CreateBattlefield/>
                  <CreatePopup/>
                  </div>
               </div>
            </div>
         </div>
      </section>
 </div>


}
export default WarzoneContent;