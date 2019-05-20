import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './header.css';

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

export default class Header extends Component {
    scrolled = () => {
        window.onscroll = ()=> {
            let header = document.getElementById("header");
            let logo = document.getElementById("logo");
            const icon = document.querySelectorAll("#soc-icon");
            if(window.pageYOffset > 0 || document.documentElement.scrollTop > 0){
                header.setAttribute("style", "background: rgba(255, 255, 255, 0.7); color: #000;");
                icon.forEach((icon)=>{icon.setAttribute("style", "filter: invert(0);")});
                logo.setAttribute("style", "border-bottom: 1px solid #000;");
            } else {
                header.setAttribute("style", "background: transparent; color: #fff;");
                icon.forEach((icon)=>{icon.setAttribute("style", "filter: invert(100%);")});
                logo.setAttribute("style", "border-bottom: 1px solid #fff;");
            }
        };
    };

    render() {
        return(
            <header id="header" onLoad={this.scrolled()}>
                <div className="head-body">
                    <div className="logo">
                        <h1 id="logo">fantasía</h1>
                    </div>
                    <div className="h-content">
                        <ul className="menu">
                            <li>
                                <Link to="#">Home</Link>
                            </li>
                            <li>
                                <Link to="#">Reservation</Link>
                            </li>
                            <li>
                                <Link to="#">Menu</Link>
                            </li>
                            <li>
                                <Link to="#">Blog</Link>
                            </li>
                            <li>
                                <Link to="#">Contact</Link>
                            </li>
                            <li>
                                <Link to="#"><img id="soc-icon" src="/assets/social/svg/twitter.svg" alt=""/></Link>
                            </li>
                            <li>
                                <Link to="#"><img id="soc-icon" src="/assets/social/svg/facebook.svg" alt=""/></Link>
                            </li>
                            <li>
                                <Link to="#"><img id="soc-icon" src="/assets/social/svg/instagram.svg" alt=""/></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        );
    }
}