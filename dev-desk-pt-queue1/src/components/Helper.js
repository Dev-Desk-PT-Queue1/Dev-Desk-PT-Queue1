import React, { Component } from 'react';
import {Assigned, Block} from '../helpers/StyledUser';
import Axios from 'axios';

class Helper extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() { //data that will be gotten from the 
        /*Axios.get(`backendapi.com/assigned?id=${helperiD}`)
            .then(res =>{
               this.setState({assinged: res, available: null}); 
            })
            .catch(err =>{
                console.log(err);
            })
        Axios.get(`backendapi.com/tickets?id=${helperiD}?number=5`)
            .then(res =>{
                this.setState({assinged: this.state.assigned, available: res});
            })
            .catch(err =>{
                console.log(err);
            })*/
    }

    renderAssigned(){
        return this.props.state.assigned.map(values => (
            <Assigned>
                <Block> <b>Name:</b> {values.name} 
                    <ul>
                        <li> <b>Category:</b> {values.category} </li>
                        <li> <b>Description:</b> {values.description} </li>
                        <li> <b>Title:</b> {values.title} </li>
                        <ul> <b>Tries:</b> 
                            {values.tried.map(answer => 
                                <li> {answer} </li>
                            )}
                        </ul>
                    </ul>
                    <button onClick={() => this.markAsDone(values)}> Mark As Done </button>
                </Block>
        </Assigned>
       ))
    }

    addTicket(ticket){
        let newAvailable = this.props.state.available.filter(obj => !(ticket === obj))
        let newAssigned = this.props.state.assigned;
        newAssigned.push(ticket);
        this.props.setState({assigned: newAssigned, available: newAvailable })
         
    }

    markAsDone(ticket){
        let newAssigned = this.props.state.assigned.filter(obj => !(ticket === obj))
        this.props.setState({assigned: newAssigned})
    }

    renderAvailable(){
        return this.props.state.available.map(values => (
            <Assigned>
                <Block> <b>Name:</b> {values.name} 
                    <ul>
                        <li> <b>Category:</b> {values.category} </li>
                        <li> <b>Description:</b> {values.description} </li>
                        <li> <b>Title:</b> {values.title} </li>
                        <ul> <b>Tries:</b> 
                            {values.tried.map(answer => 
                                <li> {answer} </li>
                            )}
                        </ul>
                    </ul>
                    <button onClick={() => this.addTicket(values)}> Add Ticket </button>
                </Block>
            </Assigned>
        ))
    }

    refreshAvailable(){
        /*Axios.get(`backendapi.com/tickets?id=${helperiD}?number=5`)
            .then(res =>{
                this.setState({assinged: this.state.assigned, available: res});
            })
            .catch(err =>{
                console.log(err);
            })*/
    }

    render() {
        return (
            <>
                <div className="tickets">
                    <div className="assignedTickets">
                        {this.renderAssigned()}
                    </div>
                    <div className="availableTickets">
                        {this.renderAvailable()}
                    </div>
                </div>
                <button onClick={this.refreshAvailable()}> Get New Tickets! </button>
            </>
        );
    }
}

export default Helper;