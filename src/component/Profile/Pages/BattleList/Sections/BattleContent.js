import React from 'react';
import BattleReady from '../Sections/BetteBox/BattleReady';
import Opponents from './BetteBox/Opponents';
import BattleZone from './BetteBox/BattleZone';
import Winner from './BetteBox/Winner';
function BattleContent(){
 return <div>
<section className="battle_content_section">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="row">
                  <div className="col-md-6">
                      <h2>BATTLE READY</h2>
                      <BattleReady/>
                      </div>
                      <div className="col-md-6">
                      <h2>OPPONENTS</h2>
                      <Opponents/>
                      </div>
                  </div>

                  <BattleZone/>
                  <Winner/>
               </div>
            </div>
         </div>
      </section>

 </div>
 

}
export default BattleContent;