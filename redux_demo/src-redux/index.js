import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {store} from './redux/store'

function render() {
    ReactDOM.render(<App store={store} />, document.getElementById('root'));
}

// 初始化渲染
render()

// 订阅监听（store中的状态变化了，就会自动调用进行页面重绘）
store.subscribe(() => {
    ReactDOM.render(<App store={store} />, document.getElementById('root'));
})

serviceWorker.unregister();
