import React from 'react';
import './App.css';
import { NavLink, Switch, Route, Redirect } from 'react-router-dom';

import Home from './views/home';
import About from './views/about';
import News from './views/news';
import Message from './views/message';
import MyNavLink from './components/my-nav-link';

export default class App extends React.Component {

  render() {

    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header">
              <h2>
                react router header ....
                </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className='col-xs-2 col-xs-offset-2'>
            <div className='list-group'>
              <MyNavLink to='/about' className='list-group-item'>About</MyNavLink>
              <MyNavLink to="/home" className='list-group-item'>Home</MyNavLink>
            </div>
          </div>
          <div className='col-xs-6'>
            <div className='panel'>
              <div className='panel-body'>
                <Switch>
                  <Route exact path='/about' component={About} />
                  <Route path='/home' component={Home} />
                  <Redirect to='/about' />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


