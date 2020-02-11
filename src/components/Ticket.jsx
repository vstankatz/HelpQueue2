import React from 'react';
import PropTypes from 'prop-types';

const minutesElapsed = (futureStamp, pastStamp) => {
    return Math.floor((futureStamp - pastStamp) / 60000);
};

function Ticket(props) {
    const layoutStyles = {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 2fr',
    };

    return (
        <div style={layoutStyles}>
            <div>
                <p>{props.location}</p>
            </div>
            <div>
                <p>{minutesElapsed(new Date(), props.timestamp)}m</p>
            </div>
            <div>
                <h3>{props.names}</h3>
            </div>
        </div>
    );
}

Ticket.propTypes = {
    location: PropTypes.string.isRequired,
    timestamp: PropTypes.instanceOf(Date).isRequired,
    names: PropTypes.string.isRequired,
    issue: PropTypes.string,
};

export default Ticket;
