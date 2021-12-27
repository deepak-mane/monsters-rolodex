import React from "react";
import './card.styles.css'

export const Card = (props) => (
  <div className='card-container'>
    <img alt="monster" src={`https://robohash.org/${props.monster.id}?set-set3&size=180x180`} />
    <h2>{props.monster.name}</h2>
    <p>{props.monster.email}</p>
   
    <input
    className="card-container-input"
    type="text"
    />  
    <button className="card-container-button">Start</button>
    <button className="card-container-button">Stop</button>
    <button className="card-container-button">Restart</button>
  </div>
)