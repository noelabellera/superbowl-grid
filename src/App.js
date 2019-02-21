import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      afcTeam: "",
      nfcTeam:  "",
      event: ""
    }

    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }
  render() {
    return (
      <div className="App">
        <h1>Grid Generator for Sports</h1>

        <h3>Name of Event:</h3>
        <form>
          <label>
            <input type="text"/>
          </label>
          <input type="submit"/>
        </form>
      </div>
    );
  }
}

export default App;
