import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import SwapiService from '../../services/swapi-service';
import './app.css';
import ErrorBoundary from '../error-boundary/error-boundary';
import {
    PeoplePage,
    PlanetsPage,
    StarshipsPage
} from '../pages';
import { SwapiServiceProvider } from '../swapi-service-context';
import {BrowserRouter as Router, Route} from 'react-router-dom';

export default class App extends Component {

    swapiService = new SwapiService();

    render() {

        return (
            <ErrorBoundary>
                <SwapiServiceProvider value={this.swapiService}>
                    <Router>
                    <div className='container'>
                        <Header />
                        <RandomPlanet />
                        <Route path='/' render={() => <h2>Welcome to StarDB</h2>} exact/>
                        <Route path='/people' component={PeoplePage} />
                        <Route path='/planets' component={PlanetsPage} />
                        <Route path='/starships' component={StarshipsPage} />
                    </div>
                    </Router>
                </SwapiServiceProvider>
            </ErrorBoundary>
        )
    }

}