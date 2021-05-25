import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class HomePage extends Component {
    render() {
        return (
            <div>
                <h1>Welcome to Getaways!</h1>
                <Link to='/places'>Checkout these sweet getaways!</Link>
            </div>
        )
    }
}

