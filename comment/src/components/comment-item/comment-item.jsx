import React from 'react';
import PropTypes from 'prop-types';
import PubSub from 'pubsub-js';

import './commentItem.css'

export default class CommentItem extends React.Component {

    static propsTypes = {
        comment: PropTypes.object.isRequired,
        id: PropTypes.number.isRequired
    }

    handleDelete = (e) => {
        e.preventDefault();
        let { id } = this.props;
        if (window.confirm('确认删除？')) {
            PubSub.publish('deleteComment', id);
        }
    }

    render() {
        let { comment } = this.props;

        return (
            <li className="list-group-item">
                <div className="handle">
                    <a onClick={this.handleDelete} href="#">delete</a>
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

