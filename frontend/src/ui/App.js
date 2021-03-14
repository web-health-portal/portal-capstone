import {BrowserRouter} from 'react-router-dom'
import {Route, Switch} from 'react-router'
import {Home} from './home/Home'
import {FourOhFour} from './FourOhFour'
import React from 'react'
import './shared/component.css'
import {Account} from "./account/Account";
import {NavigationBar} from "./shared/components/NavigationBar";
import {AboutUs} from "./about-us/AboutUsEnglish";
import {Footer} from "./shared/components/Footer";
import {SearchResults} from "./search-results/SearchResults";
import {Provider} from "react-redux";

export const App = (store) => (
        <>
            <Provider store={store}>
                <BrowserRouter>
                    <NavigationBar/>
                    <Switch>
                        <Route exact path='/search-results' component={SearchResults}/>
                        <Route exact path='/account' component={Account}/>
                        <Route exact path='/about-us' component={AboutUs}/>
                        <Route exact path='/' component={Home}/>
                        <Route component={FourOhFour}/>
                    </Switch>
                    <Footer/>
                </BrowserRouter>
            </Provider>
        </>
    )