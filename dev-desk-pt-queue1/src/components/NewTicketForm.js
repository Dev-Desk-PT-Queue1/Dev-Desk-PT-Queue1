import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux'
import { addTicket } from '../actions';
import Dashboard from './Dashboard/Dashboard';

class NewTicketFormClass extends Component {
    
        state = {
            ticket: {
                user_id: '',
                title: '',
                description: '',
                tried: '',
                category: '',
                created_at: '',
                resolved: false, 
                assigned: false
            },
            inputArray: []
        };

        handleChange = e => {
            this.setState({
                ticket: {
                    ...this.state.ticket,
                    [e.target.name]: e.target.value
                }
            });
        };
    

    addAttempts(){
        const inputs = this.state.inputArray.concat(DocumentInput);
        let data = this.state;
        data.inputArray = inputs;
        this.setState(data);
    }
    /** removes an attempt field to the existing inputArray in state */
    removeAttempts(){
        const inputs = this.state.inputArray;
        inputs.pop();
        let data = this.state;
        data.inputArray = inputs;
        this.setState(data);
    }
    // /** 
    //  * handles when form data input gets changed for any of the input fields in form
    //  * @param {React.ChangeEvent<HTMLInputElement>} event - The event called on change
    //  */
    // // handleChange(event){
    //     let newObject = this.state;
    //     for(const prop in newObject.data){
    //         if(prop === event.target.id){
    //             newObject.data[prop] = event.target.value;
    //             console.log(newObject);
    //         }
    //     }
    //     this.setState(newObject);
    // }
    // /**
    //  * Handles form submission
    //  * @param {React.FormEvent<HTMLFormEvent>} event - The event called on change
    //  */
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTicket(this.state.ticket);
        this.props.history.push(`/tickets`);
                this.setState({
                    data : {
                        user_id: '',
                        title: '',
                        description: '',
                        tried: '',
                        category: '',
                        created_at: '',
                        resolved: false, 
                        assigned: false
                    },
                    inputArray: []
                });
            };
            

    render() {
        return (
            <form onSubmit={e => this.handleSubmit(e)}>
            Name: <input 
                type="text"
                id="name"
                value={this.state.data.name}
                onChange={e => this.handleChange(e)}
            />
            Title: <input 
                type="text"
                id="title"
                value={this.state.data.title}
                onChange={e => this.handleChange(e)}
            />
            Desc: <input 
                type="text"
                id="description"
                value={this.state.data.description}
                onChange={e => this.handleChange(e)}
            />
            <button 
                type="button"
                id="add items"
                value="Add things you have tried"
                onClick={e => this.addAttempts()}
            > Add Tried Solutions </button>
            {this.state.inputArray.map((Element, index) => {
                return <Element id={index} index={index} tried={this.state} setTried={this.setState.bind(this)} />
            })}
            <button
                type="button"
                id="remove items"
                onClick={e => this.removeAttempts()}
            > Remove Last Tried Solution </button>
            Category: <input 
                type="text"
                id="category"
                value={this.state.data.category}
                onChange={e => this.handleChange(e)}
            />
            <button
                type="submit"
            >Submit</button>
        </form>
        );
    }
}

const DocumentInput = (props) => {
    /**
     * adds the value to the class components array based on the index of DocumentInput
     * @param {React.ChangeEvent<HTMLInputElement>} event - The event called on change
     */
    function handleChange(event){
        let array = props.tried;
        array.data.tried[props.index] = event.target.value;
        props.setTried(array);
    }

    return( 
        <>
        {`Try #${props.index + 1}`}
            <input 
            type="text"
            id={props.id}
            value={props.tried[props.index]}
            onChange={handleChange}
            />
        </>
    )
}

// export default NewTicketFormClass;

const mapStateToProps = state => {
    return {
      tickets: state.tickets,
      user: state.user,
      categories: state.categories
    };
  };
  
  export default connect(
    mapStateToProps,
    { NewTicketFormClass }
  )(NewTicketFormClass);