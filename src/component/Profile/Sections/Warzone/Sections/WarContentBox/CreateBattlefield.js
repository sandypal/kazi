import React from 'react';
import blacknet_logo from '../../Images/blacknet_logo.png';
import humanity_logo from '../../Images/humanity_logo.png';
import alice_logo from '../../Images/alice_logo.png';
function CreateBattlefield(){
 return <div>
     <div className="row">
   <div className="col-md-6 offset-md-3">
       <div className="create_zone">
   <form>
    <div className="form-group">
      <input type="checkbox" id="blacknetalice"/>
      <label for="blacknetalice">Blacknet VS Alice</label>
    </div>
    </form>
    <ul>
            <li><img src={blacknet_logo}/></li>
            <li>
               <div className="war_vs">
                  <strong className="align-middle">VS</strong>
               </div>
            </li>
            <li><img src={alice_logo}/></li>
         </ul>
       </div>
       <div className="create_zone">
   <form>
    <div className="form-group">
      <input type="checkbox" id="blacknethuman"/>
      <label for="blacknethuman">Blacknet VS Human</label>
    </div>
    </form>
    <ul>
            <li><img src={blacknet_logo}/></li>
            <li>
               <div className="war_vs">
                  <strong className="align-middle">VS</strong>
               </div>
            </li>
            <li><img src={humanity_logo}/></li>
         </ul>
       </div>
       <div className="create_zone">
   <form>
    <div className="form-group">
      <input type="checkbox" id="humanalice"/>
      <label for="humanalice">Human VS Alice</label>
    </div>
    </form>
    <ul>
            <li><img src={humanity_logo}/></li>
            <li>
               <div className="war_vs">
                  <strong className="align-middle">VS</strong>
               </div>
            </li>
            <li><img src={alice_logo}/></li>
         </ul>
       </div>
       <div className="create_button">
           <a className="btn" href="#">CREATE NEW BATTLEFIELD</a>
           </div>
       </div>
       </div>
     </div>


}
export default CreateBattlefield;