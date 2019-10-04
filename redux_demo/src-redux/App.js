import React from 'react';
import './App.css';

import Page from './components/page';

export default class App extends React.Component {

  render() {

    return (
      <div className="App">
        <Page store={this.props.store} />
      </div>
    )
  }
}



