import React from 'react';
import ReactDOM from 'react-dom';

class Life extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            opacity: 1,
            text: 'this is a react text ...',
        };

        this.handleHide = this.handleHide.bind(this);
    }


    componentDidMount() {
        // 启动定时器
        this.timerId = setInterval(() => {
            console.log('interval ...');
            let opacity = this.state.opacity - 0.1;
            if(opacity <= 0) {
                opacity = 1;
            }
            this.setState({
                opacity
            });
        }, 200);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    handleHide(e) {
        ReactDOM.unmountComponentAtNode(document.getElementById('root'));
    }

    render() {

        let {opacity, text} = this.state;

        return(
            <div>
                <h2 style={{opacity: opacity}}>{text}</h2>
                <button onClick={this.handleHide}>hide me</button>
            </div>
        );
    }

}

export default Life;

