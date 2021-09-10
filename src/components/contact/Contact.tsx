import informationIcon from '../../assets/informationIcon.jpg';
const styles = require('./Contact.module.scss');

const Contact = () => {
    return (
        <form method="POST">
        <div className={styles.container}>
            <div className={styles.header}>
            <img src={informationIcon} />
                <h1> Contact Me </h1>
            </div>
                <div className={styles.firstName}> 
                    <label htmlFor="fname">First name</label>
                    <input
                        type="text" name="fname" 
                        placeholder="First Name...">
                    </input>
                </div>

                <div className={styles.lastName}>
                    <label htmlFor="lname">Last name</label>
                    <input 
                        type="text" name="lname"
                        placeholder="Last Name...">
                    </input>
                </div>

                <div className={styles.subject}>
                    <label htmlFor="subject">Subject</label>
                    <input 
                        type="text" name="submit"
                        placeholder="subject...  (optional)">
                        {/* Should be optional */}
                    </input>
                </div>

                <div className={styles.email}> 
                    <label htmlFor="email">Email</label>
                    <input 
                        type="text" name="email"
                        placeholder="Email...">   
                    </input>
                </div> 

                <div className={styles.input}> 
                    <label htmlFor="message">Message</label>
                    <textarea  
                        name="message" rows={3}
                        placeholder="Your message...">

                    </textarea>
                </div>
                <button>Submit</button>
        </div>
        </form> 
    )
}

export default Contact;