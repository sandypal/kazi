import React from 'react';
import MyCards from './AllProfileTab/MyCards';
import Blacknet from './AllProfileTab/Blacknet';
import Alice from './AllProfileTab/Alice';
import Humanity from './AllProfileTab/Humanity';
import Genesis from './AllProfileTab/Genesis';
function UserProfileTab () {
	return <div>
<section className="user_tab_section">
         <div className="container">
            <div className="row">
               <div className="col-md-10 offset-md-1">
                  <div className="user_tab_section">
                  <div className="user_tab">
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
  <li className="nav-item" role="presentation">
    <button className="nav-link active" id="mycards-tab" data-bs-toggle="tab" data-bs-target="#mycards" type="button" role="tab" aria-controls="mycards" aria-selected="true">MY CARDS</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="blacknet-tab" data-bs-toggle="tab" data-bs-target="#blacknet" type="button" role="tab" aria-controls="blacknet" aria-selected="false">BLACKNET</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="alice-tab" data-bs-toggle="tab" data-bs-target="#alice" type="button" role="tab" aria-controls="alice" aria-selected="false">ALICE</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="humanity-tab" data-bs-toggle="tab" data-bs-target="#humanity" type="button" role="tab" aria-controls="humanity" aria-selected="true">HUMANITY</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="genesis-tab" data-bs-toggle="tab" data-bs-target="#genesis" type="button" role="tab" aria-controls="genesis" aria-selected="false">GENESIS</button>
  </li>
 
</ul>
<div className="tab-content" id="myTabContent">
  <div className="tab-pane fade show active" id="mycards" role="tabpanel" aria-labelledby="mycards-tab">
<MyCards/>
     </div>
  <div className="tab-pane fade" id="blacknet" role="tabpanel" aria-labelledby="blacknet-tab">
 <Blacknet/>
  </div>
  <div className="tab-pane fade" id="alice" role="tabpanel" aria-labelledby="alice-tab">
 <Alice/>
  </div>
  <div className="tab-pane fade" id="humanity" role="tabpanel" aria-labelledby="humanity-tab">
<Humanity/>
  </div>
  <div className="tab-pane fade" id="genesis" role="tabpanel" aria-labelledby="genesis-tab">
<Genesis/>
     </div>

</div>
                  </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
    </div>
}
export default UserProfileTab;