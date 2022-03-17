import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import build_army from "./Images/build_army.png";
import fight_battles from "./Images/fight_battles.png";
import earn_money from "./Images/earn_money.png";

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
                        <div className="col-md-6"><img src={build_army}/></div>
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
                        <div className="col-md-6"><img src={fight_battles}/></div>
                        <div className="col-md-6">
                           <h2>FIGHT BATTLES</h2>
                           <p>Hone your skills to plan the winning strategies. Buy and breed more cards, to choose the most advantageous cards over your opponents' team. Use your cards in the battles strategically to earn maximum wins and rank upgrades.</p>
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
                        <div className="col-md-6"><img src={earn_money}/></div>
                        <div className="col-md-6">
                           <h2>EARN FROM WAR</h2>
                           <p>Earn money by breeding and selling cards on the EXTREMIS Marketplace.  You can also put up your power cards up for breeding and in turn get the breed fee everytime another player breeds with your card.</p>
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
    