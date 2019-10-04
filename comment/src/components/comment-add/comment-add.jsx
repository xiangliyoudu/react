import React from 'react';
import PropTypes from 'prop-types';

export default class CommentAdd extends React.Component {

    static propTypes = {
        addComment: PropTypes.func.isRequired
    }

    state = {
        user: '',
        content: ''
    }


    // 箭头函数，不用bind
    add = (e) => {
        e.preventDefault();
        // 父组件传递的add方法
        let addComment = this.props.addComment;
        // 收集数据
        let { user, content } = this.state;
        // 过滤空串
        user = user.trim();
        content = content.trim();
        if (user && content) {
            // 添加数据        
            addComment({ user, content })
        }
        //　清空输入框
        this.setState({
            user: '',
            content: ''
        });
    }

    handInput = (event) => {
        let user = event.target.value;
        this.setState({
            user: user
        });
    }

    handleTextarea = (e) => {
        let content = e.target.value;
        this.setState({
            content: content
        });
    }

    render() {

        let user = this.state.user;
        let content = this.state.content;

        return (
            <div className="col-md-6">
                <form action="" className="form-horizontal">
                    <div className="form-group">
                        <label htmlFor="">user:
                            <input onChange={this.handInput}
                                value={user}
                                type="text" className="form-control" />
                        </label>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">content:
                            <textarea onChange={this.handleTextarea}
                                value={content}
                                className="form-control" rows="6"></textarea>
                        </label>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <input onClick={this.add}
                                type="submit" name="submit" className="btn btn-default pull-right" />
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

