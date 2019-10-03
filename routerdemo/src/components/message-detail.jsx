import React from 'react';

const allMessages = [
    { id: 1, title: 'message001', content: 'i love you' },
    { id: 2, title: 'message002', content: 'i like you too' },
    { id: 4, title: 'message004', content: 'you like me ???' }
]

export default class MessageDetail extends React.Component {

    render() {
        // 获取路由参数： id
        let { id } = this.props.match.params;
        // 查找 message
        let message = allMessages.find((m) => m.id == id);

        return (
            <div>
                <h3>message detail ...</h3>
                <ul>
                    <li>id: {message.id}</li>
                    <li>title: {message.title}</li>
                    <li>content: {message.content}</li>
                </ul>
            </div>
        )
    }
}