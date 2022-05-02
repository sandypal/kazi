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
                           <p>Powered by their respective 
                           goals and ideologies, the world 
                           of EXTREMIS is a chaotic 
                           ensemble of Human and 
                           artificial sentinel beings. Too 
                           often, these factions clash, 
                           intending to obliterate each 
                           other and establish their vision 
                           of a perfect world. The ultimate 
                           result is a worldwide feud 
                           between man and the newly 
                           created sentinel beings. The 
                           story of EXTREMIS revolves 
                           around the beginning of the 
                           war and the war itself.</p>
                           <a className="play_byn btn" href="/story">READ MORE</a>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-12">
                     <div className="row align-items-center">
                        <div className="col-md-6"><img src={collect_cards}/></div>
                        <div className="col-md-6">
                           <h2>COLLECT CARDS</h2>
                           <p>As soon as you connect your wallet and log in to your Extremis account, buy your first cards from the auction house or the fixed marketplace within EXTREMIS. Having cards allow you to engage in battles, war and breed your cards. You can begin with a single card initially.</p>
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
    