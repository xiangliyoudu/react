import React from 'react';
import PropTypes from 'prop-types';

import './commentItem.css'

export default class CommentItem extends React.Component {

    static propsTypes = {
        comment: PropTypes.object.isRequired,
        deleteComment: PropTypes.func.isRequired,
        id: PropTypes.number.isRequired
    }

    handleDelete = () => {
        let { id, deleteComment } = this.props;
        if (window.confirm('确认删除？')) {
            deleteComment(id);
        }
    }

    render() {
        let { comment } = this.props;

        return (
            <li className="list-group-item">
                <div className="handle">
                    <button onClick={this.handleDelete} href="#">delete</button>
                    <p className="user">
                        <span>{comment.user}</span>
                        <span>说：</span>
                    </p>
                    <p className="centence">{comment.content}</p>
                </div>
            </li>
        );
    }
}

