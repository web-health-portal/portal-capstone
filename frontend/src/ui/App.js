import {BrowserRouter} from 'react-router-dom'
import {Route, Switch} from 'react-router'
import {Home} from './home/Home'
// import {HomeSpanish} from "./home/HomeSpanish";
import {FourOhFour} from './FourOhFour'
import React from 'react'
import './shared/component.css'

import {Account} from "./account/Account";
// import {AccountSpanish} from "./account/AccountSpanish";
import {NavigationBar} from "./shared/components/NavigationBar";

import {AboutUs} from "./about-us/AboutUsEnglish";
import {AboutUsSpanish} from "./about-us/AboutUsSpanish";
import {Footer} from "./shared/components/Footer";
import {FooterSpanish} from "./shared/components-spanish/FooterSpanish";
import {SearchResults} from "./search-results/SearchResults";
import {LogInModal} from "./shared/components/LogInModal";
import {SignUpModal} from "./shared/components/SignUpModal";
// import {SignUpModalSpanish} from "./shared/components-spanish/SignUpModalSpanish";



export const App = () => (
    <>
        <BrowserRouter>
            <NavigationBar/>
            <Switch>
                <Route exact path='/log-in' component={LogInModal}/>
                <Route exact path='/sign-up' component={SignUpModal}/>
                <Route exact path='/search-results' component={SearchResults}/>
                <Route exact path='/account' component={Account}/>
                <Route exact path='/about-us' component={AboutUs}/>
                <Route exact path='/' component={Home}/>
                {/*<Route exact path='/' component={HomeSpanish}/>*/}
                <Route component={FourOhFour}/>
            </Switch>
            <Footer/>
            {/*<FooterSpanish/>*/}
        </BrowserRouter>

    </>
)