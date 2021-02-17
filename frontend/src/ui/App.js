import {BrowserRouter} from 'react-router-dom'
import {Route, Switch} from 'react-router'
import {Home} from './home/Home'
import {FourOhFour} from './FourOhFour'
import React from 'react'
import './shared/components/component.css'

import {Account} from "./account/Account";
import {NavigationBar} from "./shared/components/NavigationBar";

import {AboutUs} from "./about-us/AboutUsEnglish";
import {Footer} from "./shared/components/Footer";


export const App = () => (
    <>
        <BrowserRouter>
            <NavigationBar/>
            <Switch>
                <Route exact path='/account' component={Account}/>
                <Route exact path='/about-us' component={AboutUs} />
                <Route exact path='/' component={Home} />
                <Route component={FourOhFour} />
            </Switch>
            <Footer/>
        </BrowserRouter>

    </>
)