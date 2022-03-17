import React from 'react';
import blacknet from "../Images/blacknet.png";
import alice from "../Images/alice.png";
import metaverse from "../Images/metaverse.png";
function GettindstartedText () {
	return <div>
    <section className="guidetab_section">
         <div className="container">
            <div className="row">
               <div className="col-md-10 offset-md-1">
                  <div className="guide_tab">
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
         <p>If you are new to EXTREMIS, you can register or sign up to begin the game. Click on the ‘Sign Up’ button in the header menu to register as a new player. Type in your name, a unique username, email address, phone number, your Metamask wallet address and a strong password to complete the sign-up procedure.</p>
<p>If you are already registered as a player, simply type in your username/ email address and password to begin playing.</p>
         </div>
       </div>
       <div className="col-md-6"><img src={blacknet}/></div>
       <div className="col-md-6">
       <div className="custom_tab_text" id="wallet">
         <h3>Connecting wallet</h3>
         <p>A Crypto wallet is a digital wallet used to store cryptocurrencies, tokens, and other digital assets. To play EXTREMIS, the users must have a MetaMask wallet. For players who are using a computer to play EXTREMIS, they must install the MetaMask wallet extension. Once installed, the users must log in to their wallet using the password to connect to their Metamask wallet.</p>
         </div>
       </div>
       <div className="col-md-6"><img src={alice}/></div>
       <div className="col-md-6">
       <div className="custom_tab_text" id="profile">
         <h3>Creating a profile</h3>
         <p>Once you’ve signed up or signed in and connected your wallet, you are almost ready to go. You can upload your user profile picture to complete profile settings. To change your username or, the password you can visit the ‘Account Settings’ page and insert new information. You can also deactivate your account from this page if necessary.</p>
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
     export default GettindstartedText;