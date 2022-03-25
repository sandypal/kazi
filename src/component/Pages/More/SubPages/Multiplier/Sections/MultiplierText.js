import React from 'react';
import arrow_up from "../Images/arrow_up.png";
function MultiplierText () {
	return <div>
<section className="board_section">
         <div className="container">
            <div className="row align-items-center">
            <div className="col-md-10 offset-md-1">
                  <div className="board_text_section">
                  <h2 className="text-center">POWER MULTIPLIER</h2>
                  <p className="text-center mb-5 px-5">The power multiplier in War is a specialized functionality that enables players to strategize and predict possible win. With the help of power multiplier, a higher ranked card can influence in the enhanced power of the other cards in the same team participating in war. This functionality, designed to be more realistic, enables ordinary cards or soldiers to be empowered by their higher ranked team members having more skill points and efficiency.</p>

<div className="heading_list">
<p className="text-start">NAME OF RANK</p>
                     <p className="text-end">
                     TEAM’S POWER INCREASE
                     </p>

</div>

                 <ul>
                     <li className="profile text-start">
                         
                         <div className="user_name"><span># Level 46-50</span>
                         <h5>1 Lieutenant General</h5>
                         </div>
                     </li>
                     <li className="text-end">
                         <div className="info_user">
                            <p>2x <img src={arrow_up}/></p>
                            
                         </div>
                     </li>
                 </ul>
                 <ul>
                     <li className="profile text-start">
                        
                         <div className="user_name"><span># Level 51-99</span>
                         <h5>1 General</h5>
                         </div>
                     </li>
                     <li className="text-end">
                         <div className="info_user">
                            <p>3x <img src={arrow_up}/></p>
                            
                         </div>
                     </li>
                 </ul>
                 <ul>
                     <li className="profile text-start">
                        
                         <div className="user_name"><span># Level 100-100+</span>
                         <h5>1 Legendary</h5>
                         </div>
                     </li>
                     <li className="text-end">
                         <div className="info_user">
                            <p>5x <img src={arrow_up}/></p>
                            
                         </div>
                     </li>
                 </ul>
                 <div className="heading_list">
<p className="text-start">RANK COMBINATION</p>
                     <p className="text-end">
                     TEAM’S POWER INCREASE
                     </p>

</div>
                 <ul>
                     <li className="profile text-start">
                        
                         <div className="user_name"><span># Level 26-30 and 31-35</span>
                         <h5>2 Lieutenant Colonels,<br></br>
1 Colonel</h5>
                         </div>
                     </li>
                     <li className="text-end">
                         <div className="info_user">
                            <p>2x <img src={arrow_up}/></p>
                            
                         </div>
                     </li>
                 </ul>
                 <ul>
                     <li className="profile text-start">
                         
                         <div className="user_name"><span># Level 16-20 and 36-40</span>
                         <h5>2 Captains,<br></br>
1 Brigadier General</h5>
                         </div>
                     </li>
                     <li className="text-end">
                         <div className="info_user">
                            <p>2x <img src={arrow_up}/></p>
                            
                         </div>
                     </li>
                 </ul>
                 <ul>
                     <li className="profile text-start">
                        
                         <div className="user_name"><span># Level 16-20</span>
                         <h5>5 Captains</h5>
                         </div>
                     </li>
                     <li className="text-end">
                         <div className="info_user">
                            <p>2x <img src={arrow_up}/></p>
                            
                         </div>
                     </li>
                 </ul>
                 <ul>
                     <li className="profile text-start">
                         
                         <div className="user_name"><span># Level 31-35 and 36-40</span>
                         <h5>1 Major General,<br></br>
1 Brigadier General</h5>
                         </div>
                     </li>
                     <li className="text-end">
                         <div className="info_user">
                            <p>3x <img src={arrow_up}/></p>
                            
                         </div>
                     </li>
                 </ul>
                 <ul>
                     <li className="profile text-start">
                         
                         <div className="user_name"><span># Level 31-35</span>
                         <h5>2 Major Generals</h5>
                         </div>
                     </li>
                     <li className="text-end">
                         <div className="info_user">
                            <p>4x <img src={arrow_up}/></p>
                            
                         </div>
                     </li>
                 </ul>
                 <ul>
                     <li className="profile text-start">
                         
                         <div className="user_name"><span># Level 16-20, 31-35 and 36-40</span>
                         <h5>1 Major, 1 Colonel,<br></br>
1 Brigadier General</h5>
                         </div>
                     </li>
                     <li className="text-end">
                         <div className="info_user">
                            <p>5x <img src={arrow_up}/></p>
                            
                         </div>
                     </li>
                 </ul>
                 <ul>
                     <li className="profile text-start">
                         
                         <div className="user_name"><span># Level 16-20, 21-25, 26-30 and 31-35</span>
                         <h5>1 Captain, 3 Majors,<br></br>
1 Lt. Colonel, 1 Colonel</h5>
                         </div>
                     </li>
                     <li className="text-end">
                         <div className="info_user">
                            <p>5x <img src={arrow_up}/></p>
                            
                         </div>
                     </li>
                 </ul>
                 
               
                  </div>
               </div>
            </div>
         </div>
      </section>
    </div>
}
export default MultiplierText;