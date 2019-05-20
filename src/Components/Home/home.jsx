import React, {Component, Suspense, lazy} from 'react';
import First from "./FirstContainer";
import './home.css';

const Second = lazy(() => import("./SecondContainer"));
const Third = lazy(() => import("./ThirdContainer"));
const Fourth = lazy(() => import("./FourthContainer"));



export default class Home extends Component {
    render() {
        return(
            <main>
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

