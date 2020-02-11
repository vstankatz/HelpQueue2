import React from 'react';
import Header from './Header';
import TicketList from './TicketList';

function App() {
    return (
        <div>
            <header>
                <Header />
            </header>
            <main>
                <TicketList />
            </main>
        </div>
    );
}

export default App;
