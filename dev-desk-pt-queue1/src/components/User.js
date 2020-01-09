import React, { Component } from 'react';
import NewTicketForm from './NewTicketForm';

class User extends Component {
    constructor(props) {
        super(props);

        this.state = {
            createTicket: false
        }
    }

    createTicket(){
        return <NewTicketForm/>
    }

    submitTicket(){

    }

    render() {
        return(
            <div>
                <button onClick={() => this.setState({ createTicket: true})}>Create Ticket</button>
                {this.state.createTicket ? this.createTicket() : null}
            </div>
        )
    }
}

export default User;