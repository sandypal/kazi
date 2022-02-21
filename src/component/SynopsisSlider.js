import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import synopsis from "../assets/synopsis.png";
export default function SynopsisSlider() {
    var settings = {
        dots: true,
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1
      };

	return ( <div>
<section className="synopsis_section mt-5 mb-5">
         <div className="container">
            <div className="row">
            
               <div className="synopsis_slider">
               <Slider {...settings}>
                  <div className="col-md-12">
                     <div className="row align-items-center">
                        <div className="col-md-6"><img src={synopsis}/></div>
                        <div className="col-md-6">
                           <h2>THE STORY</h2>
                           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                           <a className="play_byn btn" href="#">READ MORE</a>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-12">
                     <div className="row align-items-center">
                        <div className="col-md-6"><img src={synopsis}/></div>
                        <div className="col-md-6">
                           <h2>COLLECT CARDS</h2>
                           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                           <a className="play_byn btn" href="#">SEE CARDS</a>
                        </div>
                     </div>
                  </div>
                  </Slider>
               </div>
               
            </div>
         </div>
      </section>
    </div>
   );

}
    