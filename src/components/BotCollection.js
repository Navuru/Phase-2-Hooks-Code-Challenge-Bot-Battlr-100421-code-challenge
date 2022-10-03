import React from "react";
import BotCard from "./BotCard";

function BotCollection({bots,handleAdd,dischargeFromArmy}) {
  // Your code here
  return (
    <div className="ui four column grid">
      <div className="row">

        {bots.map((bot) => (
            <BotCard key={bot.id} bot={bot} handleAdd={handleAdd} dischargeFromArmy={dischargeFromArmy}/>
          ))}

        {/*...and here..*/}
        Collection of all bots
      </div>
    </div>
  );
}

export default BotCollection;
