import React from "react";
import Card from './card';
import Emojilib from "../Emojilib";


function createCard(Emojilib){
  return (
    <Card 
      key={Emojilib.id}
      emoji={Emojilib.emoji}
      name={Emojilib.name}
      meaning={Emojilib.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {Emojilib.map(createCard)}
      </dl>
    </div>
  );
}

export default App;
