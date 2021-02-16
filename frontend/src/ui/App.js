import {BrowserRouter} from 'react-router-dom'
import {Route, Switch} from 'react-router'
import {Home} from './Home'
import {FourOhFour} from './FourOhFour'
import React from 'react'
import {Account} from "./Account";
import {NavigationBar} from "./shared/components/NavigationBar";

export const App = () => (
    <>
        <BrowserRouter>
            <NavigationBar/>
            <Switch>
                <Route exact path='/account' component={Account}/>
                <Route exact path='/' component={Home}/>
                <Route component={FourOhFour}/>
            </Switch>
        </BrowserRouter>

    </>
)