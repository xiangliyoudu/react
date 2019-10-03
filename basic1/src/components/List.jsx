import React from 'react';


class List extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        const { list } = this.props;
        let ul = (
            list.map((item, index) => {
                return <li key={index}>{item}</li>
            })
        );

        return (
            <div>
                <h2>add list: </h2>
                <ul>
                    {ul}
                </ul>
            </div>
        );
    }
}




export default List;