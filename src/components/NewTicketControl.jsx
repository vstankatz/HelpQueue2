import React from 'react';
import ConfirmationQuestions from './ConfirmationQuestions';
import NewTicketForm from './NewTicketForm';

class NewTicketControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formVisibleOnPage: false,
        };
        // this.handleClick = this.handleClick.bind(this);
    }
    //
    // handleClick() {
    //     this.setState({ formVisibleOnPage: true });
    //     console.log(
    //         'formVisibleOnPage is currently set to:' +
    //             this.state.formVisibleOnPage
    //     );
    // }
    render() {
        let currentlyVisibleContent = null;
        if (this.state.formVisibleOnPage) {
            currentlyVisibleContent = <NewTicketForm />;
        } else {
            currentlyVisibleContent = <ConfirmationQuestions />;
        }
        return (
            <div>{currentlyVisibleContent}</div>
            // <div>
            //     <p>This is the NewTicketControl component!</p>
            //     <strong onClick={this.handleClick}>
            //         Click me to change my state!
            //     </strong>
            // </div>
        );
    }
}

export default NewTicketControl;