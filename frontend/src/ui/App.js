import { BrowserRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router'
import { Home } from './Home'
import { FourOhFour } from './FourOhFour'
import React from 'react'
import {AboutUs} from "./AboutUsEnglish";
import {Footer} from "./shared/components/Footer";



export const App = () => (
    <>
        <BrowserRouter>
            <Switch>
                <Route exact path='/about-us' component={AboutUs} />
                <Route exact path='/' component={Home} />
                <Route component={FourOhFour} />
            </Switch>
            <Footer/>
        </BrowserRouter>

    </>
)