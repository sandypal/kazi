import React from 'react';
import blacknet_logo from '../../Images/blacknet_logo.png';
import humanity_logo from '../../Images/humanity_logo.png';
import alice_logo from '../../Images/alice_logo.png';
function Battlefield(){
 return <div>

<div className="row">
   <div className="col-md-8 offset-md-2">
      <div className="battlefield_content">
      <h4 className="align-top">Battlefield 1</h4>
         <ul>
            <li><img src={blacknet_logo}/>
            <div className="battlefield_info">
                <h3>Blacknet</h3>
                <div className="field_info">
                    <p>Enlisted: <span>08</span> </p>
                    <p>Empty : <span>03</span> </p>
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
                <h3>Humanity</h3>
                <div className="field_info">
                    <p>Enlisted: <span>08</span> </p>
                    <p>Empty : <span>03</span> </p>
                    </div>
                </div>
            
            </li>
         </ul>

         <div className="field_btn">
             <a className="btn" href="#">JOIN BATTLEFIELD</a>
             </div>
      </div>
      <div className="battlefield_content">
      <h4 className="align-top">Battlefield 2</h4><ul>
            <li><img src={blacknet_logo}/>
            <div className="battlefield_info">
                <h3>Blacknet</h3>
                <div className="field_info">
                    <p>Enlisted: <span>08</span> </p>
                    <p>Empty : <span>03</span> </p>
                    </div>
                </div>
            </li>
            <li>
               <div className="war_vs">
                 <strong className="align-middle">VS</strong>
               </div>
            </li>
            <li><img src={alice_logo}/>
            <div className="battlefield_info">
                <h3>Alice</h3>
                <div className="field_info">
                    <p>Enlisted: <span>08</span> </p>
                    <p>Empty : <span>03</span> </p>
                    </div>
                </div>
            
            </li>
         </ul>

         <div className="field_btn">
             <a className="btn" href="#">JOIN BATTLEFIELD</a>
             </div>
      </div>
   </div>
</div>
         
 </div>


}
export default Battlefield;