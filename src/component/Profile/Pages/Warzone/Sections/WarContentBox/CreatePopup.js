import React from 'react';
import blacknet_logo from '../../Images/blacknet_logo.png';
import humanity_logo from '../../Images/humanity_logo.png';
function CreatePopup(){
 return <div>

<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-xl">
    <div className="modal-content">
    <div className="modal-header">
    <h5 class="modal-title" id="exampleModalLabel"><span>You have created a </span><br></br>New battlefield</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"><i className="far fa-times"></i></button>
      </div>
      <div className="modal-body">
<div className="row">
   <div className="col-md-8 offset-md-2">
      <div className="battlefield_content">
      <h4 className="align-top">Battlefield 4</h4>
         <ul>
            <li><img src={blacknet_logo}/>
            <div className="battlefield_info">
                <h3>Blacknet</h3>
                <div className="field_info">
                    <p>Enlisted: <span>00</span> </p>
                    <p>Empty : <span>11</span> </p>
                    </div>
                </div>
            </li>
            <li>
               <div className="war_vs">
                  <strong className="align-middle">VS</strong>
               </div>
            </li>
            <li><img src={humanity_logo}/>
            <div className="battlefield_info">
                <h3>Alice</h3>
                <div className="field_info">
                    <p>Enlisted: <span>00</span> </p>
                    <p>Empty : <span>11</span> </p>
                    </div>
                </div>
            
            </li>
         </ul>

         <div className="field_btn">
             <a className="btn" href="/battle-field">JOIN BATTLEFIELD</a>
             </div>
      </div>
      
   </div>
</div>
</div>
</div>
</div>
</div>
         
 </div>
 }
 export default CreatePopup;