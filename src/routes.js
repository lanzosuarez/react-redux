import React from 'react';
import ReactRouter, { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './Components/App';
import HomePage from './Components/home/HomePage';
import AboutPage from './Components/about/AboutPage';
import CoursesPage from './Components/course/CoursesPage';


const routes = (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={ HomePage }/>
            <Route path="about" component={AboutPage} />
            <Route path="courses" component={CoursesPage} />
        </Route>
    </Router>
);

export default routes;
