import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ myBotsArmy, releaseBot, initiateSelfDestruct}) {
  //your bot army code here...

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {myBotsArmy.map((bot)=> 
            <BotCard 
              key={bot.id} 
                bot={bot} 
                handleClick={()=> releaseBot(bot, false)}
                initiateSelfDestruct={initiateSelfDestruct}
              />)}
          Your Bot Army
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
