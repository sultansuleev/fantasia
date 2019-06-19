import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './header.css';


export default class Header extends Component {
    componentDidMount() {
        const burger = document.querySelector(".burger");
        const navCon = document.querySelector("nav");
        const nav = document.querySelector(".menu");
        const navLinks = document.querySelectorAll(".menu li");

        burger.addEventListener('click', () => {
            burger.classList.toggle("toggle");
            burger.classList.toggle("burger-op");
            navCon.classList.toggle("nav-active");
            nav.classList.toggle("menu-active");

            navLinks.forEach((link, index) => {
                if(link.style.animation) {
                    link.style.animation = '';
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forward ${index / 7 + 1.5}s`;
                }
            })
        })
    }

    scrolled = () => {
        window.onscroll = ()=> {
            let header = document.getElementById("header");
            let logo = document.getElementById("logo");
            let burger = document.querySelectorAll(".burger div");
            const icon = document.querySelectorAll("#soc-icon");
            if(window.pageYOffset > 0 || document.documentElement.scrollTop > 0){
                header.setAttribute("style", "background: rgba(255, 255, 255, 0.7); color: #000;");
                icon.forEach((icon)=>{icon.setAttribute("style", "filter: invert(0);")});
                logo.setAttribute("style", "border-bottom: 1px solid #000;");
                if(burger){
                    burger.forEach((layer, index) => {
                        layer.style.background = "#000000";
                    })
                }
            } else {
                header.setAttribute("style", "background: transparent; color: #fff;");
                icon.forEach((icon)=>{icon.setAttribute("style", "filter: invert(100%);")});
                logo.setAttribute("style", "border-bottom: 1px solid #fff;");
                if(burger){
                    burger.forEach((layer, index) => {
                        layer.style.background = "#ffffff";
                    })
                }
            }
        };
    };

    render() {
        return(
            <header id="header" onLoad={this.scrolled}>
                <div className="head-body">
                    <div className="logo">
                        <h1 id="logo">fantasía</h1>
                    </div>
                    <nav>
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
                            <li className="menu-soc">
                                <ul>
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
                            </li>
                        </ul>
                    </nav>
                    <div className="burger">
                        <div className="line-1"></div>
                        <div className="line-2"></div>
                        <div className="line-3"></div>
                    </div>
                </div>
            </header>
        );
    }
}
