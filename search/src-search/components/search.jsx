import React from 'react';
import PropTypes from 'prop-types';

export default class Search extends React.Component {

    static propTypes = {
        updateWord: PropTypes.func.isRequired
    }

    state = {
        word: ''
    }

    handleChange = (e) => {
        let word = e.target.value;
        this.setState({ word });
    }

    handleClick = () => {
        let { updateWord } = this.props;
        let { word } = this.state;
        // 更新state
        this.setState({ word: '' });
        if(word.trim()) {
            // 调用父组件方法，传递搜索值
            updateWord(word);
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