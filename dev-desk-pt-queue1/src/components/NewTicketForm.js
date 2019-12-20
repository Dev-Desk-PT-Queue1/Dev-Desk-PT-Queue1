import React from 'react';

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


    displayAttempts(){
        const inputs = this.state.inputArray.concat(DocumentInput);
        let data = this.state;
        data.inputArray = inputs;
        this.setState(data);
    }

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

    handleSubmit(event){
        event.preventDefault();
        console.log(this.state);
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
                onClick={e => this.displayAttempts()}
            > Add Tried Solutions </button>
            {this.state.inputArray.map((Element, index) => {
                return <Element id={index} index={index} tried={this.state} setTried={this.setState.bind(this)} />
            })}
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
    function handleChange(event){
        let array = props.tried;
        array.data.tried[props.index] = event.target.value;
        props.setTried(array);
    }

    return <input 
            type="text"
            id={props.id}
            value={props.tried[props.index]}
            onChange={handleChange}
            />
}

export default NewTicketFormClass;