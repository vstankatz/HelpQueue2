import React from 'react';
import Ticket from './Ticket';
import PropTypes from 'prop-types';

function TicketList(props) {
    return (
        <div>
            {props.ticketList.map((ticket, index) => {
                return <Ticket {...ticket} key={index} />;
                //{...} is a spread operator
            })}
        </div>
    );
}

TicketList.propTypes = {
    ticketList: PropTypes.array,
};

export default TicketList;
