import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import game_play from "./Images/game_play.png";
import game_play2 from "./Images/game_play2.png";
import game_play3 from "./Images/game_play3.png";

export default function BuildArmy() {
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

<section className="build_section">
         <div className="container">
            <div className="row">
               <div className="armybuild_slider">
               <Slider {...settings}>
                  <div className="col-md-12">
                     <div className="row align-items-center">
                        <div className="col-md-6"><img src={game_play}/></div>
                        <div className="col-md-6">
                           <h2>BUILD AN ARMY</h2>
                           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                           <div className="build_army">
                  <ul>
                     <li><a href="#">LEARN MORE</a></li>
                     <li><a href="#">SEE CARDS</a></li>
                  </ul>
               </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-12">
                     <div className="row align-items-center">
                        <div className="col-md-6"><img src={game_play2}/></div>
                        <div className="col-md-6">
                           <h2>FIGHT BATTLES</h2>
                           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                           <div className="build_army">
                  <ul>
                     <li><a href="#">LEARN MORE</a></li>
                  </ul>
               </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-12">
                     <div className="row align-items-center">
                        <div className="col-md-6"><img src={game_play3}/></div>
                        <div className="col-md-6">
                           <h2>EARN FROM WAR</h2>
                           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                           <div className="build_army">
                  <ul>
                     <li><a href="#">LEARN MORE</a></li>
                  </ul>
               </div>
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
    