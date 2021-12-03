import React from "react";
import BotCard from "./BotCard";

function BotCollection({ allBots, enlistBot, initiateSelfDestruct }) {
  // Your code here
  return (
    <div className="ui four column grid">
      <div className="row">
        {allBots.map((bot)=>
          <BotCard 
            key={bot.id}
            bot={bot}
            handleClick={enlistBot} 
            initiateSelfDestruct={initiateSelfDestruct}
          />)}
        Collection of all bots
      </div>
    </div>
  );
}

export default BotCollection;
