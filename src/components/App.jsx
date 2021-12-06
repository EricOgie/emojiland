import React from "react";
import Card from './card';
import Emojilib from "../Emojilib";

function App() {
  return (
    <div>
      <h1>
        <span>emojiliberary</span>
      </h1>
      <dl className="dictionary">
      {Emojilib.map((Emojilib)=>(<Card key={Emojilib.id} emoji={Emojilib.emoji} 
      name={Emojilib.name}meaning={Emojilib.meaning}/>))}
      </dl>
    </div>
  );
}

export default App;
