import React from 'react';
import PropTypes from 'prop-types';

function NewTicketForm(props) {
    let _names,
        _location,
        _issue = null;
    const handleFormSubmission = e => {
        e.preventDefault();
        props.onNewTicketCreation({
            names: _names.value,
            location: _location.value,
            issue: _issue.value,
            timestamp: new Date(),
        });
        _names.value = '';
        _location.value = '';
        _issue.value = '';
    };
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

NewTicketForm.propTypes = {
    onNewTicketCreation: PropTypes.func,
};

export default NewTicketForm;
