import React from 'react';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';

import MyNavLink from '../components/my-nav-link';
import News from './news';
import Message from './message';

export default class Home extends React.Component {

    render() {
        return (
            <div>
                <h2>
                    Home router
                </h2>
                <div>
                    <ul className="nav nav-tabs">
                        <li>
                            <MyNavLink to="/home/news" >news</MyNavLink>
                        </li>
                        <li>
                            <MyNavLink to="/home/message" >message</MyNavLink>
                        </li>
                    </ul>
                </div>
                <div>
                    <Switch>
                        <Route exact path='/home/news' component={News} />
                        <Route path='/home/message' component={Message} />
                        <Redirect to='/home/news' />
                    </Switch>
                </div>
            </div>
        )
    }
}