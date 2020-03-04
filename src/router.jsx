import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import News from '../src/components/maincontainer/news/news';
import Homepage from './components/maincontainer/homepage/homepage';


const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Homepage} />
                <Route exact path="/news" component={News} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router;