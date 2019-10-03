import React from 'react';
import PropTypes from 'prop-types';

import Add from './Add';

import List from './List';

// props 属性约束
Add.propTypes = {
    list: PropTypes.array.isRequired,
    listChange: PropTypes.func.isRequired
}

List.proptypes = {
    list: PropTypes.array.isRequired
}

class Container extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            addList: [1, 2, 3],
        };

        this.addTodo = this.addTodo.bind(this);

    }

    addTodo(todo, e) {
        const addList = this.state.addList;
        addList.unshift(todo);
        // 更新状态
        this.setState({
            addList
        });
    }


    render() {
        return (
            <div>
                <Add list={this.state.addList} listChange={this.addTodo}></Add>
                <List list={this.state.addList}></List>
            </div>
        )
    }

}

export default Container;