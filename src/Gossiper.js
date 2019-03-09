import React from 'react';
import Questions from './Questions';

export default class Gossiper extends React.Component {
  state = {
    gossips: [],
  }

  addGossip = (answer) => {
    this.setState({
      gossips: [...this.state.gossips, answer],
    });
  }

  render () {
    return (
      <div>
        <h1>Gossiper</h1>
        <Questions addGossipProp={this.addGossip} />
      </div>
    );
  }
};
