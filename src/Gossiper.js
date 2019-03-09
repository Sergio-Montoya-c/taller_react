import React from 'react';
import Questions from './Questions';

export default class Gossiper extends React.Component {
  state = {
    gossips: [],
  }

  render () {
    return (
      <div>
        <h1>Gossiper</h1>
        <Questions />
      </div>
    );
  }
};
