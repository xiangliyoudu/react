import React from 'react';
import PropTypes from 'prop-types';
import { thisTypeAnnotation } from '@babel/types';



class Add extends React.Component {

    constructor(props) {
        super(props);

        this.add = this.add.bind(this);
    }

    add() {
        // 获取input值
        let val = this.addInput.value;
        val = val.trim();
        // 清空值
        this.addInput.value = '';
        if(!val) {
            return;
        }
        console.log(val);
        // 添加值
        this.props.listChange(val);
    }

    render() {
        // 解构赋值
        const { list } = this.props;

        return (
            <div>
                <input type="text" ref={(input) => this.addInput = input} /> &nbsp;
                <button onClick={this.add}>
                    添加 #{list.length + 1}
                </button>
            </div>
        );
    }

}

export default Add;