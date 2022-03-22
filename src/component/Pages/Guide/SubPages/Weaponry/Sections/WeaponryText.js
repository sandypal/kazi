import React from 'react';
import blacknet from "../Images/blacknet.png";
import alice from "../Images/alice.png";
import metaverse from "../Images/metaverse.png";
function WeaponryText () {
	return <div>
    <section className="guidetab_section">
         <div className="container">
            <div className="row">
               <div className="col-md-10 offset-md-1">
                  <div className="guide_tab">
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

     <div className="row align-items-center ">
       <div className="col-md-6">
         <div className="custom_tab_text" id="typesweapon">
         <h3>Types of weapon</h3>
         <p>All card characters carry some sort of weapons that play an important role in battles and war. The weaponry in EXTREMIS can be classified into four different categories. Under each category, there are 8 different types of weapons. Each of these weapons is tagged with a power value that plays a strategic role in the determination of win or defeat in the battles and war. The weapons’ list with its power value can be found under the ‘Weaponry’ section in the guide.</p>
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
         <p>Card attributes play important role in the win or loss of cards in combat. Besides attributes, weapons are also important determinants to consider during the battle strategy. Weapons have different values that make the card weak or strong. This is why weapons are important for strategizing and avoiding unnecessary card losses.</p>
       </div>
       </div>
       <div className="col-md-6"><img src={metaverse}/></div>
       <div className="col-md-6">
       <div className="custom_tab_text" id="weaponryscale">
         <h3>Weaponry scale</h3>
         <p>For a detailed list of weapon names and their values go to the ‘Weapons’ list’ section under the ‘More’ page.</p>
         <a className="btn" href="#">SEE WEAPONS’ LIST</a>
       </div>
       </div>
       <div className="col-md-6"><img src={metaverse}/></div>
       </div> 
       </div>
       </div>
       </div>
       </div>
       </div>
       </section>
     </div>
     }
     export default WeaponryText;