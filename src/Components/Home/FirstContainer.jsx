import React, {Component} from "react";
import {Link} from 'react-router-dom';

export default class FirstContainer extends Component {
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return false;
    }

    render(){
        return(
            <div className="f-content">
                <div className="content-body">
                    <h2 className="unique"><span className="first-letter">W</span>elcome</h2>
                    <h1>FANTASÍA</h1>
                    <div className="separator">
                        <div className="line line-left"/>
                        <p>&#9827;</p>
                        <div className="line line-right"/>
                    </div>
                    <h2>Ready for daydreamers</h2>
                    <Link className="from-home-reserv" to='/'>EXPLORE</Link>
                </div>
            </div>
        );
    }
}