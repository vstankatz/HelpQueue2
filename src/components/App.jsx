import React from 'react';
import Header from './Header';
import TicketList from './TicketList';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function App() {
    return (
        <Router>
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={TicketList} />
                </Switch>
            </div>
        </Router>
    );
}
