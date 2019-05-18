import React, {Component} from "react";
import {Link} from 'react-router-dom';

export default class SecondContainer extends Component {
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return false;
    }

    render(){
        return(
            <div className="s-content" >
                <div className="s-body">
                    <div className="up-s">
                        <div className="text">
                            <div className="title">
                                <h2 className="unique"><span className="first-letter">D</span>iscover</h2>
                                <h1>Our tale</h1>
                            </div>
                            <p className="separate-symb">&#9827;</p>
                            <p className="text-ref-gap">
                                Fantasíe is a restaurant, bar and coffee roastery that gives you a
                                sense of satisfaction through magic in their products
                            </p>
                            <p><Link className="reference" to="/">ABOUT US</Link></p>
                        </div>

                        <div className="media media-two">
                            <img src="/assets/images/vertical/1.jpg" alt=""/>
                            <img src="/assets/images/vertical/2.jpg" alt=""/>
                        </div>
                    </div>
                </div>
                <div className="down-s">
                    <div id="scrollPage1" className="down-s-content">
                        <h2 className="unique"><span className="first-letter">f</span>ascinating</h2>
                        <h1>story</h1>
                    </div>
                </div>
            </div>
        );
    }
}