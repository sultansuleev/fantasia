import React, {Component} from 'react';
import './footer.css';

import Sidebar from './sidebar';
import Copyright from './copyright';

export default class Footer extends Component {
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return false;
    }

    render() {
        return(
            <footer>
                <Sidebar/>
                <Copyright/>
            </footer>
        );
    }
}