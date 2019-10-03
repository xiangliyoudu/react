import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

export default class Main extends React.Component {

    static propTypes = {
        word: PropTypes.string
    }

    state = {
        initView: true,
        loading: false,
        users: [],
        errorMsg: ''
    }

    //更新后会被立即调用。首次渲染不会执行此方法。
    componentDidUpdate(prevProps) {
        // 典型用法（不要忘记比较 props）：
        if (this.props.word !== prevProps.word) {
            this.search(this.props.word);
        }
    }

    search(word) {
        // 更新状态为 加载中
        this.setState({ initView: false, loading: true });
        // 发起ajax请求
        let url = `https://api.github.com/search/users?q=${word}`;
        axios.get(url).then(res => {
            let users = res.data.items;
            console.log(users)
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