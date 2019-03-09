import React from 'react';

const Gossip = ({ gossip }) => {
  const {name, color, age} = gossip;
  return (
    <li style={{background: "#cdcdcd", marginBottom: "10px"}}>
      <div>Name: {name}</div>
      <div>Age: {age}</div>
      <div>Color: {color}</div>
    </li>
  )
}

export default Gossip;
