import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    const styles = {
        backgroundColor: '#e03636',
        fontFamily: 'Roboto',
        color: 'white',
        textAlign: 'center',
        margin: '0',
        height: '8vh',
        fontSize: '2vh',
    };
    return (
        <div style={styles}>
            <h1 style={{ margin: '0', fontSize: '4vh' }}>Queue</h1>
            <Link to="/" style={{ color: 'white' }}>
                Home
            </Link>{' '}
            |{' '}
            <Link to="/newticket" style={{ color: 'white' }}>
                Create Ticket
            </Link>
        </div>
    );
}
