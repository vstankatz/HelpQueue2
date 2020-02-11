import React from 'react';
import PropTypes from 'prop-types';

const minutesElapsed = (futureStamp, pastStamp) => {
    return Math.floor((futureStamp - pastStamp) / 60000);
};

function Ticket(props) {
    const layoutStyles = {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 4fr',
    };
    const locationStyles = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };
    const timeStyles = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'rgba(0, 0, 0, 0.5)',
    };

    return (
        <div style={layoutStyles}>
            <div style={locationStyles}>
                <p>{props.location}</p>
            </div>
            <div style={timeStyles}>
                <p>{minutesElapsed(new Date(), props.timestamp)}m</p>
            </div>
            <div sty>
                <p>{props.names}</p>
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
