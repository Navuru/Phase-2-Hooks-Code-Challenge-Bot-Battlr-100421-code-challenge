import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({handleAdd,armyBot,dischargeFromArmy}) {
  //your bot army code here...

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {/*...and here...*/}
          {armyBot.map((bot) => (
            <BotCard key={(bot.id)} bot={bot} handleAdd={handleAdd} dischargeFromArmy={dischargeFromArmy}/>
          ))}
          Your Bot Army
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
