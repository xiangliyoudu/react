import React from 'react';
import axios from 'axios';
import PubSub from 'pubsub-js';

export default class Main extends React.Component {

    state = {
        initView: true,
        loading: false,
        users: [],
        errorMsg: ''
    }

    componentDidMount() {
        // 订阅消息 search
        PubSub.subscribe('search', (msg, word) => {
            this.search(msg, word);
        });
    }

    search(msg, word) {
        // 更新状态为 加载中
        this.setState({ initView: false, loading: true });
        // 发起ajax请求
        let url = `https://api.github.com/search/users?q=${word}`;

        axios.get(url).then(res => {
            let users = res.data.items;

            if (users.length > 0) {
                this.setState({ loading: false, users });
            } else {
                this.setState({ initView: true, loading: false });
            }
        }).catch(err => {
            console.log(err);
            this.setState({ loading: false, errorMsg: '搜索失败' });
        });
    }

    render() {

        let { initView, loading, users, errorMsg } = this.state;

        if (initView) {
            return <h2>请输入关键字搜索</h2>
        } else if (loading) {
            return <h2>正在加载中......</h2>
        } else if (users.length > 0) {
            return (
                <div className="row">
                    {
                        users.map((user, index) => (
                            <div className="card" key={index}>
                                <a href={user.html_url} target="_blank">
                                    <img src={user.avatar_url} style={{ width: 100 }} alt="" />
                                </a>
                                <p className="card-text">{user.login}</p>
                            </div>
                        ))

                    }
                </div>
            )
        } else if (errorMsg) {
            return <h2>{errorMsg}</h2>
        }
    }
}