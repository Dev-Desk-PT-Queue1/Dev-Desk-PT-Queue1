import React, { Component } from 'react';
import Axios from 'axios';

class Helper extends Component {
    constructor(props) {
        super(props);
        this.state = { assigned: [
            {
                catgeory: 'react',
                description: 'dsad',
                name: 'nate',
                title: 'react',
                tried: ['Debugging', 'Throwing head against wall'],
                assigned: 'somehash'
            },
            {
                catgeory: 'react',
                description: 'dsad',
                name: 'John',
                title: 'react',
                tried: ['Debugging', 'Throwing head against wall'],
                assigned: 'somehash'
            },
            {
                catgeory: 'react',
                description: 'dsad',
                name: 'Jeff',
                title: 'react',
                tried: ['Debugging', 'Throwing head against wall'],
                assigned: 'somehash'
            }
        ],
            available: [
                {
                    catgeory: 'react',
                    description: 'dsad',
                    name: 'sam',
                    title: 'react',
                    tried: ['Debugging', 'Throwing head against wall'],
                    id: 6
                },
                {
                    catgeory: 'react',
                    description: 'dsad',
                    name: 'katie',
                    title: 'react',
                    tried: ['Debugging', 'Throwing head against wall'],
                    id: 7
                },
                {
                    catgeory: 'react',
                    description: 'dsad',
                    name: 'mark',
                    title: 'react',
                    tried: ['Debugging', 'Throwing head against wall'],
                    id: 8
                },
                {
                    catgeory: 'react',
                    description: 'dsad',
                    name: 'ben',
                    title: 'react',
                    tried: ['Debugging', 'Throwing head against wall'],
                    id: 9
                },
                {
                    catgeory: 'react',
                    description: 'dsad',
                    name: 'Lucas',
                    title: 'react',
                    tried: ['Debugging', 'Throwing head against wall'],
                    id: 10
                }
            ]
        }
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
        return this.state.assigned.map(values => (
            <div> name: {values.name} 
                <ul>
                    <li> Category: {values.catgeory} </li>
                    <li> Description: {values.description} </li>
                    <li> Title: {values.title} </li>
                    {values.tried.map(answer => 
                        <li> {answer} </li>
                    )}
                </ul>
        </div>
       ))
    }

    addTicket(ticket){
        let newAvailable = this.state.available.filter(obj => !(ticket === obj))
        let newAssigned = this.state.assigned;
        newAssigned.push(ticket);
        this.setState({assigned: newAssigned, available: newAvailable })
         
    }

    markAsDone(){

    }

    renderAvailable(){
        return this.state.available.map(values => (
            <div> <b>Name:</b> {values.name} 
                <ul>
                    <li> Category: {values.catgeory} </li>
                    <li> Description: {values.description} </li>
                    <li> Title: {values.title} </li>
                    {values.tried.map(answer => 
                        <li> {answer} </li>
                    )}
                </ul>
                <button onClick={() => this.addTicket(values)}> Add Ticket </button>
        </div>
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