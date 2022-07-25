import styles from './WorkExperience.module.css';

const WorkExperience = () => {


  return (
    <section className={styles.container}>
    <h3 className={styles.mainTitle}>Work Experience</h3>

    {/* <!--Company_3--> */}
    <div className={styles.companyBlock}>
        <h4 className={styles.position}>Front-End Developer <span className={styles.company}> Freelance </span></h4>
        <p className={styles.period}>September 2019 - up to now   <span className={styles.My_divider}>|</span>   Country </p>
        <ul className={styles.duties}>
            <span className={styles.duty}>
                <li> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                <li>Risus commodo viverra maecenas. </li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. </li>
            </span>
        </ul>
    </div>
    {/* <!--Company_2--> */}
    <div className={styles.companyBlock}>
        <h4 className={styles.position}>Manager <span className={styles.company}>Roga & Kopyta New </span></h4>
        <p className={styles.period}>March 2015 - October 2018   <span className={styles.My_divider}>|</span>   Country </p>
        <ul className={styles.duties}>
            <span className={styles.duty}>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod labore et dolore magna aliqua.</li>
                <li>Quis ipsum suspendisse ultrices gravida.</li>
                <li>Risus commodo viverra maecenas. </li>
            </span>
        </ul>
    </div>
    {/* <!--Company_1--> */}
    <div>
        <h4 className={styles.position}>Manager <span className={styles.company}>Roga & Kopyta LLC </span></h4>
        <p className={styles.period}>June 2014 - February 2015   <span className={styles.My_divider}>|</span>   Country </p>
        <ul className={styles.duties}>
            <span className={styles.duty}>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                <li>Quis ipsum suspendisse ultrices gravida.</li>
                <li>Risus commodo viverra maecenas. </li>
            </span>
        </ul>
    </div>
</section>
  );
};

export default WorkExperience;