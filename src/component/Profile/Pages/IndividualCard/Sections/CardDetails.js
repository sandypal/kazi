import React from 'react';
import collect_cards from "../Sections/Images/collect_cards.png";
import alice_logo from "../Sections/Images/alice_logo.png";
function CardDetails(){
 return <div>
<section className="card_details_section">
         <div className="container">
            <div className="row">
               <div className="col-md-7">
                 <img src={collect_cards}/>
               </div>
               <div className="col-md-5">
                 <div className="details_card">
                     <h2>CARD NAME</h2>
                     <p><span>FACTION:</span> <strong>BLACKNET</strong></p>
                     <p><span>CARD TYPE:</span> <strong>GEN 1</strong></p>
                     <p><span>RANK:</span> <strong>PRIVATE</strong></p>
                     <ul>
                        <li className="border-bottom border-end"><img src={alice_logo}/></li>
                        <li className="border-bottom"><p><span>Rank</span><br></br> 101</p></li>
                        <li className="border-bottom border-end"><p><span>IQ</span><br></br> 101</p></li>
                        <li className="border-bottom"><p><span>EQ</span><br></br> 101</p></li>
                        <li className="border-bottom border-end"><p><span>Melee </span><br></br> 101</p></li>
                        <li className="border-bottom"><p><span>Potential </span><br></br> 101</p></li>
                        <li className="border-bottom border-end"><p><span>Weapon </span><br></br> 101</p></li>
                        <li className="border-bottom"><p><span>Wisdom </span><br></br> 101</p></li>
                        <li className="border-bottom-0 border-end"><p><span>Potential </span><br></br> 101</p></li>
                        <li className="border-bottom-0"><p><span>Leadership </span><br></br> 101</p></li>
                        

                     </ul>
                     </div>
               </div>
            </div>
         </div>
      </section>
 </div>


}
export default CardDetails;