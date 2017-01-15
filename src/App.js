import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search/'

class ListView extends Component {
  render() {
    if (this.props.data) {
      return (
        <span> { 
          this.props.data.hits.map((i) => (
            <p key={i.objectID}>
              <a href={i.url}>{i.title}</a>
            </p>
          )
          )}
        </span>
      )
    }
    else {
      return (<p>Loading...</p>)
    }
  }
}

class App extends Component {

  componentDidMount() {
    this.fetchTopstories()
  }

  updateDisplay(result) {
    this.results = result
    this.setState(result)
  }

  fetchTopstories() {
    fetch(API_ENDPOINT)
      .then(response => response.json())
      .then(result => this.updateDisplay(result));
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Hacker News</h2>
        </div>
        <ListView data={ this.results }/>
      </div>
    );
  }
}

export default App;
