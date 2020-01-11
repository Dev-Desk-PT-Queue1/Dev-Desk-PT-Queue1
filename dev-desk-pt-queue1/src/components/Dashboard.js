//needs to have separate views for the user dashboard and the helper dashboard. You could hash it out as one single component here, or you can delete this file and do a StudentDash.js component and a HelperDashboard.js component
import React, { useState } from 'react';
import propTypes from 'prop-types';
import Helper from './Helper';
import User from './User';


class Dashboard extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
            user: "",
            assigned: [
            {
                category: 'react',
                description: 'dsad',
                name: 'nate',
                title: 'react',
                tried: ['Debugging', 'Throwing head against wall'],
                assigned: 'somehash'
            },
            {
                category: 'react',
                description: 'dsad',
                name: 'John',
                title: 'react',
                tried: ['Debugging', 'Throwing head against wall'],
                assigned: 'somehash'
            },
            {
                category: 'react',
                description: 'dsad',
                name: 'Jeff',
                title: 'react',
                tried: ['Debugging', 'Throwing head against wall'],
                assigned: 'somehash'
            }
        ],
            available: [
                {
                    category: 'react',
                    description: 'dsad',
                    name: 'sam',
                    title: 'react',
                    tried: ['Debugging', 'Throwing head against wall'],
                    id: 6
                },
                {
                    category: 'react',
                    description: 'dsad',
                    name: 'katie',
                    title: 'react',
                    tried: ['Debugging', 'Throwing head against wall'],
                    id: 7
                },
                {
                    category: 'react',
                    description: 'dsad',
                    name: 'mark',
                    title: 'react',
                    tried: ['Debugging', 'Throwing head against wall'],
                    id: 8
                },
                {
                    category: 'react',
                    description: 'dsad',
                    name: 'ben',
                    title: 'react',
                    tried: ['Debugging', 'Throwing head against wall'],
                    id: 9
                },
                {
                    category: 'react',
                    description: 'dsad',
                    name: 'Lucas',
                    title: 'react',
                    tried: ['Debugging', 'Throwing head against wall'],
                    id: 10
                }
            ]
        }
    }

    /** Determines which type of user is logged in and displays data based on that */
    handleView(){
        switch(this.state.user){
            case 'Helper':
                return(
                    <Helper state={this.state} setState={this.setState.bind(this)}/>
                )
            break;
            case 'User': 
                return (
                    <User state={this.state} setState={this.setState.bind(this)}/>
                )
            break;
        }
    }

    render() {
        return (
            <>
                <button onClick={() => this.setState({user: 'User'})}> Student View </button>
                <button onClick={() => this.setState({user: 'Helper'})}> Helper View </button>
                {this.handleView()}
                
            </>
        );
    }
}

Dashboard.propTypes = {
    User: propTypes.string
};

export default Dashboard;
