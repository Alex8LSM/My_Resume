import styles from './SoftSkills.module.css';

const SoftSkills = () => {

  return (
                <div className={styles.container}>

                    <h3 className={styles.title}>Soft Skills</h3>
                    <ul className={styles.list}>
                        <li className={styles.item}><span className={styles.text}>Scrum</span></li>
                        <li className={styles.item}><span className={styles.text}>Agile</span></li>
                        <li className={styles.item}><span className={styles.text}>GTD</span></li>
                        <li className={styles.item}><span className={styles.text}>Teamwork</span></li>
                    </ul>
                </div>
  );
};

export default SoftSkills;