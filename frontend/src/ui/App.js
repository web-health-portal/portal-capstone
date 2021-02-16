import {BrowserRouter} from 'react-router-dom'
import {Route, Switch} from 'react-router'
import {Home} from './Home'
import {FourOhFour} from './FourOhFour'
import React from 'react'
<<<<<<< HEAD
import {Account} from "./Account";
import {NavigationBar} from "./shared/components/NavigationBar";
=======
import {AboutUs} from "./AboutUsEnglish";


>>>>>>> about-us-english

export const App = () => (
    <>
        <BrowserRouter>
            <NavigationBar/>
            <Switch>
<<<<<<< HEAD
                <Route exact path='/account' component={Account}/>
                <Route exact path='/' component={Home}/>
                <Route component={FourOhFour}/>
=======
                <Route exact path='/about-us' component={AboutUs} />
                <Route exact path='/' component={Home} />
                <Route component={FourOhFour} />
>>>>>>> about-us-english
            </Switch>
        </BrowserRouter>

    </>
)