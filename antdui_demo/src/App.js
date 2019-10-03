import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, notification } from 'antd';
import 'antd/dist/antd.css';

export default class App extends React.Component {

  handleClick = () => {
    notification.open({
      message: '提交成功',
      description: 'This is the content of the notification.',
      onClick: () => {
        console.log('Notification Clicked!');
      },
      duration: 1,
    });
  }

  render() {

    return (
      <div >
        <Button type="primary" onClick={this.handleClick}>start</Button>
      </div>
    )
  }
}


