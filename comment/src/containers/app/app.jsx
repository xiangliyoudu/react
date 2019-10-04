import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

import CommentAdd from '../../components/comment-add/comment-add';
import CommentList from '../../components/comment-list/comment-list';
import { addComment, deleteComment, getComments } from '../../redux/actions';

class App extends React.Component {

    static propTypes = {
        comments: PropTypes.array.isRequired,
        addComment: PropTypes.func.isRequired,
        deleteComment: PropTypes.func.isRequired,
        getComments: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getComments()
    }

    render() {
        let { comments, addComment, deleteComment } = this.props;

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
                        <CommentAdd addComment={addComment} />
                        <CommentList comments={comments} deleteComment={deleteComment} />
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(
    state => ({ comments: state.comments }),
    { addComment, deleteComment, getComments }
)(App)

