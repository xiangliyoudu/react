import React from 'react';
import './App.css';

import Search from './components/search';
import Main from './components/main';

export default class App extends React.Component {

  render() {
    return (
      <div className="App container">
        <Search />
        <Main />
      </div>
    );
  }
}
