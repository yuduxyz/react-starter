import React from 'react';
import 'whatwg-fetch';
import '../styles/index.scss';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ''
        };
    }


    render() {
        return (
            <main className="clearfix">
                <p>Hello React!</p>
            </main>
        )
    }
}
