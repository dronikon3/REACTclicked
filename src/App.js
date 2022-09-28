import './App.css';
import { Component } from 'react';

class App extends Component{
  state = {
    counter: 0
  }

  onClickBatton = () => {
    this.setState({
      counter: this.state.counter + 1
    })
  }
  render(){
    let counter = this.state.counter
    return (
      <div className="App">
        <p style={{fontSize: 50}}>You clicked {counter} times</p>
        <button onClick={() => this.onClickBatton()}>Click me</button>
      </div>
    );
  }
}

export default App;
