import React from 'react';
import './App.css';
import Stat from './Stat';

class App extends React.Component {
  constructor(props)
  {
    super(props);

    this.state = {
      str: 10,
      dex: 10,
      con: 10,
      wis: 10,
      int: 10,
      cha: 10
    }

    this.updateCharacteristic = this.updateCharacteristic.bind(this);
  }

  updateCharacteristic(name, value) {
    const myobject = {}
    value = Number(value);
    myobject[name] = value;
    
    this.setState(myobject)

    console.log(this.state);
  }

  render() {
    return (
      <div className="App">
        <Stat name="str" burble={this.state.str} vurble={this.updateCharacteristic}/>
        <Stat name="dex" burble={this.state.dex} vurble={this.updateCharacteristic}/>
        <Stat name="con" burble={this.state.con} vurble={this.updateCharacteristic}/>
        <Stat name="int" burble={this.state.int} vurble={this.updateCharacteristic}/>
        <Stat name="wis" burble={this.state.wis} vurble={this.updateCharacteristic}/>
        <Stat name="cha" burble={this.state.cha} vurble={this.updateCharacteristic}/>
      </div>
    );
  }
}

export default App;
