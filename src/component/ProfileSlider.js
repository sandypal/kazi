import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import synopsis from "../assets/synopsis.png";
export default function ProfileSlider() {
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
<section className="profile_section mt-5 mb-5">
         <div className="container">
            <div className="row">
               <div className="profile_slider">
               <Slider {...settings}>
                  <div className="col-md-12">
                     <div className="row align-items-center">
                        <div className="col-md-6"><img src={synopsis}/></div>
                        <div className="col-md-6">
                           <h2>LEADERBOARD</h2>
                          <h6>1st</h6>
                          <h3>Username</h3>
                           <p>Battles won: <span>23</span>
                            </p>
                           <a className="play_byn btn" href="#">SEE FULL LIST</a>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-12">
                    <div className="row align-items-center">
                       <div className="col-md-6"><img src={synopsis}/></div>
                       <div className="col-md-6">
                       <h2>LEADERBOARD</h2>
                         <h6>2st</h6>
                         <h3>Username</h3>
                         
                          <p>Battles won: <span>23</span>
                           </p>
                          <a className="play_byn btn" href="#">SEE FULL LIST</a>
                       </div>
                    </div>
                 </div>
                 <div className="col-md-12">
                  <div className="row align-items-center">
                     <div className="col-md-6"><img src={synopsis}/></div>
                     <div className="col-md-6">
                     <h2>LEADERBOARD</h2>
                       <h6>3st</h6>
                       <h3>Username</h3>
                        
                        <p>Battles won: <span>23</span>
                         </p>
                        <a className="play_byn btn" href="#">SEE FULL LIST</a>
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
    