import React from 'react';
import chapters_banner from '../Sections/Images/chapters_banner.png';
function ChaptersBanner () {
	return <div>
<div className="Page_chapters_section">
   <img src={chapters_banner}/>
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="page_title">
                     {/* <h1>All Chapters</h1> */}
                  </div>
               </div>
            </div>
         </div>
      </div>
    </div>
}
export default ChaptersBanner;