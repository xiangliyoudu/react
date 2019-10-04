import React from 'react';
import './counter.css';
import PropTypes from 'prop-types'


export default class Counter extends React.Component {

  static propTypes = {
    count: PropTypes.number.isRequired,
    add: PropTypes.func.isRequired,
    minus: PropTypes.func.isRequired,
    addAsync: PropTypes.func.isRequired
  }

  state = {
    step: 1
  }

  add = () => {
    let { step } = this.state;
    // 调用store的方法更新状态
    this.props.add(step * 1)
  }

  minus = () => {
    let { step } = this.state;
    // 调用store的方法更新状态
    this.props.minus(step * 1)
  }

  addIfOdd = () => {
    let { step } = this.state;
    let state = this.props.count;

    if (state % 2 === 0) {
      // 调用store的方法更新状态
      this.props.add(step * 1)
    }
  }

  addIfAsync = () => {
    let { step } = this.state;
    this.props.addAsync(step * 1);
  }


  handleChange = (e) => {
    let step = e.target.value;
    this.setState({ step });
  }

  render() {

    let { step } = this.state;
    let state = this.props.count;

    return (
      <div className='App'>
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




