import React from 'react';
import blacknet_header from '../Sections/Images/blacknet_header.png';
function Blacknetbanner () {
	return <div>
<div className="Page_blacknet_section">
   <img src={ blacknet_header }/>
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="page_title">
                     {/* <h1>Blacknet</h1> */}
                  </div>
               </div>
            </div>
         </div>
      </div>
    </div>
}
export default Blacknetbanner;