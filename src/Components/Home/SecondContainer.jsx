import React, {lazy, Suspense} from "react";
import {Link} from 'react-router-dom';
const IMG = lazy(() => import('../asset/image'));

const SecondContainer = () => (
    <div className="s-content" id="scroll-Obj">
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
                    <Suspense fallback={<div>Loading...</div>}>
                        <IMG imageDir="/assets/images/vertical/1-small.jpg"/>
                    </Suspense>
                    <Suspense fallback={<div>Loading...</div>}>
                        <IMG imageDir="/assets/images/vertical/2-small.jpg"/>
                    </Suspense>
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

export default SecondContainer;