import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import NewTicketControl from './NewTicketControl';

import Header from './Header';
import TicketList from './TicketList';
import NewTicketForm from './NewTicketForm';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            masterTicketList: [],
        };
        this.handleAddingNewTicket = this.handleAddingNewTicket.bind(this);
    }
    handleAddingNewTicket(newTicket) {
        this.setState({
            masterTicketList: [...this.state.masterTicketList, newTicket],
        });
        //This is how the program says you should push to the new array, its not very clean.
        // var newMasterTicketList = this.state.masterTicketList.slice();
        // newMasterTicketList.push(newTicket);
        // this.setState({ masterTicketList: newMasterTicketList });
    }

    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route
                        exact
                        path="/"
                        render={() => (
                            <TicketList
                                ticketList={this.state.masterTicketList}
                            />
                        )}
                    />
                    <Route
                        path="/newticket"
                        render={() => (
                            <NewTicketControl
                                onNewTicketCreation={this.handleAddingNewTicket}
                            />
                        )}
                    />
                </Switch>
            </div>
        );
    }
}
