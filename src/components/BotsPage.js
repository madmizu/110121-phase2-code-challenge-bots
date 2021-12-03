import React, { useEffect, useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

const API = "http://localhost:8002/bots";

function BotsPage() {
  const [allBots, setAllBots] = useState([]);

  useEffect(()=>{
    fetch(API)
      .then(resp=>resp.json())
      .then(json=>setAllBots(json))
    }, []);
    
    function enlistBot (selectedBot, isTrue = true) {
      setAllBots(allBots.map((bot)=> bot.id === selectedBot.id ? {...bot, enlisted: isTrue } : bot))
    }

    function initiateSelfDestruct (decomissionedBot) {
      setAllBots(allBots.filter((bot)=> bot.id !== decomissionedBot.id))
      backendDelete(decomissionedBot.id)
    }

    function backendDelete(id){
      fetch(API + "/" + id, {
        method: 'DELETE'
      }).then(()=> {
        console.log("removed");
      }).catch(err=> {
        console.error(err)
      });
      }

  return (
    <div>
      <YourBotArmy 
        myBotsArmy={allBots.filter((bot)=>bot.enlisted)}
        releaseBot={enlistBot}
        initiateSelfDestruct={initiateSelfDestruct}
      />
      <BotCollection
        allBots={allBots}
        enlistBot={enlistBot}
        initiateSelfDestruct={initiateSelfDestruct}
      />
    </div>
  )
}

export default BotsPage;
