import React from 'react';
import story_banner from '../Sections/Images/story_banner.png';
function StoryBanner () {
	return <div>
<div className="Page_story_section">
   <img src={story_banner}/>
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="page_title">
                     {/* <h1>Story</h1> */}
                  </div>
               </div>
            </div>
         </div>
      </div>
    </div>
}
export default StoryBanner;