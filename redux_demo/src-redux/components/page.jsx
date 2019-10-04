import React from 'react';

import * as actions from "../redux/actions"

export default class Page extends React.Component {

    state = {
        step: 1
    }

    add = () => {
        let { step } = this.state;
        // 调用store的方法更新状态
        this.props.store.dispatch(actions.add(step))
    }

    minus = () => {
        let { step } = this.state;
        // 调用store的方法更新状态
        this.props.store.dispatch(actions.minus(step))
    }

    addIfOdd = () => {
        let { step } = this.state;
        let state = this.props.store.getState();

        if (state % 2 === 0) {
            // 调用store的方法更新状态
            this.props.store.dispatch(actions.add(step))
        }
    }

    addIfAsync = () => {
        let { step } = this.state;

        this.timerId = setTimeout(() => {
            // 调用store的方法更新状态
            this.props.store.dispatch(actions.add(step))
        }, 1000);
    }

    componentWillUnmount() {
        clearTimeout(this.timerId);
    }

    handleChange = (e) => {
        let step = e.target.value;
        this.setState({ step });
    }

    render() {

        let { step } = this.state;
        let state = this.props.store.getState();

        return (
            <div>
                <p>click {state} times</p>
                <div>
                    <select value={step} onChange={this.handleChange}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                    &nbsp;
                    <button onClick={this.add}>+</button>&nbsp;
                    <button onClick={this.minus}>-</button>&nbsp;
                    <button onClick={this.addIfOdd}>increment if odd</button>&nbsp;
                    <button onClick={this.addIfAsync}>increment async</button>
                </div>
            </div>
        )
    }
}