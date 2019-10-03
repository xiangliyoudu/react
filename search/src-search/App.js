import React from 'react';
import './App.css';

import Search from './components/search';
import Main from './components/main';

export default class App extends React.Component {

  state = {
    word: ''
  }

  updateWord = (word) => {
    this.setState({ word });
  }

  render() {
    return (
      <div className="App container">
        <Search updateWord={this.updateWord} />
        <Main word={this.state.word} />
      </div>
    );
  }
}
