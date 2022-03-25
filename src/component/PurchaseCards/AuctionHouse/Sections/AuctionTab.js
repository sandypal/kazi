import React from 'react';
import Allcards from './AllCard/Allcards';
import Blacknet from './AllCard/Blacknet';
import Alice from './AllCard/Alice';
import Humanity from './AllCard/Humanity';
import Genesis from './AllCard/Genesis';

function AuctionTab () {
	return <div>
  <section className="market_tab_section">
     <div className="container">
        <div className="row">
           <div className="col-md-12">
              <div className="market_heading">
                 <h2>CARDS ON SALE</h2>
              </div>
              <div className="market_tab">
                 <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                       <button className="nav-link active" id="allcards-tab" data-bs-toggle="tab" data-bs-target="#allcards" type="button" role="tab" aria-controls="allcards" aria-selected="true">ALL</button>
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
                    <div className="tab-pane fade show active" id="allcards" role="tabpanel" aria-labelledby="allcards-tab">
                       <h3>MY CARDS</h3>
                       <Allcards/>
                    </div>
                    <div className="tab-pane fade" id="blacknet" role="tabpanel" aria-labelledby="blacknet-tab">
                       <h3>BLACKNET</h3>
                       <Blacknet/>
                    </div>
                    <div className="tab-pane fade" id="alice" role="tabpanel" aria-labelledby="alice-tab">
                       <h3>ALICE</h3>
                       <Alice/>
                    </div>
                    <div className="tab-pane fade" id="humanity" role="tabpanel" aria-labelledby="humanity-tab">
                       <h3>HUMANITY</h3>
                       <Humanity/>
                    </div>
                    <div className="tab-pane fade" id="genesis" role="tabpanel" aria-labelledby="genesis-tab">
                       <h3>GENESIS</h3>
                       <Genesis/>
                    </div>
                 </div>
              </div>
           </div>
        </div>
     </div>
  </section>
</div>
}
export default AuctionTab;