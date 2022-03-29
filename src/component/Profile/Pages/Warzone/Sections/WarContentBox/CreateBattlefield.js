import React from 'react';
import blacknet_logo from '../../Images/blacknet_logo.png';
import humanity_logo from '../../Images/humanity_logo.png';
import alice_logo from '../../Images/alice_logo.png';
function CreateBattlefield(){
 return <div>
     <div className="row">
   <div className="col-md-6 offset-md-3">
   <div className="create_zone">
       <form action="/battle-field">
    <div class="form-check">
      <input type="radio" class="form-check-input" id="radio1" name="optradio" value="option1" checked/>
      <label class="form-check-label" for="radio1">Blacknet VS Alice</label>
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
    <div class="form-check">
      <input type="radio" class="form-check-input" id="radio2" name="optradio" value="option2"/>
      <label class="form-check-label" for="radio2">Blacknet VS Human</label>
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
    <div class="form-check">
      <input type="radio" class="form-check-input" id="radio3" name="optradio" value="option3"/>
      <label class="form-check-label" for="radio3" >Human VS Alice</label>
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
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">CREATE NEW BATTLEFIELD</button>
    </div>
  </form>
  </div>
           
       </div>
      
       </div>
       
     </div>


}
export default CreateBattlefield;