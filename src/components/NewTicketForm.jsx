import React from 'react';

function NewTicketForm() {
    const handleFormSubmission = e => {
        e.preventDefault();
        _names.value = '';
        _location.value = '';
        _issue.value = '';
    };
    let _names,
        _location,
        _issue = null;
    return (
        <div>
            <form onSubmit={handleFormSubmission}>
                <input
                    type="text"
                    placeholder="Pair Names"
                    ref={input => {
                        _names = input;
                    }}
                />
                <input
                    type="text"
                    placeholder="Location"
                    ref={input => {
                        _location = input;
                    }}
                />
                <textarea
                    placeholder="Describe your issue."
                    ref={textarea => {
                        _issue = textarea;
                    }}
                />
                <button type="submit">Help!</button>
            </form>
        </div>
    );
}

export default NewTicketForm;
