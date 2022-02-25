import React from 'react';
import blacknet from "../Images/blacknet.png";
import alice from "../Images/alice.png";
import metaverse from "../Images/metaverse.png";
function Gettindstarted () {
	return <div>
 <div className="scroll_link">
      <ul>
        <li><a href="#register">How to register</a></li>
        <li><a href="#wallet">Connecting wallet</a></li>
        <li><a href="#profile">Creating a profile</a></li>
      </ul>
    </div>
    <div className="content_box">
  <h4>GETTING STARTED</h4>
     <p>Enter the world of EXTREMIS and get the experience of collecting cards, upgrading them and battling them against other players. Here, you chase for the truth: either choosing for Humanity or Blacknet or Alice, build your own army and make allies to defeat the enemy. Breed your cards to gain ultimate powers to eliminate the last card of your opponent and seize the trophy!</p>
     <div className="row align-items-center ">
       <div className="col-md-6">
         <div className="custom_tab_text" id="register">
         <h3>How to register</h3>
         <p>Enter the world of EXTREMIS and get the experience of collecting cards, upgrading them and battling them against other players. Here, you chase for the truth: either choosing for Humanity or Blacknet or Alice, build your own army and make allies to defeat the enemy. Breed your cards to gain ultimate powers to eliminate the last card of your opponent and seize the trophy!</p>
         </div>
       </div>
       <div className="col-md-6"><img src={blacknet}/></div>
       <div className="col-md-6">
       <div className="custom_tab_text" id="wallet">
         <h3>Connecting wallet</h3>
         <p>Enter the world of EXTREMIS and get the experience of collecting cards, upgrading them and battling them against other players. Here, you chase for the truth: either choosing for Humanity or Blacknet or Alice, build your own army and make allies to defeat the enemy. Breed your cards to gain ultimate powers to eliminate the last card of your opponent and seize the trophy!</p>
         </div>
       </div>
       <div className="col-md-6"><img src={alice}/></div>
       <div className="col-md-6">
       <div className="custom_tab_text" id="profile">
         <h3>Creating a profile</h3>
         <p>Enter the world of EXTREMIS and get the experience of collecting cards, upgrading them and battling them against other players. Here, you chase for the truth: either choosing for Humanity or Blacknet or Alice, build your own army and make allies to defeat the enemy. Breed your cards to gain ultimate powers to eliminate the last card of your opponent and seize the trophy!</p>
       </div>
       </div>
       <div className="col-md-6"><img src={metaverse}/></div>
       </div> 
       </div>
     </div>
     }
     export default Gettindstarted;