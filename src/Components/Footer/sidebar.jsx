import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Sidebar extends Component {
    render() {
        return(
            <div className="sidebar">
                <div className="sidebar-content">
                    <h4 className="footer-content">about fantasia</h4>
                    <p className="separate-symb">&#9827;</p>

                    <p>
                        Fantasia ist a Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit. Asperiores iure omnis quam tenetur voluptas.
                        Aspernatur corporis eaque, et exercitationem explicabo ipsa itaque, nam
                        omnis perspiciatis quaerat repellat totam voluptas voluptatibus.
                    </p>

                    <div className="widget">
                        <div className="sub-widget follow">
                            <h4 className="footer-content">
                                follow along
                            </h4>
                            <ul className="widget-icon">
                                <li>
                                    <Link to="#">
                                        <img src="/assets/social/svg/twitter.svg" alt=""/>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        <img src="/assets/social/svg/facebook.svg" alt=""/>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        <img src="/assets/social/svg/pinterest.svg" alt=""/>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        <img src="/assets/social/svg/linkedIn.svg" alt=""/>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        <img src="/assets/social/svg/instagram.svg" alt=""/>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="sub-widget newsletter">
                            <h4 className="footer-content">
                                newsletter
                            </h4>
                            <form className="email">
                                <input className="email-input" type="text" placeholder="Your email address..."/>
                                <input className="email-btn" type="submit" value="SUBMIT"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}