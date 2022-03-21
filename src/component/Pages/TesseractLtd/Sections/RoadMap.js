import React from 'react';
import about_tesseract_roadmap from "../Sections/images/about_tesseract_roadmap.png";
function RoadMap () {
	return <div>
<section className="roadmap_section">
         <div className="container">
            <div className="row">
              
               <div className="col-md-12">
               <div className="roadmap_heading">
               <h2>ROADMAP</h2>
               </div>
                  <div className="roadmap_box text-center">
                      <img src={about_tesseract_roadmap}/>
                  </div>
               </div>
                
            </div>
         </div>
      </section>
    </div>
    }
    export default RoadMap;