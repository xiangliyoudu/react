import React from 'react';
import logo from './logo.svg';
import './App.css';

import axois from 'axios'

// import Container from './components/Container';
// import FormCollect from './components/FormCollect'
// import Life from './components/Life'




export default class App extends React.Component {

  state = {
    repoName: '',
    repoUrl: ''
  }

  componentDidMount() {
    let url = 'https://api.github.com/search/repositories?q=r&sort=stars';
    // axios
    axois.get(url)
      .then(res => {
        let { name, html_url } = res.data.items[0];
        let repoName = name;
        let repoUrl = html_url;
        this.setState({ repoName, repoUrl });
      }).catch(err => {
        console.log(err);
      });

    // fetch 
    fetch(url).then(res => {
      return res.json()
    }).then(data => {
      console.log(data.items[0]);
    }).catch(err => {
      console.log(err);
    });
  }

  render() {

    let { repoName, repoUrl } = this.state;

    if (!repoName) {
      return (
        <div>
          <p>loading .....</p>
        </div>
      );
    } else {
      return (
        <div>
          <p>most star repo is  <a href={repoUrl}>{repoName}</a></p>
        </div>
      );
    }
  }
}
