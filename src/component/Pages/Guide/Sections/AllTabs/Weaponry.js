import React from 'react';
import blacknet from "../Images/blacknet.png";
import alice from "../Images/alice.png";
import metaverse from "../Images/metaverse.png";
function Weaponry () {
	return <div>
<div className="scroll_link">
      <ul>
        <li><a href="#typesweapon">Types of weapon</a></li>
        <li><a href="#power">Power</a></li>
        <li><a href="#weaponsmatter">Why weapons matter</a></li>
        <li><a href="#weaponryscale">Weaponry scale</a></li>
      </ul>
    </div>
    <div className="content_box">
  <h4>WEAPONRY</h4>
     <p>Enter the world of EXTREMIS and get the experience of collecting cards, upgrading them and battling them against other players. Here, you chase for the truth: either choosing for Humanity or Blacknet or Alice, build your own army and make allies to defeat the enemy. Breed your cards to gain ultimate powers to eliminate the last card of your opponent and seize the trophy!</p>
     <div className="row align-items-center ">
       <div className="col-md-6">
         <div className="custom_tab_text" id="typesweapon">
         <h3>Types of weapon</h3>
         <p>Enter the world of EXTREMIS and get the experience of collecting cards, upgrading them and battling them against other players. Here, you chase for the truth: either choosing for Humanity or Blacknet or Alice, build your own army and make allies to defeat the enemy. Breed your cards to gain ultimate powers to eliminate the last card of your opponent and seize the trophy!</p>
         </div>
       </div>
       <div className="col-md-6"><img src={blacknet}/></div>
       <div className="col-md-6">
       <div className="custom_tab_text" id="power">
         <h3>Efficiency</h3>
         <p>Enter the world of EXTREMIS and get the experience of collecting cards, upgrading them and battling them against other players. Here, you chase for the truth: either choosing for Humanity or Blacknet or Alice, build your own army and make allies to defeat the enemy. Breed your cards to gain ultimate powers to eliminate the last card of your opponent and seize the trophy!</p>
         </div>
       </div>
       <div className="col-md-6"><img src={alice}/></div>
       <div className="col-md-6">
       <div className="custom_tab_text" id="weaponsmatter">
         <h3>Why weapons matter</h3>
         <p>Enter the world of EXTREMIS and get the experience of collecting cards, upgrading them and battling them against other players. Here, you chase for the truth: either choosing for Humanity or Blacknet or Alice, build your own army and make allies to defeat the enemy. Breed your cards to gain ultimate powers to eliminate the last card of your opponent and seize the trophy!</p>
       </div>
       </div>
       <div className="col-md-6"><img src={metaverse}/></div>
       <div className="col-md-6">
       <div className="custom_tab_text" id="weaponryscale">
         <h3>Weaponry scale</h3>
         <p>Enter the world of EXTREMIS and get the experience of collecting cards, upgrading them and battling them against other players. Here, you chase for the truth: either choosing for Humanity or Blacknet or Alice, build your own army and make allies to defeat the enemy. Breed your cards to gain ultimate powers to eliminate the last card of your opponent and seize the trophy!</p>
         <a className="btn" href="#">SEE WEAPONS’ LIST</a>
       </div>
       </div>
       <div className="col-md-6"><img src={metaverse}/></div>
       </div> 
       </div>
     </div>
     }
     export default Weaponry;