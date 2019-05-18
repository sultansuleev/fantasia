import React, {Component} from 'react';

import Sidebar from './sidebar';
import Copyright from './copyright';

export default class Footer extends Component {
    render() {
        return(
            <footer>
                <Sidebar/>
                <Copyright/>
            </footer>
        );
    }
}