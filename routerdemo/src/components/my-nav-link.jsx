import React from 'react';
import {NavLink} from 'react-router-dom';

export default class MyNavLink extends React.Component {

    render() {
        return(
            // 将外部传入的所有属性传给 navlink
            <NavLink {...this.props} activeClassName="activeClass"></NavLink>
        )
    }
}