import React from 'react';
import CardComponent from './CardComponent';

function YourBotArmy({ clickBot, onSet, onHandleDelete }) {
  
  function handle(input) {
    
    let filtered = clickBot.filter(bot => bot.id !== input.id);
    onSet(filtered);

    console.log('bots:', input);
  }
  
  let maps = clickBot.map(input => (
    <CardComponent 
      onHandleDelete={onHandleDelete}  
      key={input.id} 
      onHandleClick={() => handle(input)}  
      bot={input} 
    />
  ));

  return (
    <div >
      {clickBot.length === 0 ? <p className="text-center font-mono ... text-xl font-bold ">Click on the bot images below to add to your bot army</p> : maps} 
    </div>
  );
}

export default YourBotArmy;
