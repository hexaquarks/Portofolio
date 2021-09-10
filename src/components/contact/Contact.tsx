const styles = require('./Contact.module.scss');

const Contact = () => {
    return (
        <div className={styles.container}>
            <input className={styles.firstName}>

            </input>
            <input className={styles.lastName}>
                
            </input>
            <input className={styles.subject}>
                {/* Should be optional */}
            </input>
            <input className={styles.email}>
                
            </input>
            <input className={styles.input}>
                
            </input>
        </div>
    )
}

export default Contact;