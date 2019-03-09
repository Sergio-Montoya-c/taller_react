import React from 'react';
import Gossip from './Gossip';

const GossipsList = ({ gossips }) => {
  return (
    <ul>
      {
        gossips.map((gossip, index) => {
          return <Gossip key={index} name={gossip.name} color={gossip.color} gossip={gossip} />
        })
      }
    </ul>
  );
}

export default GossipsList;
