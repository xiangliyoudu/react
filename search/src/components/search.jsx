import React from 'react';
import PubSub from 'pubsub-js';

export default class Search extends React.Component {

    state = {
        word: ''
    }

    // 获取表单数据
    handleChange = (e) => {
        let word = e.target.value;
        this.setState({ word });
    }

    // 搜索
    handleClick = () => {
        let { word } = this.state;
        // 更新state
        this.setState({ word: '' });
        if (word.trim()) {
            // 发布搜索消息
            PubSub.publish('search', word);
        }
    }

    render() {

        let { word } = this.state;

        return (
            <div className="row">
                <input type="text" value={word} onChange={this.handleChange} /> &nbsp;
                <button onClick={this.handleClick}>search</button>
            </div>
        )
    }
}