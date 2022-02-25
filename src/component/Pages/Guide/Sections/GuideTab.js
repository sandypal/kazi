import React from 'react';
import Overview from './AllTabs/Overview';
import Gettindstarted from './AllTabs/Gettindstarted';
import Gamefeatures from './AllTabs/Gamefeatures';
import Cardanatomy from './AllTabs/Cardanatomy';
import Weaponry from './AllTabs/Weaponry';
import Marketplace from './AllTabs/Marketplace';
import Costfees from './AllTabs/Costfees';
import Faq from './AllTabs/Faq';
function GuideTab () {
	return <div>
<section className="guidetab_section">
         <div className="container">
            <div className="row">
               <div className="col-md-10 offset-md-1">
                  <div className="guide_tab">
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
  <li className="nav-item" role="presentation">
    <button className="nav-link active" id="overview-tab" data-bs-toggle="tab" data-bs-target="#overview" type="button" role="tab" aria-controls="overview" aria-selected="true">OVERVIEW</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="getting-tab" data-bs-toggle="tab" data-bs-target="#getting" type="button" role="tab" aria-controls="getting" aria-selected="false">GETTING STARTED</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="game-tab" data-bs-toggle="tab" data-bs-target="#game" type="button" role="tab" aria-controls="game" aria-selected="false">GAME FEATURES</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="card-tab" data-bs-toggle="tab" data-bs-target="#card" type="button" role="tab" aria-controls="card" aria-selected="true">CARD ANATOMY</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="weaponry-tab" data-bs-toggle="tab" data-bs-target="#weaponry" type="button" role="tab" aria-controls="weaponry" aria-selected="false">WEAPONRY</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="marketplace-tab" data-bs-toggle="tab" data-bs-target="#marketplace" type="button" role="tab" aria-controls="marketplace" aria-selected="false">MARKETPLACE</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="cost-tab" data-bs-toggle="tab" data-bs-target="#cost" type="button" role="tab" aria-controls="cost" aria-selected="true">COST AND FEES</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="faq-tab" data-bs-toggle="tab" data-bs-target="#faq" type="button" role="tab" aria-controls="faq" aria-selected="false">FAQ</button>
  </li>
</ul>
<div className="tab-content" id="myTabContent">
  <div className="tab-pane fade show active" id="overview" role="tabpanel" aria-labelledby="overview-tab">
    <Overview/>
    </div>
  <div className="tab-pane fade" id="getting" role="tabpanel" aria-labelledby="getting-tab">
  <Gettindstarted/>
        </div>
  <div className="tab-pane fade" id="game" role="tabpanel" aria-labelledby="game-tab">
  <Gamefeatures/>
  </div>
  <div className="tab-pane fade" id="card" role="tabpanel" aria-labelledby="card-tab">
 <Cardanatomy/>
  </div>
  <div className="tab-pane fade" id="weaponry" role="tabpanel" aria-labelledby="weaponry-tab">
  <Weaponry/>
       </div>
  <div className="tab-pane fade" id="marketplace" role="tabpanel" aria-labelledby="marketplace-tab">
 <Marketplace/>
       </div>
  <div className="tab-pane fade" id="cost" role="tabpanel" aria-labelledby="cost-tab">
  <Costfees/>
       </div>
  <div className="tab-pane fade" id="faq" role="tabpanel" aria-labelledby="faq-tab">
  <Faq/>
       </div>
 
</div>
                  </div>
                  </div>
               </div>
            </div>
        
      </section>
    </div>
}
export default GuideTab;