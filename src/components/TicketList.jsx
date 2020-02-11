import React from 'react';
import Ticket from './Ticket';

const masterTicketList = [
    {
        names: 'Thato and Haley',
        timestamp: new Date(2020, 1, 11, 10, 45),
        location: '3A',
        issue: "Firebase won't save record. Halp.",
    },
    {
        names: 'Sleater and Kinney',
        timestamp: new Date(2020, 1, 11, 10, 42),
        location: '4B',
        issue: 'Fox image not displaying on page, can only see duck?',
    },
    {
        names: 'Imani & Jacob',
        timestamp: new Date(2020, 1, 11, 10, 35),
        location: '9F',
        issue: 'Donkey picture not displaying on hover in Zoology app. :(',
    },
];

function TicketList() {
    return (
        <div>
            {masterTicketList.map((ticket, index) => (
                <Ticket
                    names={ticket.names}
                    timestamp={ticket.timestamp}
                    location={ticket.location}
                    issue={ticket.issue}
                    key={index}
                />
            ))}
        </div>
    );
}

export default TicketList;
