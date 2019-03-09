import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'michelada',
      clicks: 0,
    };
    console.log("I'M ON CONSTRUCTOR");
  }

  changeState = (name) => {
    const clicks = this.state.clicks;
    this.setState({
      name: name,
      clicks: clicks + 1, 
    });
  }

  componentWillUpdate = () => {
    console.log("I'LL UPDATE");
  }

  componentDidUpdate = () => {
    console.log("I WAS UPDATED");
  }

  render() {
    console.log('IM RENDERING');
    const { name, clicks } = this.state;

    return (
      <div className="App">
        { name } { clicks }
        <h1>MICHETALLER</h1>
        <MyComponent name={name} />
        <button onClick={() => this.changeState('PANCHITO')}>
          CHANGE STATE
        </button>

      </div>
    );
  }
}

const MyComponent = ({ name }) => {
  return (
    <div>
      { name }
    </div>
  )
}

export default App;
