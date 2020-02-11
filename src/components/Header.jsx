import React from 'react';

function Header() {
    const styles = {
        backgroundColor: '#e03636',
        fontFamily: 'sans-serif',
        color: 'white',
        textAlign: 'center',
        margin: '0',
        height: '8vh',
        fontSize: '6vh',
        lineHeight: '8vh',
    };
    return <h1 style={styles}>Queue</h1>;
}

export default Header;
