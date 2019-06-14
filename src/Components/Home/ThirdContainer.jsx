import React, {lazy, Suspense} from 'react';
import {Link} from 'react-router-dom';
const IMG = lazy(() => import('../asset/image'));

const ThirdContainer = () => (
    <div className="th-content">
        <div className="t-body">
            <div className="up-t">
                <div className="media media-four">
                    <Suspense fallback={<div>Loading...</div>}>
                        <IMG imageDir="/assets/images/media-1-small.jpg"/>
                    </Suspense>
                    <Suspense fallback={<div>Loading...</div>}>
                        <IMG imageDir="/assets/images/media-2-small.jpg"/>
                    </Suspense>
                    <Suspense fallback={<div>Loading...</div>}>
                        <IMG imageDir="/assets/images/media-3-small.jpg"/>
                    </Suspense>
                    <Suspense fallback={<div>Loading...</div>}>
                        <IMG imageDir="/assets/images/media-4-small.jpg"/>
                    </Suspense>
                </div>

                <div className="text">
                    <div className="title">
                        <h2 className="unique"><span className="first-letter">D</span>iscover</h2>
                        <h1>Our menu</h1>
                    </div>
                    <p className="separate-symb">&#9827;</p>
                    <p className="text-ref-gap">
                        For those with pure food indulgence in mind, come next door and sate
                        your desires with our ever changing internationally and seasonally
                        inspired small plates.  We love food, lots of different food, just like you.
                    </p>
                    <p><Link className="reference" to="/">VIEW THE FULL MENU</Link></p>
                </div>
            </div>
        </div>

        <div className="down-t">
            <div id="scrollPage2" className="down-s-content">
                <h2 className="unique"><span className="first-letter">T</span>he ideal</h2>
                <h1>mixture</h1>
            </div>
        </div>
    </div>
);

export default ThirdContainer;