import React from 'react';
import axios from 'axios';

class NewTicketFormClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data : {
                name: '',
                title: '',
                description: '',
                tried: [],
                category: ''
            },
            inputArray: []
        };
    }

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
    /** 
     * handles when form data input gets changed for any of the input fields in form
     * @param {React.ChangeEvent<HTMLInputElement>} event - The event called on change
     */
    handleChange(event){
        let newObject = this.state;
        for(const prop in newObject.data){
            if(prop === event.target.id){
                newObject.data[prop] = event.target.value;
                console.log(newObject);
            }
        }
        this.setState(newObject);
    }
    /**
     * Handles form submission
     * @param {React.FormEvent<HTMLFormEvent>} event - The event called on change
     */
    handleSubmit(event){
        event.preventDefault();
        let data = Object.values(this.state.data);
        console.log(data);
        if(Object.values(this.state.data).includes('')){
            return;
        }
        console.table(this.state);
        let tickets = this.props.ticketData.state.available;
        tickets.push(this.state.data);
        this.props.ticketData.setState({available: tickets});
        console.table(this.props);
        axios.post(`some_api`)
            .then(res => {
                console.log('Submitted Succesfully');
                this.setState({
                    data : {
                        name: '',
                        title: '',
                        description: '',
                        tried: [],
                        category: ''
                    },
                    inputArray: []
                })
            })
            .catch(error => {
                console.log(error);
            })
    }

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

export default NewTicketFormClass;