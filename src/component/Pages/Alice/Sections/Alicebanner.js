import React from 'react';
import alice_header from '../Sections/Images/alice_header.png';
function Alicebanner () {
	return <div>
<div className="Page_alice_section">
   <img src={alice_header}/>
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="page_title">
                     {/* <h1>Alice</h1> */}
                  </div>
               </div>
            </div>
         </div>
      </div>
    </div>
}
export default Alicebanner;