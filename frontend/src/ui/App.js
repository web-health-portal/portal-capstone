import {BrowserRouter} from 'react-router-dom'
import {Route, Switch} from 'react-router'
import {Home} from './home/Home'
import {FourOhFour} from './FourOhFour'
import React from 'react'
import './shared/component.css'
import {Account} from "./account/Account";
import {NavigationBar} from "./shared/components/navigation-bar/NavigationBar";
import {AboutUs} from "./about-us/AboutUs";
import {Footer} from "./shared/components/footer/Footer";
import {SearchResults} from "./search-results/SearchResults";
import {Provider} from "react-redux";
import {PrivateRoute} from "./shared/components/PrivateRoute";

export const App = (store) => {
    return (
        <>
            <Provider store={store}>
                <BrowserRouter>
                    <NavigationBar/>
                    <Switch>
                        <Route exact path='/search-results' component={SearchResults}/>
                        <PrivateRoute path='/account'>
                            <Account/>
                        </PrivateRoute>
                        <Route exact path='/about-us' component={AboutUs}/>
                        <Route exact path='/' component={Home}/>
                        <Route component={FourOhFour}/>
                    </Switch>
                    <Footer/>
                </BrowserRouter>
            </Provider>
        </>
    )
}
