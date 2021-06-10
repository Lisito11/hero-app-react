import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { DcScreen } from '../components/dc/DcScreen'
import { HeroScreen } from '../components/heroes/HeroScreen'
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { Navbar } from '../components/ui/Navbar'
import { SearchScreen } from './../components/search/SearchScreen';

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />

            <div className="container mt-2">
                <Switch>
                    <Route exact={true} path="/marvel" component={MarvelScreen}/>

                    <Route exact={true} path="/hero/:heroeId" component={HeroScreen}/>

                    <Route exact={true} path="/dc" component={DcScreen}/>

                    <Route exact={true} path="/search" component={SearchScreen}/>

                    <Redirect to="/marvel" />

                </Switch>
            </div>

        </>
    )
}
