import React from 'react';
import Chapter1 from '../Sections/WhitepaperTab/Chapter1';
import Chapter2 from '../Sections/WhitepaperTab/Chapter2';
import Chapter3 from '../Sections/WhitepaperTab/Chapter3';
import Chapter4 from '../Sections/WhitepaperTab/Chapter4';
import Chapter5 from '../Sections/WhitepaperTab/Chapter5';
import Chapter6 from '../Sections/WhitepaperTab/Chapter6';
import Chapter7 from '../Sections/WhitepaperTab/Chapter7';
import Chapter8 from '../Sections/WhitepaperTab/Chapter8';
import Chapter9 from '../Sections/WhitepaperTab/Chapter9';
import Chapter10 from '../Sections/WhitepaperTab/Chapter10';
function WhitepaperText () {
	return <div>

   <div className="board_section">
   <div className="container">
      <div className="row align-items-center">
         <div className="col-md-10 offset-md-1">
         <div className="whitepaper_tab">
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
  <li className="nav-item" role="presentation">
    <button className="nav-link active" id="chapter1-tab" data-bs-toggle="tab" data-bs-target="#chapter1" type="button" role="tab" aria-controls="chapter1" aria-selected="true">Chapter 1</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="chapter2-tab" data-bs-toggle="tab" data-bs-target="#chapter2" type="button" role="tab" aria-controls="chapter2" aria-selected="false">Chapter 2</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="chapter3-tab" data-bs-toggle="tab" data-bs-target="#chapter3" type="button" role="tab" aria-controls="chapter3" aria-selected="false">Chapter 3</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="chapter4-tab" data-bs-toggle="tab" data-bs-target="#chapter4" type="button" role="tab" aria-controls="chapter4" aria-selected="false">Chapter 4</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="chapter5-tab" data-bs-toggle="tab" data-bs-target="#chapter5" type="button" role="tab" aria-controls="chapter5" aria-selected="false">Chapter 5</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="chapter6-tab" data-bs-toggle="tab" data-bs-target="#chapter6" type="button" role="tab" aria-controls="chapter6" aria-selected="false">Chapter 6</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="chapter7-tab" data-bs-toggle="tab" data-bs-target="#chapter7" type="button" role="tab" aria-controls="chapter7" aria-selected="false">Chapter 7</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="chapter8-tab" data-bs-toggle="tab" data-bs-target="#chapter8" type="button" role="tab" aria-controls="chapter8" aria-selected="false">Chapter 8</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="chapter9-tab" data-bs-toggle="tab" data-bs-target="#chapter9" type="button" role="tab" aria-controls="chapter9" aria-selected="false">Chapter 9</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="chapter10-tab" data-bs-toggle="tab" data-bs-target="#chapter10" type="button" role="tab" aria-controls="chapter10" aria-selected="false">Chapter 10</button>
  </li>
</ul>
<div className="tab-content" id="myTabContent">
<div className="whitepaper_text_section">
               <h2 className="text-center">WHITEPAPER</h2>
               </div>
  <div className="tab-pane fade show active" id="chapter1" role="tabpanel" aria-labelledby="chapter1-tab">
  <Chapter1/>
    </div>
    <div className="tab-pane fade" id="chapter2" role="tabpanel" aria-labelledby="chapter2-tab">
  <Chapter2/>
        </div>
  <div className="tab-pane fade" id="chapter3" role="tabpanel" aria-labelledby="chapter3-tab">
  <Chapter3/>
        </div>
        <div className="tab-pane fade" id="chapter4" role="tabpanel" aria-labelledby="chapter4-tab">
  <Chapter4/>
        </div>
  <div className="tab-pane fade" id="chapter5" role="tabpanel" aria-labelledby="chapter5-tab">
  <Chapter5/>
        </div>
        <div className="tab-pane fade" id="chapter6" role="tabpanel" aria-labelledby="chapter6-tab">
  <Chapter6/>
        </div>
  <div className="tab-pane fade" id="chapter7" role="tabpanel" aria-labelledby="chapter7-tab">
  <Chapter7/>
        </div>
        <div className="tab-pane fade" id="chapter8" role="tabpanel" aria-labelledby="chapter8-tab">
  <Chapter8/>
        </div>
  <div className="tab-pane fade" id="chapter9" role="tabpanel" aria-labelledby="chapter9-tab">
  <Chapter9/>
        </div>
        <div className="tab-pane fade" id="chapter10" role="tabpanel" aria-labelledby="chapter10-tab">
  <Chapter10/>
        </div>
 
</div>
                  </div>
         </div>
      </div>
   </div>
</div>
    </div>
}
export default WhitepaperText;