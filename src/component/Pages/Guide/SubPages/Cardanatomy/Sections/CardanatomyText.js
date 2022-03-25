import React from 'react';
import blacknet from "../Images/blacknet.png";
import alice from "../Images/alice.png";
import metaverse from "../Images/metaverse.png";
function CardanatomyText () {
	return <div>
    <section className="guidetab_section">
         <div className="container">
            <div className="row">
               <div className="col-md-10 offset-md-1">
                  <div className="guide_tab">
 <div className="scroll_link">
      <ul>
        <li><a href="#cardcharacter">Card character</a></li>
        <li><a href="#faction">Faction</a></li>
        <li><a href="#attributes">Attributes</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#rank">Rank</a></li>
        <li><a href="#cardrarity">Card rarity</a></li>
        <li><a href="#weapon">Weapon grade</a></li>
      </ul>
    </div>
    <div className="content_box">
  <h4>CARD ANATOMY</h4>
     <div className="row align-items-center ">
       <div className="col-md-6">
         <div className="custom_tab_text" id="cardcharacter">
         <h3>Card character</h3>
         <p>The cards in EXTREMIS consist of subjects from either of the three factions. Each subject is a unique character that belongs to either Human, Blacknet or Alice faction. The characters have different attributes that are important factors in determining win or loss in battles and the war. Each card is embellished with diverse external features that provide a unique look to the character. </p>
         </div>
       </div>
       <div className="col-md-6"><img src={blacknet}/></div>
       </div>
       <div className="row align-items-center ">
       <div className="col-md-6">
       <div className="custom_tab_text" id="faction">
         <h3>Faction</h3>
         <p>The ensemble of unique characters in EXTREMIS belongs to three different factions. These are Blacknet, Alice and Human. Blacknet and Alice are artificially intelligent beings created by humans. With their developed consciousness and unique perspective towards the earth and living creatures, Blacknet poses a threat to human society. A collision explodes between members of the two factions. </p>
         </div>
       </div>
       <div className="col-md-6"><img src={alice}/></div>
       </div>
       <div className="row">
         <div className="col-md-12">
       <div className="custom_tab_text">
                  <p>Alice, another artificially intelligent conscious being, was primarily developed to aid humans in their fight against Blacknet. But Alice has the power of choosing either side. EXTREMIS revolves around the war and battles that these factions, with their multitude of cards and characters, wage against one another while also creating alliances.</p>
         </div>
         </div>
         </div>
         <div className="row align-items-center ">
       <div className="col-md-6">
       <div className="custom_tab_text" id="attributes">
         <h3>Attributes</h3>
         <p>Attributes or mental attributes are determinants of how powerful a card is. In EXTREMIS, the overall power of each card is determined based on 9 categories of attribute values. These attributes are Intelligence quotient (IQ), Emotional quotient (EQ), Wisdom, Melee attack, Defense skill, Weapon skill, Leadership skill, Artificial Intelligence Influence (AI influence), and Future potential. All the cards of the three factions have different numeric values of these attributes. Diverse values in attributes result in power hierarchy and win or loss in battles and war.</p>
       </div>
       </div>
       <div className="col-md-6"><img src={metaverse}/></div>
       <div className="col-md-6">
       <div className="custom_tab_text" id="features">
         <h3>Features</h3>
         <p>Features or External features determine the overall outer look of the card character. 21 total physical features make up the look of the character. Blacknet, Alice and Human cards do not have the same feature sets. This results in a myriad of diverse looking card characters in EXTREMIS. One of the 20 external features is weapons. Weapons have power, and each character's weapons skill correspond to how well they use their weapon.</p>
       </div>
       </div>
       <div className="col-md-6"><img src={metaverse}/></div>
       <div className="col-md-6">
       <div className="custom_tab_text" id="rank">
         <h3>Rank</h3>
         <p>Ranks define different levels of the card, considering their order of authority. Each member of the three factions is classified into the following ranks, in ascending authoritative order:</p>
           <ul>
         <li>Level 1-5	- Private</li>
         <li>Level 6-10	- 2nd Lieutenant</li>
         <li>Level 11-15	- 1st Lieutenant</li>
         <li>Level 16-20	- Captain</li>
         <li>Level 21-25	- Major</li>
         <li>Level 26-30	- Lieutenant Colonel</li>
         <li>Level 31-35	- Colonel</li>
         <li>Level 36-40	- Brigadier general</li>
         <li>Level 41-45	- Major General</li>
         <li>Level 46-50	- Lieutenant General</li>
         <li>Level 51-99	- General</li>
         <li>Level 100+	- Legendary</li>
         </ul>
       </div>
       </div>
       <div className="col-md-6"><img src={metaverse}/></div>
       <div className="col-md-6">
       <div className="custom_tab_text" id="cardrarity">
         <h3>Card rarity</h3>
         <p>Card rarity determines how rare the features of each card are. In any card profile, players can observe a table where the external features are displayed along with a percentage value. This value determines how rare that particular feature of the card is. Rare cards do not result in a change in power. But they can be useful assets to purchase or sell in the EXTREMIS marketplace and auction house.</p>
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
     export default CardanatomyText;