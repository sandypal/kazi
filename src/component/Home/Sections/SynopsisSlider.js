import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import the_story from "./Images/the_story.png";
import collect_cards from "./Images/collect_cards.png";
export default function SynopsisSlider() {
    var settings = {
        dots: true,
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1
      };

	return ( <div>
<section className="synopsis_section">
         <div className="container">
            <div className="row">
            
               <div className="synopsis_slider">
               <Slider {...settings}>
                  <div className="col-md-12">
                     <div className="row align-items-center">
                        <div className="col-md-6"><img src={the_story}/></div>
                        <div className="col-md-6">
                           <h2>THE STORY</h2>
                           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                           <a className="play_byn btn" href="/story">READ MORE</a>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-12">
                     <div className="row align-items-center">
                        <div className="col-md-6"><img src={collect_cards}/></div>
                        <div className="col-md-6">
                           <h2>COLLECT CARDS</h2>
                           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                           <a className="play_byn btn" href="/cardcollection">SEE CARDS</a>
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
    