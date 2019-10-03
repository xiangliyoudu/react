import React from 'react';

class FormCollect extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            password: '',
        };

        this.formSubmit = this.formSubmit.bind(this);
        this.handleName = this.handleName.bind(this);
    }

    handleName(e) {
        let val = e.target.value;
        this.setState({
            name: val
        });
    }

    formSubmit(e) {
        // 阻止默认行为
        e.preventDefault();
        let name = this.state.name;
        let pwd = this.pwdInput.value;
        console.log(`form value: ${name}, ${pwd} `);

    }

    render() {
        return (
            <div>
                <form onSubmit={this.formSubmit}>
                    <label htmlFor="">name:
                        <input type="text" value={this.state.name} onChange={this.handleName}/>
                    </label><br/>
                    <label>password:
                        <input type="password" ref={input => this.pwdInput = input}/>
                    </label><br/>
                    <input type="submit" name="submit"/>

                </form>
            </div>
        );
    }
}

export default FormCollect;