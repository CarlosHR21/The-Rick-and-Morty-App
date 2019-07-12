import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import DataContainer from './containers/DataContainer';

const Routes = () => {
    return(
        <Switch>
            <Route exact path = '/' component = {Home} />
            <Route path = '/Menu' component = {DataContainer} />
        </Switch>
    );
}

export default Routes;