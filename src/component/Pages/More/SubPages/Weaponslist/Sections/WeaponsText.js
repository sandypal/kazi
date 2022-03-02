import React from 'react';
import Blacknet from '../Sections/WeaponsTab/Blacknet';
import Alice from '../Sections/WeaponsTab/Alice';
import Humanity from '../Sections/WeaponsTab/Humanity';
function WeaponsText () {
	return <div>
<div className="board_section">
   <div className="container">
      <div className="row align-items-center">
         <div className="col-md-10 offset-md-1">
            
               <div className="weapons_tab">
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
  <li className="nav-item" role="presentation">
    <button className="nav-link active" id="blacknet-tab" data-bs-toggle="tab" data-bs-target="#blacknet" type="button" role="tab" aria-controls="blacknet" aria-selected="true">Blacknet</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="alice-tab" data-bs-toggle="tab" data-bs-target="#alice" type="button" role="tab" aria-controls="alice" aria-selected="false">Alice</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="humanity-tab" data-bs-toggle="tab" data-bs-target="#humanity" type="button" role="tab" aria-controls="humanity" aria-selected="false">Humanity</button>
  </li>
  
</ul>
<div className="tab-content" id="myTabContent">
<div className="weapons_text_section">
               <h2 className="text-center">WEAPONS’ LIST</h2>
               </div>
  <div className="tab-pane fade show active" id="blacknet" role="tabpanel" aria-labelledby="blacknet-tab">
  <Blacknet/>
    </div>
    <div className="tab-pane fade" id="alice" role="tabpanel" aria-labelledby="alice-tab">
  <Alice/>
        </div>
  <div className="tab-pane fade" id="humanity" role="tabpanel" aria-labelledby="humanity-tab">
  <Humanity/>
        </div>
 
</div>
                  </div>
           
         </div>
      </div>
   </div>
</div>
    </div>
}
export default WeaponsText;