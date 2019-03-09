import React, { Fragment } from 'react';

export default class Questions extends React.Component {
  state = {
    name: "",
    age: 0,
    color: "",
  }

  render () {
    return (
      <div>
        <label>Your Name:</label>
        <input type="text" name="name" value="" />
      </div>
    );
  }
};
