import styles from './Contacts.module.css';

const Contacts = () => {

  return (
                <div className={styles.contacts}>
                    <h3 className={styles.title}>Contacts</h3>
                    <div>
                        <span className={styles.contactsType}>C:</span>
                        <a href="tel:+77777777777"
                           className={styles.contactsLink}>
                           +7 777 777 77 77
                        </a>
                    </div>
                    <div>
                        <span className={styles.contactsType}>E:</span>
                        <a href="mailto:chornyiav@gmail.com}>"
                           className={styles.contactsLink}>
                           chornyiav@gmail.com
                        </a>
                    </div>          
                </div>
  );
};

export default Contacts;