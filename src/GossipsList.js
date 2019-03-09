import React from 'react';
import Gossip from './Gossip';
import App from './App.scss';

const GossipsList = ({ gossips }) => {
  return (
    <div>
      <h2>GOSSIPS LIST</h2>
      <ul className="gossips-list">
        {
          gossips.map((gossip, index) => {
            return <Gossip key={index} name={gossip.name} color={gossip.color} gossip={gossip} />
          })
        }
      </ul>
    </div>
  );
}

export default GossipsList;
