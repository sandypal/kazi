import React from 'react';
import blacknet from "../Images/blacknet.png";
import alice from "../Images/alice.png";
import metaverse from "../Images/metaverse.png";
function GamefeaturesText () {
	return <div>
    <section className="guidetab_section">
         <div className="container">
            <div className="row">
               <div className="col-md-10 offset-md-1">
                  <div className="guide_tab">
 <div className="scroll_link">
      <ul>
        <li><a href="#purchase">Purchase cards</a></li>
        <li><a href="#breed">Breed cards</a></li>
        <li><a href="#battle">Battle</a></li>
        <li><a href="#war">War</a></li>
        <li><a href="#war-multiplier">War Multiplier</a></li>
        <li><a href="#mutation">Mutation</a></li>
        <li><a href="#rank">Rank upgrade</a></li>
        <li><a href="#rename">Rename cards</a></li>
      </ul>
    </div>
    <div className="content_box">
  <h4>GAME FEATURES</h4>

     <div className="row align-items-center ">
       <div className="col-md-6">
         <div className="custom_tab_text" id="purchase">
         <h3>Purchase cards</h3>
         <p>After signing up and setting up your profile, purchase your first card through the EXTREMIS ‘Marketplace’ or ‘Auction house’ to begin playing. Browse through all the cards on sale. You can buy any cards at a fixed rate in the ‘Marketplace’. Whereas the ’Auction house’ enables you to bid on cards. The highest bidder gets the card. You can start with only one card in your collection. But you may also buy multiple cards to advance in the game more strategically.</p>
         </div>
       </div>
       <div className="col-md-6"><img src={blacknet}/></div>
       </div>
       <div className="row align-items-center ">
       <div className="col-md-6">
       <div className="custom_tab_text" id="breed">
         <h3>Breed cards</h3>
         <p>Players can breed their cards to make newer cards with a variety of attribute values and feature rarity. New cards also grow your collection thus enabling you to sell cards in the future or enlist them for combat. The users are allowed to breed cards within their collection or other players’ cards as well. However, breeding is only allowed between cards of the same faction. In case of Human, players can only breed between opposite genders.</p>
         </div>
       </div>
       <div className="col-md-6"><img src={alice}/></div>
       </div>
       <div className="row">
         <div className="col-md-12">
         <div className="custom_tab_text">
        <p>Following each breeding, the offspring card will require 8 hours to mature and the parent cards will require 8 hours of a resting period after that period the new, mature card can be used to breed again. In the case of the Humanity faction, players must choose a male and a female card for breeding. However, for the cards that belong to Blacknet or Alice faction, there is no gender restriction for breeding. There is no charge for breeding the cards within your collection. To breed with others, the player first has to add their cards on the 'Breed list'. In addition to the existing 'Breed fee' in the game, the players can choose to charge other players to breed their cards with. Cards with different ranks can be used to breed, the resulting card may be of either of the ranks. A percentage of the breeding fee goes to Tesseract Inc.</p>
</div>
         </div>
       </div>
       
       <div className="row align-items-center ">
       <div className="col-md-6">
       <div className="custom_tab_text" id="battle">
         <h3>Battle</h3>
         <p>Players of EXTREMIS can battle their cards against other players. The cards have to be added to the battle list to be able to participate in a battle. The players can add their cards to the battle list by selecting the card and choosing the “Add to battle list” button. After adding cards to the battle list, their cards will be visible to other players in the “Battle-ready players” list. Players with a minimum of one card can participate in a battle.</p>
       </div>
       </div>
       <div className="col-md-6"><img src={metaverse}/></div>
       </div>
       <div className="row">
         <div className="col-md-12">
         <div className="custom_tab_text">
        <p>To battle, the participating cards must belong to different factions. The players will be notified about the result after the battle. The winning players’ participating cards will rank up, and higher rank cards will have more probability to win the battles and wars. On the contrary, the losing players’ cards will become non-existent. Players can choose to hold their cards off any battle by choosing the “Rest card” option. This will allow the card to temporarily be inactive. Players will not be able to breed, mutate or sell their cards that are enlisted for battle. However, if the card is held on “rest card” mode, these functions will be available for the respective card.</p>
</div>
         </div>
       </div>
       <div className="row align-items-center ">
       <div className="col-md-6">
       <div className="custom_tab_text" id="war">
         <h3>War</h3>
         <p>The EXTREMIS players can join or raise war against another group of players. Unlike battles, a war will consist of two groups of players, 11 players each, to fight for the ultimate power. The winning team is determined on basis of overall power distribution and the cards’ attribute values. EXTREMIS uses the same function to calculate the final result for both war and battle. Any player can join the battleground in a war.</p>
       </div>
       </div>
       <div className="col-md-6"><img src={metaverse}/></div>
       </div>
       <div className="row">
         <div className="col-md-12">
         <div className="custom_tab_text">
        <p>Each player participating in the war can use any number of cards to represent them, but the same card cannot be used in multiple battlegrounds within the war. So, the battle in a war will be among 11 cards from one group against 11 cards from the other one. Players are allowed to form alliances during (before) the war. However, the two groups of participating cards must be from different factions to fight against each other. To enter the war, select a battlefield from the ‘War’ page. Enlist cards from your collection to join any participating sides. Depending on the number of empty positions left in the battlefields.)(Also mention that each 11 person team should be of the same faction The war remains ongoing and thus there is no specific number of battlefields Winning cards will be promoted in ranks. Ranks of losing cards will not change. Both groups (winning and losing) will face casualties since cards will be burned during the war but more cards will be burned from the losing team. Cards can abandon a battlefield in a war, but the cards’ rank will change to “Deserter" and all their battle points will turn to zero.</p>
</div>
         </div>
       </div>
       <div className="row align-items-center ">
       <div className="col-md-6">
       <div className="custom_tab_text" id="war-multiplier">
         <h3>Power multiplier</h3>
         <p>TThe power multiplier feature in EXTREMIS was inspired by real-life battles where proficient leaders play an essential role in the overall performance of the soldiers. This feature is solely effective on the battlefields in war. With the presence of one or more high-ranked cards, the overall power of the remaining soldiers is enhanced or multiplied. This is an important strategic point to consider while enlisting cards in the war.</p>
       </div>
       </div>
       <div className="col-md-6"><img src={metaverse}/></div>
       </div>
       <div className="row align-items-center ">
       <div className="col-md-6">
       <div className="custom_tab_text" id="mutation">
         <h3>Mutation</h3>
         <p>The mutation functionality allows players to change their cards’ features. Mutations in EXTREMIS are random and can be obtained at the expense of a small fee. The results of mutation are unpredictable. Card mutations are random and can cause unpredictable alterations (in terms of physical features and power) to the card. Mutations may result in the transition of a card becoming more or less powerful. The same card can be used multiple times for mutation with a “Mutation fee” each time.</p>
       </div>
       </div>
       <div className="col-md-6"><img src={metaverse}/></div>
       </div>
       <div className="row align-items-center ">
       <div className="col-md-6">
       <div className="custom_tab_text" id="rank">
         <h3>Rank upgrade</h3>
         <p>Ranks or levels of cards play a crucial role in EXTREMIS as they are one of the many key determinants of win or loss in battles and war. Each member of the three factions is classified into the ranks as mentioned in the ‘Rank’ section of the ‘More’ page.</p> 
         <p>Based on the wins in battles, cards can be promoted in rank thus giving them enhanced power. Loss in battles and war do not cause any change in card ranks. </p>
       </div>
       </div>
       <div className="col-md-6"><img src={metaverse}/></div>
       </div>
       <div className="row">
         <div className="col-md-12">
         <div className="custom_tab_text">
        <p>Card ranks are essential because they play a strategic role to determine win or loss in battles and war. But there is a limitation to this feature. Ranks can be upgraded using upgrade fees until ‘Brigadier general’. Afterwards, players are bound to engage their cards in battle and earn their promotions by winning.</p>
</div>
         </div>
       </div>
       <div className="row align-items-center ">
       <div className="col-md-6">
       <div className="custom_tab_text" id="rename">
         <h3>Rename cards</h3>
         <p>Cards in EXTREMIS are available in their default or generic names. Players can change this to a unique name by renaming their cards at the cost of a small fee. Cards of any rank can be renamed. To rename a card, the players have to click on the card they want to rename, click the “Rename card” option, and type in the desired name for their soldiers. </p>
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
     export default GamefeaturesText;