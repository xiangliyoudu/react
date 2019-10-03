import React from 'react';
import {Route, NavLink} from 'react-router-dom';

import MessageDetail from '../components/message-detail';
import MyNavLink from '../components/my-nav-link';

export default class Message extends React.Component {

    state = {
        messages: []
    }

    componentDidMount () {
        // 模拟ajax获取数据
        this.timerId = setTimeout(() => {
            let messages = [
                { id: 1, title: 'message001' },
                { id: 2, title: 'message002' },
                { id: 4, title: 'message004' }
            ];

            this.setState({messages});
        }, 500);
    }

    // 清除延时器
    componentWillUnmount() {
        clearTimeout(this.timerId)
    }

    showDetail = (id) => {
        this.props.history.push(`/home/message/${id}`);
    }

    showDetail2 = (id) => {
        this.props.history.replace(`/home/message/${id}`);
    }

    back = () => {
        this.props.history.goBack();
    }

    forward = () => {
        this.props.history.goForward();
    }

    render() {
        return (
            <div>Message 组件内容
                <ul>
                    {
                        this.state.messages.map((message, index) => (
                            <li key={index}>
                                <MyNavLink to={`/home/message/${message.id}`}> {message.title}</MyNavLink>
                                &nbsp;
                                <button onClick={() => this.showDetail(message.id)}>push查看</button>
                                <button onClick={() => this.showDetail2(message.id)}>replace查看</button>
                            </li>
                        ))
                    }
                </ul>
                <p>
                    <button onClick={this.back}>回退</button> &nbsp;
                    <button onClick={this.forward}>前进</button>
                </p>
                <Route path="/home/message/:id" component={MessageDetail}/>
            </div>
        )
    }
}