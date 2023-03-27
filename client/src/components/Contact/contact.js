import React, { Component, useState, useEffect } from 'react';
import '../Contact/contact.css'
import { db } from '../../firebase'
import * as firebase from "firebase/app";

class Contact extends Component {

    //  useState used if file is functional.
    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [message, setMessage] = useState('');

    handleSubmitMessage () {
        alert('Oops! This page is still under construction. :)')
      }

    constructor(props) {
        super(props);
    
        // Initialize Firebase
        db.firebaseConfig
    
        // Create a reference to the Firebase database
        // this.database = firebase.database();
    
        // Set initial state
        this.state = {
          name: '',
          email: '',
          message: ''
        };
      }
    
//   handleSubmit = (e) => {
//     e.preventDefault();
//     const { name, email, message } = this.state;
//     // Save form data to Firebase database
//     this.db.ref('contacts').push({
//       name,
//       email,
//       message,
//     });
//     // Reset form fields
//     this.setState({
//       name: '',
//       email: '',
//       message: '',
//     });
//   };

  // Handlers for form inputs
  
//   handleNameChange = event => {
//     this.setState({ name: event.target.value });
//   }

//   handleEmailChange = event => {
//     this.setState({ email: event.target.value });
//   }

//   handleMessageChange = event => {
//     this.setState({ message: event.target.value });
//   }

    // handleOnClick = () => {
    //     this.props.history.push("/About");
    // }

    // This submits to firebase database.
    // handleSubmit = (e) => {
    //     e.preventDefault();

    //     // Send to db
    //     db.collection('contacts').add({
    //         name: this.state.name,
    //         email: this.state.email,
    //         message: this.state.message
    //     })
    //         .then(() => {
    //             alert('Message has been submitted 👍')
    //         })
    //         .cathc(error => {
    //             alery(error.message)
    //         });

    //     // Reset input
    //     // this.setState({name: ''})
    //     // this.setState({email: ''})
    //     // this.setState({message: ''})

    // }

      // Handler for form submission
//   handleSubmit = event => {
//     event.preventDefault();

//     // Save form data to Firebase database
//     const { name, email, message } = this.state;
//     db.ref('submissions').push({
//       name,
//       email,
//       message
//     });

//     // Reset form state
//     this.setState({
//       name: '',
//       email: '',
//       message: ''
//     });
//   }


    // render() {

    //     return ( // Doesnt work because the configurations are not right
    //         <form className='form' >
    //             <h1>Contact 📧</h1>

    //             <label>Name</label>
    //             <input placeholder='Name'
    //                 value={this.state.name}
    //                 onChange={(e) => this.setState({name: e.target.value})}

    //             />

    //             <label>Email</label>
    //             <input placeholder='Email'
    //                 value={this.state.email}
    //                 onChange={(e) => this.setState({email: e.target.value})}
    //             />

    //             <label>Message</label>
    //             <textarea placeholder='Message'
    //                 value={this.state.message}
    //                 onChange={(e) => this.setState({message: e.target.value})}
    //             ></textarea>

    //             <button
    //                 type="submit"
    //                 style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
    //             >
    //                 Submit
    //             </button>
    //         </form>

    //     );
    // }

    // Render the form
  
    render() {
   // const { name, email, message } = this.state;

    return (
      <form className="form" onSubmit={this.handleSubmit}>
         <h1>Contact 📧</h1>


        <label>
          Name:
          {/* <input type="text" value={name} onChange={this.handleNameChange} /> */}
          <input type="text"/>

        </label>
        <label>
          Email:
          {/* <input type="email" value={email} onChange={this.handleEmailChange} /> */}
          <input type="email"/>

        </label>
        <label>
          Message:
          {/* <textarea value={message} onChange={this.handleMessageChange} /> */}
          <textarea />

        </label>
        <button type="submit" onClick={this.handleSubmitMessage}>Submit</button>
      </form>
    );
  }
}
export default Contact;