import styles from './Education.module.css';

const Education = () => {

  return (
    <section className={styles.container}>
      <h3 className={styles.title}>Education</h3>
      <h4 className={styles.university}>National University of Radioelectronics</h4>
      <h4 className={styles.specialty}>Management</h4>
      <p className={styles.period}>September 2009 - June 2014   <span className={styles.My_divider}>|</span>   Country</p>
    </section>
  );
};

export default Education;