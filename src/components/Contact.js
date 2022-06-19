// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import './Contact.css';
import React from 'react';

const Contact = (props) => {
    return (
        <div className='contact'>
            <div className='image'>
                <img src={props.photo} alt="kucing" />
            </div>
            <div className='data'>
                <h3>{props.name}</h3>
                <p>{props.phone}</p>
                <p>{props.email}</p>
            </div>
        </div>
    )
}

export default Contact;