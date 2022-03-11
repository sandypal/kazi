import React from 'react';
import Blacknet from '../Sections/WarCard/Blacknet';
import Humanity from '../Sections/WarCard/Humanity';
function WarBattleText(){
 return <div>
     <section className="war_battle_card">
     <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="war_card_scroll">
                        <h2>BLACKNET</h2>
                    <Blacknet/></div></div>
                <div className="col-md-6">
                <div className="war_card_scroll">
                <h2>HUMANITY</h2>
                    <Humanity/></div>
                    </div>
                </div>

                <div className="row">
                <div className="col-md-12">
                    <div className="confirm_button">
                        <a className="btn" href="#">CONFIRM SELECTION</a>
                        </div>
                    </div>
                    </div>
                </div>
         </section>


 </div>


}
export default WarBattleText;