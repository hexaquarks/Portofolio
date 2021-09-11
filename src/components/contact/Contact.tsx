import { useState } from 'react';
import { useAlert } from 'react-alert'

import informationIcon from '../../assets/informationIcon.jpg';
import planeIcon from '../../assets/paperPlane.png';

const styles = require('./Contact.module.scss');

const Contact = () => {
    
    const [status, setStatus] = useState("submit");
    const alert = useAlert();

    const handleSubmit = async (e : any) => {
        e.preventDefault();
        setStatus("Sending...");
        console.log(e.target.elements);
        const { fname, lname, subject,email, message } = e.target.elements;
        console.log(fname);
        let details = {
            fname: fname.value,
            lname: lname.value,
            subject: subject.value,
            email: email.value,
            message: message.value
        };
        console.log(details.fname);
        let response = await fetch("http://localhost:5000/contact", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(details),
          });
        setStatus("Submit");
        let result = await response.json();
        alert.show(
            <div className={styles.alert}>
                Message submitted succesfully
            </div>
        )
    };
    return (
        <form onSubmit={handleSubmit}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <img src={informationIcon} />
                    <h1> Contact Me</h1>
                </div>
                <div className={styles.firstName}>
                    <label htmlFor="fname">First name</label>
                    <input
                        type="text" 
                        placeholder="First Name..."
                        id="fname" required />
                </div>

                <div className={styles.lastName}>
                    <label htmlFor="lname">Last name</label>
                    <input
                        type="text" 
                        placeholder="Last Name..."
                        id="lname" required />
                </div>

                <div className={styles.subject}>
                    <label htmlFor="subject">Subject</label>
                    <input
                        type="text" 
                        placeholder="subject...  (optional)"
                        id="subject" />
                </div>

                <div className={styles.email}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email" 
                        placeholder="Email..."
                        id="email" required />
                </div>

                <div className={styles.input}>
                    <label htmlFor="message">Message</label>
                    <textarea
                        name="message" rows={3} 
                        placeholder="Your message..." 
                        id="message" required />
                </div>
                <button type="submit">
                    <img src={planeIcon} />
                    <span>
                    </span>
                </button>
            </div>
        </form>
    )
}

export default Contact;