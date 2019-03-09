import React from 'react';

const GossipsList = ({ gossips }) => {
  return (
    <ul>
      {
        gossips.map(gossip => {
          return (
            <li>
              <div>Name: {gossip.name}</div>
              <div>Age: {gossip.age}</div>
              <div>Color: {gossip.color}</div>
            </li>
          )
        })
      }
    </ul>
  );
}

export default GossipsList;
