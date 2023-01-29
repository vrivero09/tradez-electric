import React, { Component, useState, useEffect } from 'react';
import '../Contact/contact.css'
import { db } from '../../firebase'


class Contact extends Component {

    //  useState used if file is functional.
    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [message, setMessage] = useState('');

    state = {
        name: '',
        email: '',
        message: ''
    }


    handleOnClick = () => {
        this.props.history.push("/About");
    }

    handleSubmit = (e) => {
        e.preventDefault();

        // Send to db
        db.collection('contacts').add({
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        })
            .then(() => {
                alert('Message has been submitted 👍')
            })
            .cathc(error => {
                alery(error.message)
            });

        // Reset input
        this.setState({name: ''})
        this.setState({email: ''})
        this.setState({message: ''})

    }

    render() {

        return ( // Doesnt work because the configurations are not right
            <form className='form' >
                <h1>Contact 📧</h1>

                <label>Name</label>
                <input placeholder='Name'
                    value={this.state.name}
                    onChange={(e) => this.setState({name: e.target.value})}

                />

                <label>Email</label>
                <input placeholder='Email'
                    value={this.state.email}
                    onChange={(e) => this.setState({email: e.target.value})}
                />

                <label>Message</label>
                <textarea placeholder='Message'
                    value={this.state.message}
                    onChange={(e) => this.setState({message: e.target.value})}
                ></textarea>

                {/* <button
                    type="submit"
                    style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
                >
                    Submit
                </button> */}
            </form>

        );
    }
}
export default Contact;