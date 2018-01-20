import React from "react";
import {Route, IndexRoute} from "react-router";
import App from "./components/App";
import HomePage from "./components/Home/Homepage";
import Aboutpage from "./components/about/Aboutpage";
import CoursesPage from "./components/course/CoursePage";

export default (
    <Route path="/" component = {App}>
        <IndexRoute component={HomePage}/>
        <Route path="courses" component={CoursesPage} />
        <Route path="about" component={Aboutpage}/>
    </Route>
);