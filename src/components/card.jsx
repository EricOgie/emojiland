import React from "react";
import Emoji from "./Emoji";

function Card(props){
    console.log(props);
    return (
        <div className="term">
          <dt>
          <Emoji emoji={props.emoji}/>
            <span>{props.name}</span>
          </dt>
          <dd>
           {props.meaning}
          </dd>
        </div>
    );
}

export default Card;