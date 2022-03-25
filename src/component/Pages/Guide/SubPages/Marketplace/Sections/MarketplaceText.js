import React from 'react';
import blacknet from "../Images/blacknet.png";
import alice from "../Images/alice.png";
import metaverse from "../Images/metaverse.png";
import mid_banner from "../Images/mid_banner.png";
function MarketplaceText () {
	return <div>
    <section className="guidetab_section">
         <div className="container">
            <div className="row">
               <div className="col-md-10 offset-md-1">
                  <div className="guide_tab">
 <div className="scroll_link">
      <ul>
        <li><a href="#auction">Auction house</a></li>
        <li><a href="#fixedmarketplace">Fixed marketplace</a></li>
        <li><a href="#starting">Starting an auction</a></li>
        <li><a href="#bidswork">How bids work</a></li>
        <li><a href="#timelimit">Setting time limit</a></li>
        <li><a href="#sellingout">Selling out in auction</a></li>
        <li><a href="#buyingselling">Buying and selling from fixed marketplace</a></li>
      </ul>
    </div>
    <div className="content_box">
  <h4>MARKETPLACE</h4>

     <div className="row align-items-center ">
       <div className="col-md-6">
         <div className="custom_tab_text" id="auction">
         <h3>Auction house</h3>
         <p>The auction house is where players can purchase or sell cards through placing bids and auctioning. To purchase cards in the auction house, players must place bids on the chosen cards. The highest bidders win the auction and get ownership of the card which is transferred to their collection. To sell cards, players must set a reserved price and time of auction. The seller can either sell out the card or wait for the auction time to end to sell the card to the highest bidder.</p>
         </div>
       </div>
       <div className="col-md-6"><img src={blacknet}/></div>
       </div>
       <div className="row">
       <div className="custom_tab_text">
         <p> Auctions have time restrictions. However, auctions can be cancelled anytime. If an auction is cancelled, we return the highest bidder their bid amount. When a seller puts any card on the auction list we escrow the token. Hence the contract will be the owner of the card for the duration of the ongoing auction.</p>
         </div>
         </div>
       <div className="row align-items-center ">
       <div className="col-md-6">
       <div className="custom_tab_text" id="fixedmarketplace">
         <h3>Fixed marketplace</h3>
         <p>Unlike the auction house. Fixed marketplaces do not have time restrictions and have fixed prices set by the seller. Buyers can purchase cards at the rate fixed by the seller. Sellers can set the desired price of their own to the cards they wish to sell.</p>
         <p>The EXTREMIS auction house and fixed marketplace are important platforms where players can earn money by selling their cards.</p>
         </div>
       </div>
       <div className="col-md-6"><img src={alice}/></div>
       </div>
      
       <div className="row">
       <div className="col-md-12">
       <div className="custom_tab_text" id="starting">
         <h3>Starting an auction</h3>
         <p>Players can sell their cards by starting an auction. To initiate an auction, select the card you want to sell and choose the ‘Sell card' option. This will provide players with the option of selling the card on the auction house or fixed marketplace. Select ‘Auction house’ to start the process of auctioning. Afterwards, players must set a reserved price and duration of the auction. Once you confirm by clicking the ‘Confirm’ button, your auction will go live.</p>
       </div>
       </div>
       <div className="col-md-12"><img src={mid_banner}/></div>
       
       <div className="col-md-12">
       <div className="custom_tab_text" id="bidswork">
         <h3>How bids work</h3>
         <p>Similar to a real-life auction, the EXTREMIS auction also allows users to make bids. The highest bidder within the auction duration wins and becomes the new owner of the card. </p>
       </div>
       </div>
       <div className="col-md-12"><img src={mid_banner}/></div>
       </div>
       <div className="row align-items-center ">
       <div className="col-md-6">
       <div className="custom_tab_text" id="timelimit">
         <h3>Setting time limit in auction</h3>
         <p>Auction duration is important because this allows players to make as many bids as possible within the set time. Sellers can fix a specific duration for the auction to remain active. The highest bidder within this time wins the auction and claims ownership of the card. The minimum time duration for an auction is 1 minute.</p>
       </div>
       </div>
       <div className="col-md-6">
         <div className="custom_tab_text" id="timelimit">
         <h3>Selling out in auction</h3>
         <p>If a seller wants to end the auction before the set duration, they can ‘Sell out’ the card by clicking on the card they set up for auction. Sellers may ‘Sell out’ their card upon receiving the desired bid value.</p>
       </div>
       </div>
       </div>
       <div className="row align-items-center ">
       <div className="col-md-6">
       <div className="custom_tab_text" id="sellingout">
         <h3>Buying in fixed marketplace</h3>
         <p>The fixed marketplace in EXTREMIS allows users to purchase at fixed prices set by the seller. Interested buyers can browse through the cards at the sale and purchase their desired cards at the fixed selling price. There is no time limitation in fixed marketplaces. </p>
       </div>
       </div>
       <div className="col-md-6"><img src={metaverse}/></div>
       </div>
       <div className="row align-items-center ">
       <div className="col-md-6">
       <div className="custom_tab_text" id="buyingselling">
         <h3>Selling in fixed marketplace</h3>
         <p>Interested sellers can choose the card they want to select and choose the ‘Marketplace’ option to start a fixed sale. Afterwards, they must set a selling price and confirm to put up the card for sale. Sellers can also withdraw the sale if they want to.</p>
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
     export default MarketplaceText;