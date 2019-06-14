import React, {lazy, Suspense} from 'react';
import {Link} from 'react-router-dom';
const IMG = lazy(() => import('../asset/image'));

const FourthContainer = () => (
    <div className="fr-content">
        <div className="fr-body">
            <div className="text">
                <div className="title">
                    <h2 className="unique"><span className="first-letter">C</span>ulinary</h2>
                    <h1>art</h1>
                </div>
                <p className="separate-symb">&#9827;</p>
                <p className="text-ref-gap">
                    For those with pure food indulgence in mind, come next door and sate
                    your desires with our ever changing internationally and seasonally
                    inspired small plates.  We love food, lots of different food, just like you.
                </p>
                <p><Link className="reference" to="/">VIEW THE FULL MENU</Link></p>
            </div>
            <div className="media media-two">
                <Suspense fallback={<div>Loading...</div>}>
                    <IMG imageDir="/assets/images/vertical/8-small.jpg"/>
                </Suspense>
                <Suspense fallback={<div>Loading...</div>}>
                    <IMG imageDir="/assets/images/vertical/9-small.jpg"/>
                </Suspense>
            </div>
        </div>
    </div>
);

export default FourthContainer;