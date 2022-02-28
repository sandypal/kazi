import React from 'react';
import Chapter1 from './AllChapters/Chapters1';
import Chapter2 from './AllChapters/Chapters2';
import Chapter3 from './AllChapters/Chapters3';
import Chapter4 from './AllChapters/Chapters4';
import Chapter5 from './AllChapters/Chapters5';
import Chapter6 from './AllChapters/Chapters6';
import Chapter7 from './AllChapters/Chapters7';
import Chapter8 from './AllChapters/Chapters8';
import Chapter9 from './AllChapters/Chapters9';
import Chapter10 from './AllChapters/Chapters10';
function ChaptersTab () {
	return <div>
<section className="tab_chapters_section">
         <div className="container">
            <div className="row">
               <div className="col-md-10 offset-md-1">
                  <div className="tab_section">
                  <h2>EXTREMIS: THE CHRONICLES</h2>
                  <div className="chapter_tab">
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
  <li className="nav-item" role="presentation">
    <button className="nav-link active" id="Chapter1-tab" data-bs-toggle="tab" data-bs-target="#Chapter1" type="button" role="tab" aria-controls="Chapter1" aria-selected="true">Chapter 1</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="Chapter2-tab" data-bs-toggle="tab" data-bs-target="#Chapter2" type="button" role="tab" aria-controls="Chapter2" aria-selected="false">Chapter 2</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="Chapter3-tab" data-bs-toggle="tab" data-bs-target="#Chapter3" type="button" role="tab" aria-controls="Chapter3" aria-selected="false">Chapter 3</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="Chapter4-tab" data-bs-toggle="tab" data-bs-target="#Chapter4" type="button" role="tab" aria-controls="Chapter4" aria-selected="true">Chapter 4</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="Chapter5-tab" data-bs-toggle="tab" data-bs-target="#Chapter5" type="button" role="tab" aria-controls="Chapter5" aria-selected="false">Chapter 5</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="Chapter6-tab" data-bs-toggle="tab" data-bs-target="#Chapter6" type="button" role="tab" aria-controls="Chapter6" aria-selected="false">Chapter 6</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="Chapter7-tab" data-bs-toggle="tab" data-bs-target="#Chapter7" type="button" role="tab" aria-controls="Chapter7" aria-selected="true">Chapter 7</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="Chapter8-tab" data-bs-toggle="tab" data-bs-target="#Chapter8" type="button" role="tab" aria-controls="Chapter8" aria-selected="false">Chapter 8</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="Chapter9-tab" data-bs-toggle="tab" data-bs-target="#Chapter9" type="button" role="tab" aria-controls="Chapter9" aria-selected="true">Chapter 9</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="Chapter10-tab" data-bs-toggle="tab" data-bs-target="#Chapter10" type="button" role="tab" aria-controls="Chapter10" aria-selected="false">Chapter 10</button>
  </li>
 
</ul>
<div className="tab-content" id="myTabContent">
  <div className="tab-pane fade show active" id="Chapter1" role="tabpanel" aria-labelledby="Chapter1-tab">
 <Chapter1/>
     </div>
  <div className="tab-pane fade" id="Chapter2" role="tabpanel" aria-labelledby="Chapter2-tab">
  <Chapter2/>
  </div>
  <div className="tab-pane fade" id="Chapter3" role="tabpanel" aria-labelledby="Chapter3-tab">
  <Chapter3/>
  </div>
  <div className="tab-pane fade" id="Chapter4" role="tabpanel" aria-labelledby="Chapter4-tab">
  <Chapter4/>
  </div>
  <div className="tab-pane fade" id="Chapter5" role="tabpanel" aria-labelledby="Chapter5-tab">
  <Chapter5/>
     </div>
  <div className="tab-pane fade" id="Chapter6" role="tabpanel" aria-labelledby="Chapter6-tab">
  <Chapter6/>
     </div>
  <div className="tab-pane fade" id="Chapter7" role="tabpanel" aria-labelledby="Chapter7-tab">
  <Chapter7/>
       </div>
  <div className="tab-pane fade" id="Chapter8" role="tabpanel" aria-labelledby="Chapter8-tab">
  <Chapter8/>
     </div>
  <div className="tab-pane fade" id="Chapter9" role="tabpanel" aria-labelledby="Chapter9-tab">
  <Chapter9/>
     </div>
  <div className="tab-pane fade" id="Chapter10" role="tabpanel" aria-labelledby="Chapter10-tab">
  <Chapter10/>
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
export default ChaptersTab;