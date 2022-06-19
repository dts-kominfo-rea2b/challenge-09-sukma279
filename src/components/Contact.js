// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import './Contact.css';
import React from 'react';

const Contact = ({photo, name, phone, email}) => {
    return (
        <div className='contact'>
            <div className='image'>
                <img src={photo} alt="kucing" />
            </div>
            <div className='data'>
                <h3>{name}</h3>
                <p>{phone}</p>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Contact;