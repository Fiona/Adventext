import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './home/Home';

function Layout()
{
    return (
        <Router>
            <Route exact path="/" component={Home} />
        </Router>
    );
}

export default Layout;