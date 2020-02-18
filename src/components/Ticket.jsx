import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const minutesElapsed = pastStamp => {
    return `${Math.floor((new Date() - pastStamp) / 60000)}m`;
};
const secondsElapsed = pastStamp => {
    return `${Math.floor((new Date() - pastStamp) / 5000) * 5}s`;
};

const styles = {
    layout: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 4fr',
    },
    location: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    time: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'rgba(0, 0, 0, 0.5)',
    },
};

function Ticket(props) {
    let [timeElapsed, setTimeElapsed] = useState('0s');
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeElapsed(secondsElapsed(props.timestamp));
        }, 5000);
        setTimeout(() => {
            clearInterval(timer);
            setTimeElapsed(minutesElapsed(props.timestamp));
            setInterval(() => {
                setTimeElapsed(minutesElapsed(props.timestamp));
            }, 60000);
        }, 60000);
    }, []);

    return (
        <div style={styles.layout}>
            <div style={styles.location}>
                <p>{props.location}</p>
            </div>
            <div style={styles.time}>
                <p>{timeElapsed}</p>
            </div>
            <div>
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
