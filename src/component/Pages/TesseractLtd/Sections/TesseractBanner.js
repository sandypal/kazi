import React from 'react';
import tesseract_banner from '../Sections/images/tesseract_banner.png';
function TesseractBanner () {
	return <div>
<div className="Page_tesseract_section">
   <img src={tesseract_banner}/>
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="page_title">
                     {/* <h1>Tesseract Ltd.</h1> */}
                  </div>
               </div>
            </div>
         </div>
      </div>
    </div>
}
export default TesseractBanner;