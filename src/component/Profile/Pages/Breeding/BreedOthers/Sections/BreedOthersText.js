import React from 'react';
import BreedReady from '../Sections/Breed/BreedReady';
import OthersBreed from '../Sections/Breed/OthersBreed';
function BreedOthersText(){
 return <div>
<section className="breeding_content">
         <div className="container">
            <div className="row">
               <div className="col-md-6">
                   <div className="breed_heading">
                       <h2>BREED READY</h2>
               <BreedReady/>
               </div>
               </div>
               <div className="col-md-6">
               <div className="breed_heading">
                       <h2>OTHERS</h2>
              <OthersBreed/>
               </div>
               </div>
            </div>
         </div>
      </section>
      
 </div>
 

}
export default BreedOthersText;