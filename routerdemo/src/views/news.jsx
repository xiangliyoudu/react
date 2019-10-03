import React from 'react';

export default class News extends React.Component {

    state = {
        newsArr: [
            'news001', 'news002', 'news003'
        ]
    }

    render() {
        let {newsArr} = this.state;

        return (
            <div>news 组件内容
                <ul>
                    {
                        newsArr.map((news, index) => {
                            return <li key={index}>{news}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}