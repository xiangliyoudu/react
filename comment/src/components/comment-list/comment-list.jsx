import React from 'react';
import CommentItem from '../comment-item/comment-item';
import PropTypes from 'prop-types';
import './commentList.css'

export default class CommentList extends React.Component {
    // 给组件 类 指定属性
    static propTypes = {
        comments: PropTypes.array.isRequired
    }

    render() {
        let { comments } = this.props;
        let ifShow = comments.length > 0;
        let items = comments.map((item, index) => {
            return <CommentItem key={index} id={index} comment={item}></CommentItem>
        });

        if (!ifShow) {
            return (
                <div className="col-md-6">
                    <h3 className="reply">评论回复：</h3>
                    <h2>暂无评论，点击左侧添加评论！！！</h2>
                </div>
            )
        } else {
            return (
                <div className="col-md-6">
                    <h3 className="reply">评论回复：</h3>
                    <ul className="list-group">
                        {items}
                    </ul>
                </div>
            );
        }
    }
}



