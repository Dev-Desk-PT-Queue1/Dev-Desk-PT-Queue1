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
                tried: ['Debugging', 'Throwing head against wall']
            },
            {
                catgeory: 'react',
                description: 'dsad',
                name: 'John',
                title: 'react',
                tried: ['Debugging', 'Throwing head against wall']
            },
            {
                catgeory: 'react',
                description: 'dsad',
                name: 'Jeff',
                title: 'react',
                tried: ['Debugging', 'Throwing head against wall']
            }
        ],
            available: [
                {
                    catgeory: 'react',
                    description: 'dsad',
                    name: 'sam',
                    title: 'react',
                    tried: ['Debugging', 'Throwing head against wall']
                },
                {
                    catgeory: 'react',
                    description: 'dsad',
                    name: 'katie',
                    title: 'react',
                    tried: ['Debugging', 'Throwing head against wall']
                },
                {
                    catgeory: 'react',
                    description: 'dsad',
                    name: 'mark',
                    title: 'react',
                    tried: ['Debugging', 'Throwing head against wall']
                },
                {
                    catgeory: 'react',
                    description: 'dsad',
                    name: 'ben',
                    title: 'react',
                    tried: ['Debugging', 'Throwing head against wall']
                },
                {
                    catgeory: 'react',
                    description: 'dsad',
                    name: 'Lucas',
                    title: 'react',
                    tried: ['Debugging', 'Throwing head against wall']
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

    renderAvailable(){

    }

    refreshAvailable(){

    }

    render() {
        return (
            <div>
                {this.renderAssigned()}
            </div>
        );
    }
}

export default Helper;