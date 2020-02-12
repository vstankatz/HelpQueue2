import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import Header from './Header';
import TicketList from './TicketList';
import NewTicketForm from './NewTicketForm';

export default function App() {
    return (
        <Router>
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={TicketList} />
                    <Route exact path="/newticket" component={NewTicketForm} />
                </Switch>
            </div>
        </Router>
    );
}
