import React, {Component, Suspense, lazy} from 'react';
import {Helmet} from 'react-helmet';
import './home.css';
import First from "./FirstContainer";


const Second = lazy(() => import("./SecondContainer"));
const Third = lazy(() => import("./ThirdContainer"));
const Fourth = lazy(() => import("./FourthContainer"));



export default class Home extends Component {
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return false;
    }

    render() {
        return(
            <main>
                <Helmet>
                    <title>Home</title>
                </Helmet>
                <First/>
                <Suspense fallback={<div>Loading...</div>}>
                    <Second/>
                </Suspense>
                <Suspense fallback={<div>Loading...</div>}>
                    <Third/>
                </Suspense>
                <Suspense fallback={<div>Loading...</div>}>
                    <Fourth/>
                </Suspense>
            </main>
        );
    }
}

