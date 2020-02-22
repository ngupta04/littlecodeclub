import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { ROOT, HOME_PAGE } from '../common/Constants';
import Landing from './Landing';

const Home = () => {
    return(
        <BrowserRouter basename={ROOT}>
            <Switch>
                <Redirect exact path={ROOT} to={HOME_PAGE}/>
                <Route path={HOME_PAGE} component={Landing}></Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Home;