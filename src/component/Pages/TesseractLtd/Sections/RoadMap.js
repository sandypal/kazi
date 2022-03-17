import React from 'react';
import road_map from "../Sections/images/road_map.png";
function RoadMap () {
	return <div>
<section className="roadmap_section">
         <div className="container">
            <div className="row">
              
               <div className="col-md-10 offset-md-1">
               <div className="roadmap_heading">
               <h2>ROADMAP</h2>
               </div>
                  <div className="roadmap_box text-center">
                      <img src={road_map}/>
                  </div>
               </div>
                
            </div>
         </div>
      </section>
    </div>
    }
    export default RoadMap;