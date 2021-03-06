import React from 'react';
import Questions from './Questions';
import GossipsList from './GossipsList';
import './App.scss';

export default class Gossiper extends React.Component {
  state = {
    gossips: [],
  }

  addGossip = (answer) => {
    this.setState({
      gossips: [answer, ...this.state.gossips],
    });
  }

  render () {
    const { gossips } = this.state;
    return (
      <div className="gossiper">
        <h1>Gossiper</h1>
        <Questions addGossipProp={this.addGossip} />
        <GossipsList gossips={gossips} />
      </div>
    );
  }
};
