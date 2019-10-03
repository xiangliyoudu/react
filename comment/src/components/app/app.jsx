import React from 'react';
import PubSub from 'pubsub-js';

import CommentAdd from '../comment-add/comment-add';
import CommentList from '../comment-list/comment-list';

export default class App extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         comments : [
    //             {user: "tom", content: "tom is 22222....."},
    //             {user: 'jerry', content: 'tom is realy #####.....'}
    //         ]
    //     }
    // }

    // 给组件对象指定state属性
    state = {
        comments: [
            { user: "tom", content: "tom is 22222....." },
            { user: 'jerry', content: 'tom is realy #####.....' }
        ]
    }

    addComment = (comment) => {
        let comments = this.state.comments;
        comments.unshift(comment);
        this.setState({
            comments
        });
    }

    componentDidMount() {
        PubSub.subscribe('deleteComment', (msg, id) => {
            this.deleteComment(id);
        });
    }

    deleteComment = (index) => {
        let comments = this.state.comments;
        comments.splice(index, 1)
        this.setState({
            comments
        });
    }

    render() {
        let { comments } = this.state;

        return (
            <div>
                <header className="site-header jumbotron">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <h1>请发表评论</h1>
                            </div>
                        </div>
                    </div>
                </header>

                <div className="container">
                    <div className="row">
                        <CommentAdd addComment={this.addComment} />
                        <CommentList comments={comments} />
                    </div>
                </div>
            </div>
        );
    }
}

