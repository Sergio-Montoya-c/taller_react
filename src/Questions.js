import React, {Fragment} from 'react';
import Gossip from './Gossip';

export default class Questions extends React.Component {
  state = {
    name: "",
    age: 0,
    color: "",
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const {name, age, color} = this.state; 
    
    const answer = { name, age, color };

    this.props.addGossipProp(answer);

  }

  handleInputChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render () {
    const {name, age, color} = this.state;
    return (
      <Fragment>
        <Gossip gossip={this.state} />
        <form onSubmit={this.handleSubmit} >
          <label>Your Name:</label>
          <input type="text" name="name" value={name} onChange={this.handleInputChange}/>

          <label>Your Age:</label>
          <input type="text" name="age" value={age} onChange={this.handleInputChange} />

          <label>Your Color:</label>
          <input type="text" name="color" value={color} onChange={this.handleInputChange} />

          <input type="submit" value="ADD GOSSIP" />
        </form>
      </Fragment>
    );
  }
};
