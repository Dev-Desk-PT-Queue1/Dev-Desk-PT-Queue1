import React, { useState, useEffect } from 'react';
// import axios from 'axios';

const NewTicketForm = () => {
    const [ticketForm, setTicketForm] = useState({
        name: '',
        title: '',
        description: '',
        tried: [],
        category: ''
    });
    const [inputArray, setInputArray] = useState([]);
    const [forceupdate, setForce] = useState();
    const [tried, setTried] = useState([]);

    /** Function to add a input field each time the user clicks a button */
    function displayAttempts(){
        const inputs = inputArray.concat(DocumentInput);
        setInputArray(inputs);
    }

    function handleChange(event){
        let newObject = ticketForm;
        for(const prop in newObject){
            if(prop === event.target.id){
                newObject[prop] = event.target.value;
                console.log(event.target.value);
                console.log(newObject);
            }
        }
        setTicketForm(newObject);
        setForce(!forceupdate);
    }

    function handleSubmit(event){
        event.preventDefault();
        let form = ticketForm;
        form.tried = tried;
        setTicketForm(form);
        console.log(ticketForm);
    }

    return (
        <form onSubmit={handleSubmit}>
            Name: <input 
                type="text"
                id="name"
                value={ticketForm.name}
                onChange={handleChange}
            />
            Title: <input 
                type="text"
                id="title"
                value={ticketForm.title}
                onChange={handleChange}
            />
            Desc: <input 
                type="text"
                id="description"
                value={ticketForm.description}
                onChange={handleChange}
            />
            <button 
                type="button"
                id="add items"
                value="Add things you have tried"
                onClick={displayAttempts}
            > Add Tried Solutions </button>
            {inputArray.map((Element, index) => {
                return <Element id={index} index={index} tried={tried} setTried={setTried} />
            })}
            Category: <input 
                type="text"
                id="category"
                value={ticketForm.category}
                onChange={handleChange}
            />
            <button
                type="submit"
            >Submit</button>
        </form>
    );
};

const DocumentInput = (props) => {
    
    function handleChange(event){
        let array = props.tried;
        console.log(array);
        array[props.index] = event.target.value;
        console.log(array);
        props.setTried(array);
    }

    return <input 
            type="text"
            id={props.id}
            value={props.tried[props.index]}
            onChange={handleChange}
            />
}


export default NewTicketForm;