import React from 'react';
import 'react-bootstrap-accordion/dist/index.css'
function Faq2 () {
	return <div>

<div className="faq_box">
   <div className="row">
   <div class="accordion" id="accordionPanelsStayOpenExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingEight">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseEight" aria-expanded="true" aria-controls="panelsStayOpen-collapseEight">
      Q1: How do I buy my first card?
      </button>
    </h2>
    <div id="panelsStayOpen-collapseEight" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingEight">
      <div class="accordion-body">
      <p>A: Once the user have connected their wallet, they need to sign up/register to the game. This will enable the user to acquire a profile. After signing up and creating a profile, the user can buy their first card from the auction house or the fixed marketplace within the EXTREMIS game.</p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingNine">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseNine" aria-expanded="false" aria-controls="panelsStayOpen-collapseNine">
      Q2: Where can I buy cards from?
      </button>
    </h2>
    <div id="panelsStayOpen-collapseNine" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingNine">
      <div class="accordion-body">
        <p>A: EXTREMIS is an online card-based game which can be played by connecting a crypto wallet. The first step of the game is to collect your desired cards. Cards are available for buying in the EXTREMIS auction house and the fixed marketplace. Navigate through the website menu to visit the auction house and fixed marketplace to buy your first card from.</p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingTen">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTen" aria-expanded="false" aria-controls="panelsStayOpen-collapseTen">
      Q3: How can I sell my cards?
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTen" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTen">
      <div class="accordion-body">
        <p>A: Users can sell their cards by holding an auction in the auction house or putting up their cards for sale in the fixed marketplace. In the auction house, one can set a reserve price and time limit for starting the auction. The highest bidder within the time limit set by the seller, gets the card. In the fixed marketplace, the seller sets a certain price for the card to be put up for sale. An interested buyer can buy the card by simply clicking purchase. Please visit our charges list and FAQ section for knowing more about gas fees and contract charges.</p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingEleven">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseEleven" aria-expanded="false" aria-controls="panelsStayOpen-collapseEleven">
      Q4: How do auctions and fixed marketplaces work?
      </button>
    </h2>
    <div id="panelsStayOpen-collapseEleven" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingEleven">
      <div class="accordion-body">
      <p>A: Card owners and buyers can either buy or sell their cards through auctions and fixed marketplaces. In the EXTREMIS auction house, card owners can set a reserve price and duration of auction for selling the cards. The minimum duration for holding an auction in EXTREMIS is 1 minute. We charge a small fee from the card seller for holding an auction. The highest bidder within the time limit gets to buy and become the new owner of the card.
Unlike the auction house, card sellers assign a specific price to cards for sale in the fixed marketplace. Buyers can purchase the cards on sale by paying the fixed amount. There is no time limit or sale in the fixed marketplace.</p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingTwelve">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwelve" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwelve">
      Q5: How much do I need to play EXTREMIS?
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwelve" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwelve">
      <div class="accordion-body">
      <p>A: Signing up to the game is completely free of cost. But to enjoy the full experience of the game, users need to have enough MATIC coins in their wallet to buy one or multiple cards. Cards in EXTREMIS come at different prices based on their rarity and overall characteristics.</p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingThirteen">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThirteen" aria-expanded="false" aria-controls="panelsStayOpen-collapseThirteen">
      Q6: How much do the cards cost?
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThirteen" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThirteen">
      <div class="accordion-body">
      <p>A: Cards in the EXTREMIS game have diverse backgrounds, physical and mental abilities. Prices for cards are set according to these values. Thus different cards cost different prices.</p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingFourteen">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFourteen" aria-expanded="false" aria-controls="panelsStayOpen-collapseFourteen">
      Q7: What are ‘gas fees’ and why do I need to pay it?
      </button>
    </h2>
    <div id="panelsStayOpen-collapseFourteen" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFourteen">
      <div class="accordion-body">
        <p>A: EXTREMIS is Polygon network based card game. There are many functionalities within the game which may charge users with gas fees. Gas fees is the fee paid to miners for processing a transaction on the Polygon network. Whenever a user buy, sell, breed, battle or join wars, their request gets sent to the miners who are in charge processing the transactions. For this, they receive a small network fee paid by the person who submits the request. This fee is known as gas fee and its amount depends on the complexity of the request submitted by the user.</p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingFifteen">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFifteen" aria-expanded="false" aria-controls="panelsStayOpen-collapseFifteen">
      Q8: How many cards do I need to get started?
      </button>
    </h2>
    <div id="panelsStayOpen-collapseFifteen" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFifteen">
      <div class="accordion-body">
        <p>A: To get started you only need one card. You may collect more cards to enjoy the “Breed cards” and “Join war” playable features of the game.</p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingSixteen">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSixteen" aria-expanded="false" aria-controls="panelsStayOpen-collapseSixteen">
      Q9: How much do I have to pay to put up my cards for Battle, War and Breeding?
      </button>
    </h2>
    <div id="panelsStayOpen-collapseSixteen" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingSixteen">
      <div class="accordion-body">
      <p>A: There are two different ways you can breed your cards. One is the “Breed cards” feature, where card owners can breed one card with another card from his own collection that belongs to the same factions. The other is “Breed with others” feature, where card owners can put up their desired card in the breed list in order to breed with cards belonging to other players. No fees are required for cards to breed within the user’s own collection. But to breed with others users need to pay a sum total of 5 MATIC+ price set by other breeder (MATIC). Card holders will also have to pay gas fees to complete transaction in the blockchain network.</p>
      <p>No fees need to be paid for entering your cards in battle with others.</p>
      <p>Joining any war zone requires the card holder to pay a sum of 5 MATIC.</p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingSeventeen">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSeventeen" aria-expanded="false" aria-controls="panelsStayOpen-collapseSeventeen">
      Q10: What’s the price of card mutation?
      </button>
    </h2>
    <div id="panelsStayOpen-collapseSeventeen" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingSeventeen">
      <div class="accordion-body">
        <p>A: Card owners can mutate their cards by paying a sum total of 10 MATIC.</p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingEighteen">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseEighteen" aria-expanded="false" aria-controls="panelsStayOpen-collapseEighteen">
      Q11: When can I get a refund?
      </button>
    </h2>
    <div id="panelsStayOpen-collapseEighteen" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingEighteen">
      <div class="accordion-body">
      <p>A: No transactions within the EXTREMIS game is refundable.</p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingNineteen">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseNineteen" aria-expanded="false" aria-controls="panelsStayOpen-collapseNineteen">
      Q12: Why isn’t my newly bought card showing up in my account?
      </button>
    </h2>
    <div id="panelsStayOpen-collapseNineteen" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingNineteen">
      <div class="accordion-body">
      <p>A: Sometimes it takes more time than usual to process transactions in the blockchain network. This is why your newly bought card may not instantly show up in your account. You can also contact us to receive assistance regarding any technical inconvenience that arise within the game.</p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingTwenty">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwenty" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwenty">
      Q13: Do I get any money for breeding new cards?
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwenty" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwenty">
      <div class="accordion-body">
      <p>A: If you breed cards within your collection, you are neither charged nor receive an extra fee. If you put your desired cards in the breed list for others to breed with, you will receive a fee once someone breeds with your card. You may put your card up for breeding by attaching a certain amount of price that potential partners need to pay for their cards to breed with yours.</p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingTwentyOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwentyOne" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwentyOne">
      Q14: I sold a card. Where is my MATIC?
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwentyOne" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwentyOne">
      <div class="accordion-body">
      <p>A: If you successfully sold a card through our holding an auction or the fixed marketplace, the other user definitely sent MATIC. You will receive your sale money in your Metamask wallet. In case of an unwanted technical inconvenience, you may contact us directly to receive assistance.</p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingTwentyTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwentyTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwentyTwo">
      Q15: When I tried to buy a card, it said, “Action denied”. What’s going on?
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwentyTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwentyTwo">
      <div class="accordion-body">
      <p>A: You may be restricted from buying a card because of the following reasons:</p>
      <p>a.	If the auction where the card was put up for sale was cancelled</p>
      <p>b.	If the card owner cancelled the sale on the fixed marketplace</p>
      <p>c.	If someone else already purchased the card or the card was sold out by in the auction by the owner.</p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingTwentyThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwentyThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwentyThree">
      Q16: I can’t access my wallet. Can you recover my cards?
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwentyThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwentyThree">
      <div class="accordion-body">
      <p>A: Unfortunately, no. If you forgot your password and lost the Metamask secret recovery phrase and lost access to your wallet, we can’t recover your cards. Blockchain security ensures maximum security without any provision for making changes. Our smart contracts secure each card on the game so that the developers can’t edit, access, or reassign them. This protects your cards and other digital assets from hackers and anyone else who would steal them. Unfortunately, it also means we can’t ‘recover’ a card.</p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingTwentyFour">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwentyFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwentyFour">
      Q17: What does it cost to make a bid on a card? 
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwentyFour" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwentyFour">
      <div class="accordion-body">
      <p>A: To place a bid on a card in the EXTREMIS game, means to offer a higher bid than the reserve price set on a card put up in the auction house by card owners. There is no provision for making an offer to buy a card in the fixed marketplace.</p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingTwentyFive">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwentyFive" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwentyFive">
      Q18: Where does my ether go when I make an bid?
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwentyFive" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwentyFive">
      <div class="accordion-body">
      <p>A: Potential buyers can place bids in the auction house to buy a card put up for sale. Anyone raising a bid of certain amount will confirm allow that transaction to go into our smart contract until the auction is completed or a counter bidding price was raised. If no higher bids are raised, the potential buyer receives the new card at the expense of their bidding price. In case a counter bidding price was raised, the previous buyer’s transaction is reverted back and the offered MATIC goes back to their wallet.</p>
      </div>
    </div>
  </div>
</div>
   </div>
</div>
     </div>
     }
     export default Faq2;
